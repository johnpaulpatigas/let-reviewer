import React, { useState } from 'react';
import {
  Sun,
  Moon,
  Laptop,
  Type,
  Eye,
  Sliders,
  RotateCcw,
  Check,
  CheckCircle2,
  Trash2,
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import type {
  UserSettings,
  ThemeMode,
  FontSizePreference,
  MotionPreference,
  UserStudyStats,
} from '../types';

interface SettingsPageProps {
  settings: UserSettings;
  stats: UserStudyStats;
  onUpdateSetting: <K extends keyof UserSettings>(key: K, value: UserSettings[K]) => void;
  onClearStats: () => void;
  onResetSettings: () => void;
}

export const SettingsPage: React.FC<SettingsPageProps> = ({
  settings,
  stats,
  onUpdateSetting,
  onClearStats,
  onResetSettings,
}) => {
  const [isResetDataConfirmOpen, setIsResetDataConfirmOpen] = useState(false);
  const [dataResetSuccess, setDataResetSuccess] = useState(false);

  const handleConfirmClearData = () => {
    onClearStats();
    setIsResetDataConfirmOpen(false);
    setDataResetSuccess(true);
    setTimeout(() => setDataResetSuccess(false), 3000);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Settings & Preferences
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
          Customize your display, typography scale, motion, and study preferences.
        </p>
      </div>

      {dataResetSuccess && (
        <div className="p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 rounded-lg text-xs font-semibold text-emerald-800 dark:text-emerald-300 flex items-center gap-2 animate-fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <span>All study progress, sessions, and mastery history have been reset.</span>
        </div>
      )}

      {/* 1. Appearance Settings */}
      <section className="space-y-3">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Appearance
        </h2>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg divide-y divide-slate-100 dark:divide-slate-800">
          {/* Theme Selector */}
          <div className="p-3.5 sm:p-4 space-y-2.5">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white block">
                  Interface Theme
                </span>
                <span className="text-[11px] text-slate-500">
                  {settings.theme === 'system'
                    ? 'Sync with operating system preference'
                    : settings.theme === 'dark'
                    ? 'Always use dark theme'
                    : 'Always use light theme'}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'system', label: 'System', icon: Laptop },
                { id: 'light', label: 'Light', icon: Sun },
                { id: 'dark', label: 'Dark', icon: Moon },
              ].map((item) => {
                const Icon = item.icon;
                const isSelected = settings.theme === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onUpdateSetting('theme', item.id as ThemeMode)}
                    className={`py-2 px-2.5 rounded-md border text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors tap-target cursor-pointer ${
                      isSelected
                        ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white shadow-xs'
                        : 'bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 shrink-0" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Font Size Scaling */}
          <div className="p-3.5 sm:p-4 space-y-2.5">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Type className="w-4 h-4 text-slate-500" />
                  <span>Typography Scale</span>
                </span>
                <span className="text-[11px] text-slate-500">
                  Adjust global font size across all reviewer screens.
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
              {[
                { id: 'small', label: 'Small', note: '90%' },
                { id: 'default', label: 'Default', note: '100%' },
                { id: 'large', label: 'Large', note: '110%' },
                { id: 'extra-large', label: 'Extra Large', note: '120%' },
              ].map((size) => {
                const isSelected = settings.fontSize === size.id;
                return (
                  <button
                    key={size.id}
                    type="button"
                    onClick={() => onUpdateSetting('fontSize', size.id as FontSizePreference)}
                    className={`p-2 rounded-md border text-center transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white font-bold'
                        : 'bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <div className="text-xs font-semibold">{size.label}</div>
                    <div className={`text-[10px] mt-0.5 ${isSelected ? 'text-slate-300 dark:text-slate-600' : 'text-slate-400'}`}>
                      {size.note}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Motion Setting */}
          <div className="p-3.5 sm:p-4 space-y-2.5">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Eye className="w-4 h-4 text-slate-500" />
                  <span>Motion</span>
                </span>
                <span className="text-[11px] text-slate-500">
                  Control interface transitions and interactive animation effects.
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {[
                {
                  id: 'standard',
                  label: 'Standard',
                  desc: 'Subtle, consistent interaction feedback',
                },
                {
                  id: 'reduced',
                  label: 'Reduced',
                  desc: 'Minimal motion for accessibility and speed',
                },
              ].map((motion) => {
                const isSelected = settings.reduceMotion === motion.id;
                return (
                  <button
                    key={motion.id}
                    type="button"
                    onClick={() => onUpdateSetting('reduceMotion', motion.id as MotionPreference)}
                    className={`p-2.5 rounded-lg border text-left transition-colors cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white font-bold shadow-xs'
                        : 'bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="text-xs font-semibold">{motion.label}</span>
                      <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                        isSelected
                          ? 'border-white dark:border-slate-900 bg-white dark:bg-slate-900'
                          : 'border-slate-300 dark:border-slate-600'
                      }`}>
                        {isSelected && (
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-900 dark:bg-white" />
                        )}
                      </span>
                    </div>
                    <span className={`text-[10px] mt-1 leading-tight ${isSelected ? 'text-slate-300 dark:text-slate-600' : 'text-slate-500 dark:text-slate-400'}`}>
                      {motion.desc}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Study Preferences */}
      <section className="space-y-3">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Study & Practice Preferences
        </h2>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg divide-y divide-slate-100 dark:divide-slate-800">
          {/* Default Question Count */}
          <div className="p-3.5 sm:p-4 space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Sliders className="w-4 h-4 text-slate-500" />
                  <span>Default Practice Item Count</span>
                </span>
                <span className="text-[11px] text-slate-500">
                  Number of items loaded by default for quick drills.
                </span>
              </div>
            </div>

            <div className="flex gap-2">
              {[10, 15, 20, 30].map((count) => {
                const isSelected = settings.defaultQuestionCount === count;
                return (
                  <button
                    key={count}
                    type="button"
                    onClick={() => onUpdateSetting('defaultQuestionCount', count)}
                    className={`flex-1 py-1.5 rounded-md text-xs font-semibold border transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white'
                        : 'bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {count} items
                  </button>
                );
              })}
            </div>
          </div>

          {/* Instant Rationales in Practice */}
          <div className="p-3.5 sm:p-4 flex items-center justify-between gap-3">
            <div>
              <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white block">
                Instant Explanations in Practice
              </span>
              <span className="text-[11px] text-slate-500">
                Show rationale immediately upon checking an answer during self-paced drills.
              </span>
            </div>

            <button
              type="button"
              role="switch"
              aria-checked={settings.instantRationales}
              onClick={() => onUpdateSetting('instantRationales', !settings.instantRationales)}
              className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer shrink-0 ${
                settings.instantRationales ? 'bg-slate-900 dark:bg-white' : 'bg-slate-200 dark:bg-slate-700'
              }`}
            >
              <span
                className={`w-4 h-4 rounded-full bg-white dark:bg-slate-900 absolute top-1 transition-transform ${
                  settings.instantRationales ? 'left-6' : 'left-1'
                }`}
              />
            </button>
          </div>
        </div>
      </section>

      {/* 3. Data & Storage */}
      <section className="space-y-3">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Data & Local Storage
        </h2>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 space-y-3">
          <div className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
            <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
              <span>Questions Solved:</span>
              <span className="font-semibold text-slate-900 dark:text-white font-mono">{stats.totalAnswered}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
              <span>Completed Exam Sessions:</span>
              <span className="font-semibold text-slate-900 dark:text-white font-mono">{stats.quizHistory.length}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-800">
              <span>Saved Bookmarks:</span>
              <span className="font-semibold text-slate-900 dark:text-white font-mono">{stats.bookmarkedQuestionIds.length}</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Storage Type:</span>
              <span className="font-semibold text-slate-900 dark:text-white">Client-side LocalStorage (Offline)</span>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-2">
            {!isResetDataConfirmOpen ? (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsResetDataConfirmOpen(true)}
                leftIcon={<Trash2 className="w-3.5 h-3.5 text-rose-600" />}
                className="text-rose-700 dark:text-rose-400 hover:border-rose-300"
              >
                Reset Study History & Analytics
              </Button>
            ) : (
              <div className="w-full p-3 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 rounded-lg space-y-2">
                <p className="text-xs text-rose-800 dark:text-rose-300 font-semibold">
                  Are you sure? This will delete all solved items, session logs, and subject mastery records.
                </p>
                <div className="flex gap-2">
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={handleConfirmClearData}
                  >
                    Yes, Delete All History
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => setIsResetDataConfirmOpen(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}

            <Button
              variant="secondary"
              size="sm"
              onClick={onResetSettings}
              leftIcon={<RotateCcw className="w-3.5 h-3.5" />}
            >
              Reset App Preferences
            </Button>
          </div>
        </div>
      </section>

      {/* 4. About & Version */}
      <section className="space-y-3">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          About
        </h2>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 space-y-2 text-xs">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-slate-900 dark:text-white">Application</span>
            <span className="text-slate-600 dark:text-slate-400">LET Reviewer</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-slate-900 dark:text-white">Curriculum Scope</span>
            <span className="text-slate-600 dark:text-slate-400">General & Professional Education</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-slate-900 dark:text-white">Version</span>
            <span className="font-mono text-slate-600 dark:text-slate-400">v1.2.0</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-slate-900 dark:text-white">Status</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-semibold inline-flex items-center gap-1">
              <Check className="w-3 h-3 stroke-[3]" /> Offline Ready
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
