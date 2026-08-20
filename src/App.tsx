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
import { SettingsPage } from './pages/SettingsPage';
import { ProgressPage } from './pages/ProgressPage';
import { useStudyStats } from './hooks/useStudyStats';
import { useUserSettings } from './hooks/useUserSettings';
import { useActiveSession } from './hooks/useActiveSession';
import { useBackHandler } from './hooks/useBackButton';
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
    clearMissedQuestions,
    clearStats,
  } = useStudyStats();

  const { settings, updateSetting, resetSettings } = useUserSettings();

  const {
    activeSession,
    isSessionRunning,
    startSession,
    resumeSession,
    pauseSession,
    updateCurrentIndex,
    recordAnswer,
    submitQuestion,
    toggleFlag,
    updateSecondsRemaining,
    clearSession,
  } = useActiveSession();

  const [activeResult, setActiveResult] = useState<QuizResult | null>(null);
  const [activeMaterial, setActiveMaterial] = useState<StudyMaterial | null>(null);
  const [materialsPage, setMaterialsPage] = useState(1);
  const [subjectsPage, setSubjectsPage] = useState(1);

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
    startSession(config, questions);
  };

  // Start a targeted remediation drill with explicit questions
  const handleStartCustomDrill = (customQuestions: Question[]) => {
    setActiveMaterial(null);
    setActiveResult(null);
    startSession(
      {
        mode: 'practice',
        subjectIds: [],
        questionCount: customQuestions.length,
      },
      customQuestions
    );
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
    startSession(
      {
        mode: 'topic_drill',
        subjectIds: [material.subjectId],
        topic: material.topic,
        questionCount: matchingQuestions.length,
      },
      matchingQuestions
    );
  };

  // When a quiz/exam session completes
  const handleFinishSession = (result: QuizResult) => {
    recordQuizResult(result);
    clearSession();
    setActiveResult(result);
  };

  // Exit from active session, results, or active material reader
  const handleExitSession = () => {
    pauseSession();
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

  // Derive session subtitle for header
  const getSessionSubtitle = () => {
    if (activeMaterial) return `${activeMaterial.category === 'gen_ed' ? 'GenEd' : 'ProfEd'} • ${activeMaterial.subjectName}`;
    if (activeResult) return 'Scorecard & Analysis';
    if (!activeSession) return 'LET Board Exam Prep';
    if (activeSession.config.mode === 'exam') return 'Timed Simulation';
    return 'Interactive Practice';
  };

  const [previousTab, setPreviousTab] = useState<NavigationTab>('home');

  const handleOpenSettings = () => {
    handleExitSession();
    setPreviousTab(currentTab !== 'settings' ? currentTab : 'home');
    setCurrentTab('settings');
  };

  const handleBackFromSettings = () => {
    setCurrentTab(previousTab);
  };

  const inSession = Boolean((isSessionRunning && activeSession) || activeResult || activeMaterial);
  const hideNav = inSession;

  // Priority 40: Handle exiting active study reader, exam results, or practice session
  useBackHandler(
    () => {
      if (activeMaterial) {
        handleExitSession();
        return true;
      }
      if (activeResult) {
        setActiveResult(null);
        return true;
      }
      if (isSessionRunning && activeSession && activeSession.config.mode !== 'exam') {
        handleExitSession();
        return true;
      }
      return false;
    },
    40,
    Boolean(activeMaterial || activeResult || (isSessionRunning && activeSession && activeSession.config.mode !== 'exam'))
  );

  // Priority 30: Handle navigating back from Settings page
  useBackHandler(
    () => {
      handleBackFromSettings();
      return true;
    },
    30,
    currentTab === 'settings'
  );

  // Priority 20: Handle navigating from secondary tabs back to Home tab
  useBackHandler(
    () => {
      setCurrentTab('home');
      return true;
    },
    20,
    currentTab !== 'home' && currentTab !== 'settings' && !inSession
  );

  return (
    <AppShell
      currentTab={currentTab}
      onTabChange={(tab) => {
        handleExitSession();
        setCurrentTab(tab);
      }}
      inSession={inSession}
      sessionTitle={getSessionTitle()}
      sessionSubtitle={getSessionSubtitle()}
      onBack={currentTab === 'settings' ? handleBackFromSettings : handleExitSession}
      onOpenSettings={handleOpenSettings}
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
      ) : isSessionRunning && activeSession ? (
        /* Active Practice Review or Timed Exam Session */
        activeSession.config.mode === 'exam' ? (
          <QuizExamSessionPage
            config={activeSession.config}
            questions={activeSession.questions}
            bookmarkedIds={stats.bookmarkedQuestionIds}
            initialIndex={activeSession.currentIndex}
            initialAnswers={activeSession.answers}
            initialFlaggedIds={activeSession.flaggedQuestionIds}
            initialSecondsRemaining={activeSession.secondsRemaining}
            startTime={activeSession.startTime}
            onRecordAnswer={recordAnswer}
            onToggleFlag={toggleFlag}
            onUpdateIndex={updateCurrentIndex}
            onUpdateSecondsRemaining={updateSecondsRemaining}
            onToggleBookmark={toggleBookmark}
            onFinishSession={handleFinishSession}
            onExit={handleExitSession}
          />
        ) : (
          <PracticeReviewPage
            config={activeSession.config}
            questions={activeSession.questions}
            bookmarkedIds={stats.bookmarkedQuestionIds}
            initialIndex={activeSession.currentIndex}
            initialAnswers={activeSession.answers}
            initialSubmittedQuestionIds={activeSession.submittedQuestionIds}
            startTime={activeSession.startTime}
            onRecordAnswer={recordAnswer}
            onSubmitQuestion={submitQuestion}
            onUpdateIndex={updateCurrentIndex}
            onToggleBookmark={toggleBookmark}
            onFinishSession={handleFinishSession}
            onExit={handleExitSession}
          />
        )
      ) : (
        /* Primary Navigation Destinations */
        <>
          {currentTab === 'home' && (
            <HomePage
              stats={stats}
              activeSession={activeSession}
              onResumeSession={resumeSession}
              onDiscardSession={clearSession}
              onStartQuiz={handleStartQuiz}
              onNavigateTab={(tab) => setCurrentTab(tab)}
            />
          )}

          {currentTab === 'progress' && (
            <ProgressPage
              stats={stats}
              onClearStats={clearStats}
              onOpenStudyBank={() => setCurrentTab('bank')}
            />
          )}

          {currentTab === 'materials' && (
            <StudyMaterialsPage
              onOpenMaterial={handleOpenMaterial}
              bookmarkedMaterialIds={stats.bookmarkedMaterialIds || []}
              completedMaterialIds={stats.completedMaterialIds || []}
              onToggleMaterialBookmark={toggleMaterialBookmark}
              currentPage={materialsPage}
              onPageChange={setMaterialsPage}
            />
          )}

          {(currentTab === 'practice' || (currentTab as string) === 'quiz') && (
            <QuizConfigPage
              onStartExam={handleStartQuiz}
              activeSession={activeSession}
              onResumeSession={resumeSession}
              onDiscardSession={clearSession}
            />
          )}

          {currentTab === 'subjects' && (
            <SubjectsPage
              onStartQuiz={handleStartQuiz}
              onOpenMaterial={handleOpenMaterial}
              subjectMastery={stats.subjectMastery}
              currentPage={subjectsPage}
              onPageChange={setSubjectsPage}
            />
          )}

          {currentTab === 'settings' && (
            <SettingsPage
              settings={settings}
              stats={stats}
              onUpdateSetting={updateSetting}
              onClearStats={clearStats}
              onResetSettings={resetSettings}
            />
          )}

          {currentTab === 'bank' && (
            <StudyBankPage
              bookmarkedIds={stats.bookmarkedQuestionIds}
              missedIds={stats.missedQuestionIds}
              onToggleBookmark={toggleBookmark}
              onClearMissed={clearMissedQuestions}
              onStartQuiz={handleStartQuiz}
              onStudyTopic={handleStudyTopic}
            />
          )}
        </>
      )}
    </AppShell>
  );
}
