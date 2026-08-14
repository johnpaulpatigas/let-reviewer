import { useState } from 'react';
import { AppShell } from './components/layout/AppShell';
import { HomePage } from './pages/HomePage';
import { SubjectsPage } from './pages/SubjectsPage';
import { QuizConfigPage } from './pages/QuizConfigPage';
import { PracticeReviewPage } from './pages/PracticeReviewPage';
import { QuizExamSessionPage } from './pages/QuizExamSessionPage';
import { QuizResultPage } from './pages/QuizResultPage';
import { StudyBankPage } from './pages/StudyBankPage';
import { ProgressPage } from './pages/ProgressPage';
import { useStudyStats } from './hooks/useStudyStats';
import { buildQuizQuestions } from './data/questions';
import { SUBJECTS } from './data/subjects';
import type { NavigationTab, QuizConfig, QuizResult, Question } from './types';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavigationTab>('home');
  const { stats, toggleBookmark, recordQuizResult, clearStats } = useStudyStats();

  // Active quiz session states
  const [activeSession, setActiveSession] = useState<{
    config: QuizConfig;
    questions: Question[];
  } | null>(null);

  const [activeResult, setActiveResult] = useState<QuizResult | null>(null);

  // Start a new quiz session (practice or exam)
  const handleStartQuiz = (config: QuizConfig) => {
    const questions = buildQuizQuestions(
      config,
      stats.bookmarkedQuestionIds,
      stats.missedQuestionIds
    );

    if (questions.length === 0) {
      alert('No questions match this selection. Please choose different subjects or options.');
      return;
    }

    setActiveResult(null);
    setActiveSession({
      config,
      questions,
    });
  };

  // Start a targeted remediation drill with explicit questions
  const handleStartCustomDrill = (customQuestions: Question[]) => {
    setActiveResult(null);
    setActiveSession({
      config: {
        mode: 'practice',
        subjectIds: [],
        questionCount: customQuestions.length,
      },
      questions: customQuestions,
    });
  };

  // When a quiz/exam session completes
  const handleFinishSession = (result: QuizResult) => {
    recordQuizResult(result);
    setActiveSession(null);
    setActiveResult(result);
  };

  // Exit from active session or results
  const handleExitSession = () => {
    setActiveSession(null);
    setActiveResult(null);
  };

  // Derive session title for header
  const getSessionTitle = () => {
    if (activeResult) return 'Exam Results & Review';
    if (!activeSession) return '';

    if (activeSession.config.mode === 'exam') {
      return 'LET Mock Board Exam';
    }
    if (activeSession.config.topic) {
      return `Topic: ${activeSession.config.topic}`;
    }
    if (activeSession.config.subjectIds.length === 1) {
      const sub = SUBJECTS.find((s) => s.id === activeSession.config.subjectIds[0]);
      return sub ? sub.name : 'Subject Practice';
    }
    if (activeSession.config.includeOnlyBookmarked) {
      return 'Bookmarked Questions Drill';
    }
    if (activeSession.config.includeOnlyIncorrect) {
      return 'Missed Questions Drill';
    }
    return 'General Review';
  };

  const inSession = Boolean(activeSession || activeResult);
  const hideNav = inSession;

  return (
    <AppShell
      currentTab={currentTab}
      onTabChange={(tab) => {
        handleExitSession();
        setCurrentTab(tab);
      }}
      inSession={inSession}
      sessionTitle={getSessionTitle()}
      onBack={handleExitSession}
      streakDays={stats.streakDays}
      totalAnswered={stats.totalAnswered}
      bankCount={stats.bookmarkedQuestionIds.length}
      hideNav={hideNav}
    >
      {/* Active Exam Results View */}
      {activeResult ? (
        <QuizResultPage
          result={activeResult}
          bookmarkedIds={stats.bookmarkedQuestionIds}
          onToggleBookmark={toggleBookmark}
          onRetryIncorrect={handleStartCustomDrill}
          onRetakeQuiz={() => {
            const cfg = activeResult.config;
            handleStartQuiz(cfg);
          }}
          onGoHome={() => {
            setActiveResult(null);
            setCurrentTab('home');
          }}
        />
      ) : activeSession ? (
        /* Active Practice Review or Timed Exam Session */
        activeSession.config.mode === 'exam' ? (
          <QuizExamSessionPage
            config={activeSession.config}
            questions={activeSession.questions}
            bookmarkedIds={stats.bookmarkedQuestionIds}
            onToggleBookmark={toggleBookmark}
            onFinishSession={handleFinishSession}
            onExit={handleExitSession}
          />
        ) : (
          <PracticeReviewPage
            config={activeSession.config}
            questions={activeSession.questions}
            bookmarkedIds={stats.bookmarkedQuestionIds}
            onToggleBookmark={toggleBookmark}
            onFinishSession={handleFinishSession}
            onExit={handleExitSession}
          />
        )
      ) : (
        /* Navigation Tabs */
        <>
          {currentTab === 'home' && (
            <HomePage
              onStartQuiz={handleStartQuiz}
              onNavigateTab={(tab) => setCurrentTab(tab)}
              streakDays={stats.streakDays}
              totalAnswered={stats.totalAnswered}
              totalCorrect={stats.totalCorrect}
              bookmarkedCount={stats.bookmarkedQuestionIds.length}
              missedCount={stats.missedQuestionIds.length}
            />
          )}

          {currentTab === 'subjects' && (
            <SubjectsPage
              onStartQuiz={handleStartQuiz}
              subjectMastery={stats.subjectMastery}
            />
          )}

          {currentTab === 'quiz' && (
            <QuizConfigPage onStartExam={handleStartQuiz} />
          )}

          {currentTab === 'bank' && (
            <StudyBankPage
              bookmarkedIds={stats.bookmarkedQuestionIds}
              missedIds={stats.missedQuestionIds}
              onToggleBookmark={toggleBookmark}
              onStartQuiz={handleStartQuiz}
            />
          )}

          {currentTab === 'progress' && (
            <ProgressPage
              stats={stats}
              onClearStats={clearStats}
            />
          )}
        </>
      )}
    </AppShell>
  );
}
