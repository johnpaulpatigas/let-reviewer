import { useState, useEffect, useCallback } from 'react';
import type { UserStudyStats, QuizResult } from '../types';

const STORAGE_KEY = 'let_reviewer_study_stats_v1';

const getInitialStats = (): UserStudyStats => {
  const defaultData: UserStudyStats = {
    totalAnswered: 0,
    totalCorrect: 0,
    subjectMastery: {},
    bookmarkedQuestionIds: [],
    missedQuestionIds: [],
    quizHistory: [],
    readMaterialIds: [],
    completedMaterialIds: [],
    bookmarkedMaterialIds: [],
  };

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed: UserStudyStats = JSON.parse(saved);
      return {
        ...parsed,
        readMaterialIds: parsed.readMaterialIds || [],
        completedMaterialIds: parsed.completedMaterialIds || [],
        bookmarkedMaterialIds: parsed.bookmarkedMaterialIds || [],
      };
    }
  } catch {
    // fallback
  }
  return defaultData;
};

export function useStudyStats() {
  const [stats, setStats] = useState<UserStudyStats>(getInitialStats);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
    } catch {
      // ignore storage error
    }
  }, [stats]);

  const toggleBookmark = useCallback((questionId: string) => {
    setStats((prev) => {
      const isBookmarked = prev.bookmarkedQuestionIds.includes(questionId);
      const updated = isBookmarked
        ? prev.bookmarkedQuestionIds.filter((id) => id !== questionId)
        : [...prev.bookmarkedQuestionIds, questionId];

      return {
        ...prev,
        bookmarkedQuestionIds: updated,
      };
    });
  }, []);

  const toggleMaterialBookmark = useCallback((materialId: string) => {
    setStats((prev) => {
      const current = prev.bookmarkedMaterialIds || [];
      const isBookmarked = current.includes(materialId);
      const updated = isBookmarked
        ? current.filter((id) => id !== materialId)
        : [...current, materialId];

      return {
        ...prev,
        bookmarkedMaterialIds: updated,
      };
    });
  }, []);

  const markMaterialCompleted = useCallback((materialId: string) => {
    setStats((prev) => {
      const completed = prev.completedMaterialIds || [];
      if (completed.includes(materialId)) return prev;

      return {
        ...prev,
        completedMaterialIds: [...completed, materialId],
      };
    });
  }, []);

  const markMaterialRead = useCallback((materialId: string) => {
    setStats((prev) => {
      const read = prev.readMaterialIds || [];
      if (read.includes(materialId)) return prev;

      return {
        ...prev,
        readMaterialIds: [...read, materialId],
      };
    });
  }, []);

  const recordQuizResult = useCallback((result: QuizResult) => {
    setStats((prev) => {
      const newSubjectMastery = { ...prev.subjectMastery };
      const newMissed = new Set(prev.missedQuestionIds);

      // Update subject mastery
      result.subjectBreakdown.forEach((sb) => {
        const existing = newSubjectMastery[sb.subjectId] || { answered: 0, correct: 0 };
        newSubjectMastery[sb.subjectId] = {
          answered: existing.answered + sb.total,
          correct: existing.correct + sb.correct,
        };
      });

      // Update missed questions list
      result.questions.forEach((q) => {
        const ans = result.answers[q.id];
        if (ans) {
          if (!ans.isCorrect) {
            newMissed.add(q.id);
          } else {
            newMissed.delete(q.id);
          }
        } else if (result.config.mode === 'exam') {
          newMissed.add(q.id);
        }
      });

      const answeredInSession =
        result.config.mode === 'exam'
          ? result.totalQuestions
          : Object.keys(result.answers).length || result.totalQuestions;

      return {
        ...prev,
        totalAnswered: prev.totalAnswered + answeredInSession,
        totalCorrect: prev.totalCorrect + result.correctCount,
        subjectMastery: newSubjectMastery,
        missedQuestionIds: Array.from(newMissed),
        quizHistory: [result, ...prev.quizHistory].slice(0, 30),
      };
    });
  }, []);

  const clearMissedQuestions = useCallback(() => {
    setStats((prev) => ({
      ...prev,
      missedQuestionIds: [],
    }));
  }, []);

  const clearStats = useCallback(() => {
    const freshStats: UserStudyStats = {
      totalAnswered: 0,
      totalCorrect: 0,
      subjectMastery: {},
      bookmarkedQuestionIds: [],
      missedQuestionIds: [],
      quizHistory: [],
      readMaterialIds: [],
      completedMaterialIds: [],
      bookmarkedMaterialIds: [],
    };
    setStats(freshStats);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(freshStats));
    } catch {
      // ignore
    }
  }, []);

  return {
    stats,
    toggleBookmark,
    toggleMaterialBookmark,
    markMaterialCompleted,
    markMaterialRead,
    recordQuizResult,
    clearMissedQuestions,
    clearStats,
  };
}
