import { useState, useEffect, useCallback } from 'react';
import type { UserStudyStats, QuizResult } from '../types';

const STORAGE_KEY = 'let_reviewer_study_stats_v1';

const getInitialStats = (): UserStudyStats => {
  const today = new Date().toISOString().split('T')[0];
  const defaultData: UserStudyStats = {
    totalAnswered: 0,
    totalCorrect: 0,
    streakDays: 1,
    lastStudyDate: today,
    subjectMastery: {},
    bookmarkedQuestionIds: [],
    missedQuestionIds: [],
    quizHistory: [],
  };

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed: UserStudyStats = JSON.parse(saved);
      // Check streak during initialization
      if (parsed.lastStudyDate !== today) {
        const lastDate = new Date(parsed.lastStudyDate);
        const currentDate = new Date(today);
        const diffTime = Math.abs(currentDate.getTime() - lastDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        return {
          ...parsed,
          lastStudyDate: today,
          streakDays: diffDays === 1 ? parsed.streakDays + 1 : 1,
        };
      }
      return parsed;
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
        if (!ans || !ans.isCorrect) {
          newMissed.add(q.id);
        } else {
          newMissed.delete(q.id);
        }
      });

      return {
        ...prev,
        totalAnswered: prev.totalAnswered + result.totalQuestions,
        totalCorrect: prev.totalCorrect + result.correctCount,
        subjectMastery: newSubjectMastery,
        missedQuestionIds: Array.from(newMissed),
        quizHistory: [result, ...prev.quizHistory].slice(0, 30), // keep last 30 quizzes
      };
    });
  }, []);

  const clearStats = useCallback(() => {
    const today = new Date().toISOString().split('T')[0];
    const freshStats: UserStudyStats = {
      totalAnswered: 0,
      totalCorrect: 0,
      streakDays: 1,
      lastStudyDate: today,
      subjectMastery: {},
      bookmarkedQuestionIds: [],
      missedQuestionIds: [],
      quizHistory: [],
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
    recordQuizResult,
    clearStats,
  };
}
