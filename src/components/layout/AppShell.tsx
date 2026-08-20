import React, { useEffect } from 'react';
import { Header } from './Header';
import { BottomNav } from './BottomNav';
import type { NavigationTab } from '../../types';

interface AppShellProps {
  children: React.ReactNode;
  currentTab: NavigationTab;
  onTabChange: (tab: NavigationTab) => void;
  inSession?: boolean;
  sessionTitle?: string;
  sessionSubtitle?: string;
  onBack?: () => void;
  onOpenSettings?: () => void;
  totalAnswered?: number;
  bankCount?: number;
  hideNav?: boolean;
}

export const AppShell: React.FC<AppShellProps> = ({
  children,
  currentTab,
  onTabChange,
  inSession = false,
  sessionTitle,
  sessionSubtitle,
  onBack,
  onOpenSettings,
  totalAnswered = 0,
  bankCount = 0,
  hideNav = false,
}) => {
  // Global layout invariant: restore scroll to top on any view or navigation transition
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [currentTab, inSession, sessionTitle]);

  const shouldHideNav = hideNav || currentTab === 'settings';

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-neutral-950 text-slate-900 dark:text-neutral-100 flex flex-col selection:bg-slate-200 selection:text-slate-900 dark:selection:bg-neutral-800 dark:selection:text-neutral-100">
      <Header
        currentTab={currentTab}
        inSession={inSession}
        sessionTitle={sessionTitle}
        sessionSubtitle={sessionSubtitle}
        onBack={onBack}
        onOpenSettings={onOpenSettings}
        totalAnswered={totalAnswered}
      />

      <main className={`flex-1 w-full max-w-2xl mx-auto px-4 pt-4 ${shouldHideNav ? 'pb-8' : 'pb-20'}`}>
        {children}
      </main>

      {!shouldHideNav && (
        <BottomNav
          currentTab={currentTab}
          onTabChange={onTabChange}
          bankCount={bankCount}
        />
      )}
    </div>
  );
};
