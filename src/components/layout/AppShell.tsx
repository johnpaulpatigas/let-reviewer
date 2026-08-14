import React from 'react';
import { Header } from './Header';
import { BottomNav } from './BottomNav';
import type { NavigationTab } from '../../types';

interface AppShellProps {
  children: React.ReactNode;
  currentTab: NavigationTab;
  onTabChange: (tab: NavigationTab) => void;
  inSession?: boolean;
  sessionTitle?: string;
  onBack?: () => void;
  streakDays?: number;
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
  onBack,
  streakDays = 1,
  totalAnswered = 0,
  bankCount = 0,
  hideNav = false,
}) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col selection:bg-indigo-100 selection:text-indigo-900 transition-colors">
      <Header
        currentTab={currentTab}
        inSession={inSession}
        sessionTitle={sessionTitle}
        onBack={onBack}
        streakDays={streakDays}
        totalAnswered={totalAnswered}
      />

      <main className={`flex-1 w-full max-w-2xl mx-auto px-4 pt-4 ${hideNav ? 'pb-8' : 'pb-24'}`}>
        {children}
      </main>

      {!hideNav && (
        <BottomNav
          currentTab={currentTab}
          onTabChange={onTabChange}
          bankCount={bankCount}
        />
      )}
    </div>
  );
};
