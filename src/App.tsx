import { useState } from 'react';
import { AppShell } from './components/layout/AppShell';
import { HomePage } from './pages/HomePage';
import { StudyMaterialsPage } from './pages/StudyMaterialsPage';
import { StudyMaterialReader } from './components/study/StudyMaterialReader';
import { SubjectsPage } from './pages/SubjectsPage';
import { QuizConfigPage } from './pages/QuizConfigPage';
import { PracticeReviewPage } from './pages/PracticeReviewPage';
import { QuizExamSessionPage } from './pages/QuizExamSessionPage';
import { QuizResultPage } from './pages/QuizResultPage';
import { StudyBankPage } from './pages/StudyBankPage';
import { ProgressPage } from './pages/ProgressPage';
import { useStudyStats } from './hooks/useStudyStats';
import { buildQuizQuestions, ALL_QUESTIONS } from './data/questions';
import {
  findStudyMaterialForTopic,
  getQuestionsForStudyMaterial,
  getRelatedQuestionCount,
} from './data/study-materials';
import { SUBJECTS } from './data/subjects';
import type { NavigationTab, QuizConfig, QuizResult, Question, StudyMaterial } from './types';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavigationTab>('home');
  const {
    stats,
    toggleBookmark,
    toggleMaterialBookmark,
    markMaterialCompleted,
    markMaterialRead,
    recordQuizResult,
    clearStats,
  } = useStudyStats();

  // Active quiz session states
  const [activeSession, setActiveSession] = useState<{
    config: QuizConfig;
    questions: Question[];
  } | null>(null);

  const [activeResult, setActiveResult] = useState<QuizResult | null>(null);
  const [activeMaterial, setActiveMaterial] = useState<StudyMaterial | null>(null);

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

    setActiveMaterial(null);
    setActiveResult(null);
    setActiveSession({
      config,
      questions,
    });
  };

  // Start a targeted remediation drill with explicit questions
  const handleStartCustomDrill = (customQuestions: Question[]) => {
    setActiveMaterial(null);
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

  // When a study guide is opened
  const handleOpenMaterial = (material: StudyMaterial) => {
    markMaterialRead(material.id);
    setActiveMaterial(material);
  };

  // Jump to study guide from a question's topic / explanation
  const handleStudyTopic = (topic: string, subjectId?: string) => {
    const match = findStudyMaterialForTopic(topic, subjectId);
    if (match) {
      handleOpenMaterial(match);
    } else {
      setCurrentTab('materials');
    }
  };

  // Start practice session directly from study guide with exact matching questions
  const handleStartTopicPractice = (material: StudyMaterial) => {
    const matchingQuestions = getQuestionsForStudyMaterial(material, ALL_QUESTIONS);
    if (matchingQuestions.length === 0) {
      alert('No practice questions are currently available for this study topic.');
      return;
    }

    setActiveMaterial(null);
    setActiveResult(null);
    setActiveSession({
      config: {
        mode: 'topic_drill',
        subjectIds: [material.subjectId],
        topic: material.topic,
        questionCount: matchingQuestions.length,
      },
      questions: matchingQuestions,
    });
  };

  // When a quiz/exam session completes
  const handleFinishSession = (result: QuizResult) => {
    recordQuizResult(result);
    setActiveSession(null);
    setActiveResult(result);
  };

  // Exit from active session, results, or active material reader
  const handleExitSession = () => {
    setActiveSession(null);
    setActiveResult(null);
    setActiveMaterial(null);
  };

  // Derive session title for header
  const getSessionTitle = () => {
    if (activeMaterial) return activeMaterial.title;
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

  const inSession = Boolean(activeSession || activeResult || activeMaterial);
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
      {/* Active Study Material Reading View */}
      {activeMaterial ? (
        <StudyMaterialReader
          material={activeMaterial}
          relatedQuestionCount={getRelatedQuestionCount(activeMaterial, ALL_QUESTIONS)}
          isBookmarked={(stats.bookmarkedMaterialIds || []).includes(activeMaterial.id)}
          isCompleted={(stats.completedMaterialIds || []).includes(activeMaterial.id)}
          onToggleBookmark={toggleMaterialBookmark}
          onToggleCompleted={markMaterialCompleted}
          onStartPractice={handleStartTopicPractice}
          onBack={handleExitSession}
        />
      ) : activeResult ? (
        /* Active Exam Results View */
        <QuizResultPage
          result={activeResult}
          bookmarkedIds={stats.bookmarkedQuestionIds}
          onToggleBookmark={toggleBookmark}
          onRetryIncorrect={handleStartCustomDrill}
          onRetakeQuiz={() => {
            const cfg = activeResult.config;
            handleStartQuiz(cfg);
          }}
          onStudyTopic={handleStudyTopic}
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
            onStudyTopic={handleStudyTopic}
            onFinishSession={handleFinishSession}
            onExit={handleExitSession}
          />
        )
      ) : (
        /* Primary Navigation Tabs */
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

          {currentTab === 'materials' && (
            <StudyMaterialsPage
              onOpenMaterial={handleOpenMaterial}
              onStartQuiz={handleStartQuiz}
              onStartPracticeMaterial={handleStartTopicPractice}
              bookmarkedMaterialIds={stats.bookmarkedMaterialIds}
              completedMaterialIds={stats.completedMaterialIds}
              onToggleMaterialBookmark={toggleMaterialBookmark}
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
