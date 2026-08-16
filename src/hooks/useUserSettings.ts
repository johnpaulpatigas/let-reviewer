import { useState, useEffect, useCallback } from 'react';
import type { UserSettings, ThemeMode, FontSizePreference, MotionPreference } from '../types';

const SETTINGS_STORAGE_KEY = 'let_reviewer_user_settings_v1';

export const DEFAULT_SETTINGS: UserSettings = {
  theme: 'system',
  fontSize: 'default',
  reduceMotion: 'system',
  defaultQuestionCount: 15,
  instantRationales: true,
};

const getInitialSettings = (): UserSettings => {
  try {
    const saved = localStorage.getItem(SETTINGS_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        ...DEFAULT_SETTINGS,
        ...parsed,
      };
    }
  } catch {
    // fallback
  }
  return DEFAULT_SETTINGS;
};

export function useUserSettings() {
  const [settings, setSettings] = useState<UserSettings>(getInitialSettings);

  // Sync settings to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
    } catch {
      // storage error fallback
    }
  }, [settings]);

  // Apply Theme
  useEffect(() => {
    const root = document.documentElement;

    const applyTheme = (isDark: boolean) => {
      if (isDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    };

    if (settings.theme === 'dark') {
      applyTheme(true);
    } else if (settings.theme === 'light') {
      applyTheme(false);
    } else {
      // System Theme
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      applyTheme(mediaQuery.matches);

      const handleChange = (e: MediaQueryListEvent) => {
        applyTheme(e.matches);
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [settings.theme]);

  // Apply Font Size
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-font-size', settings.fontSize);
  }, [settings.fontSize]);

  // Apply Reduce Motion
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-reduce-motion', settings.reduceMotion);
  }, [settings.reduceMotion]);

  const updateSetting = useCallback(
    <K extends keyof UserSettings>(key: K, value: UserSettings[K]) => {
      setSettings((prev) => ({
        ...prev,
        [key]: value,
      }));
    },
    []
  );

  const setTheme = useCallback((theme: ThemeMode) => {
    updateSetting('theme', theme);
  }, [updateSetting]);

  const setFontSize = useCallback((fontSize: FontSizePreference) => {
    updateSetting('fontSize', fontSize);
  }, [updateSetting]);

  const setReduceMotion = useCallback((reduceMotion: MotionPreference) => {
    updateSetting('reduceMotion', reduceMotion);
  }, [updateSetting]);

  const resetSettings = useCallback(() => {
    setSettings(DEFAULT_SETTINGS);
    try {
      localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(DEFAULT_SETTINGS));
    } catch {
      // ignore
    }
  }, []);

  return {
    settings,
    updateSetting,
    setTheme,
    setFontSize,
    setReduceMotion,
    resetSettings,
  };
}
