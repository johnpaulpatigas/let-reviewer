import { useState, useEffect, useCallback } from 'react';
import type { ActiveSessionState, QuizConfig, Question } from '../types';

const STORAGE_KEY = 'let_reviewer_active_session_v1';

const getInitialSession = (): ActiveSessionState | null => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.sessionId && parsed.questions && parsed.questions.length > 0) {
        return {
          ...parsed,
          submittedQuestionIds: parsed.submittedQuestionIds || [],
          flaggedQuestionIds: parsed.flaggedQuestionIds || [],
          answers: parsed.answers || {},
        };
      }
    }
  } catch {
    // fallback
  }
  return null;
};

export function useActiveSession() {
  const [activeSession, setActiveSession] = useState<ActiveSessionState | null>(getInitialSession);
  const [isSessionRunning, setIsSessionRunning] = useState(false);

  // Sync to localStorage whenever activeSession changes
  useEffect(() => {
    try {
      if (activeSession) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(activeSession));
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // storage quota or serialization error fallback
    }
  }, [activeSession]);

  const startSession = useCallback((config: QuizConfig, questions: Question[]) => {
    const newSession: ActiveSessionState = {
      sessionId: `${config.mode}-${Date.now()}`,
      config,
      questions,
      currentIndex: 0,
      answers: {},
      submittedQuestionIds: [],
      flaggedQuestionIds: [],
      secondsRemaining:
        config.timeLimitMinutes ? config.timeLimitMinutes * 60 : null,
      startTime: Date.now(),
      lastUpdated: Date.now(),
    };
    setActiveSession(newSession);
    setIsSessionRunning(true);
    return newSession;
  }, []);

  const resumeSession = useCallback(() => {
    if (activeSession) {
      setIsSessionRunning(true);
    }
  }, [activeSession]);

  const pauseSession = useCallback(() => {
    setIsSessionRunning(false);
  }, []);

  const updateCurrentIndex = useCallback((index: number) => {
    setActiveSession((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        currentIndex: index,
        lastUpdated: Date.now(),
      };
    });
  }, []);

  const recordAnswer = useCallback(
    (questionId: string, selectedAnswer: number, isCorrect: boolean) => {
      setActiveSession((prev) => {
        if (!prev) return null;
        return {
          ...prev,
          answers: {
            ...prev.answers,
            [questionId]: {
              questionId,
              selectedAnswer,
              isCorrect,
            },
          },
          lastUpdated: Date.now(),
        };
      });
    },
    []
  );

  const submitQuestion = useCallback((questionId: string) => {
    setActiveSession((prev) => {
      if (!prev) return null;
      if (prev.submittedQuestionIds.includes(questionId)) return prev;
      return {
        ...prev,
        submittedQuestionIds: [...prev.submittedQuestionIds, questionId],
        lastUpdated: Date.now(),
      };
    });
  }, []);

  const toggleFlag = useCallback((questionId: string) => {
    setActiveSession((prev) => {
      if (!prev) return null;
      const isFlagged = prev.flaggedQuestionIds.includes(questionId);
      const nextFlagged = isFlagged
        ? prev.flaggedQuestionIds.filter((id) => id !== questionId)
        : [...prev.flaggedQuestionIds, questionId];
      return {
        ...prev,
        flaggedQuestionIds: nextFlagged,
        lastUpdated: Date.now(),
      };
    });
  }, []);

  const updateSecondsRemaining = useCallback((seconds: number | null) => {
    setActiveSession((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        secondsRemaining: seconds,
        lastUpdated: Date.now(),
      };
    });
  }, []);

  const clearSession = useCallback(() => {
    setActiveSession(null);
    setIsSessionRunning(false);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }, []);

  return {
    activeSession,
    isSessionRunning,
    hasActiveSession: Boolean(activeSession && activeSession.questions.length > 0),
    startSession,
    resumeSession,
    pauseSession,
    updateCurrentIndex,
    recordAnswer,
    submitQuestion,
    toggleFlag,
    updateSecondsRemaining,
    clearSession,
  };
}
