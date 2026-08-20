import { useState, useEffect, useCallback } from 'react';
import { Capacitor, SystemBars, SystemBarsStyle } from '@capacitor/core';
import { EdgeToEdge } from '@capawesome/capacitor-android-edge-to-edge-support';
import type { UserSettings, ThemeMode, FontSizePreference, MotionPreference } from '../types';

const SETTINGS_STORAGE_KEY = 'let_reviewer_user_settings_v1';

export const DEFAULT_SETTINGS: UserSettings = {
  theme: 'system',
  fontSize: 'default',
  reduceMotion: 'standard',
  defaultQuestionCount: 15,
  instantRationales: true,
};

const getInitialSettings = (): UserSettings => {
  try {
    const saved = localStorage.getItem(SETTINGS_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      const reduceMotion: MotionPreference =
        parsed.reduceMotion === 'reduced' || parsed.reduceMotion === 'on'
          ? 'reduced'
          : 'standard';
      return {
        ...DEFAULT_SETTINGS,
        ...parsed,
        reduceMotion,
      };
    }
  } catch {
    // fallback
  }
  return DEFAULT_SETTINGS;
};

// Suppress asynchronous CSS transition lag across the DOM during theme flips
// so the web UI, header, bottom bar, and native Android system bars update simultaneously
const disableTransitionsTemporarily = () => {
  const css = document.createElement('style');
  css.appendChild(
    document.createTextNode(
      '*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}'
    )
  );
  document.head.appendChild(css);

  return () => {
    // Force layout reflow so theme color classes are applied instantly without animation delay
    (() => window.getComputedStyle(document.body).opacity)();

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (document.head.contains(css)) {
          document.head.removeChild(css);
        }
      });
    });
  };
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

  // Apply Theme & System Bars (Edge-to-Edge)
  useEffect(() => {
    const root = document.documentElement;
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');

    const updateSystemBars = async (isDark: boolean) => {
      const statusBarColor = isDark ? '#171717' : '#ffffff';
      const navigationBarColor = isDark ? '#171717' : '#ffffff';

      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', statusBarColor);
      }

      if (Capacitor.isNativePlatform()) {
        try {
          // SystemBarsStyle.Light = Dark icons/text on light status bar
          // SystemBarsStyle.Dark = Light (white) icons/text on dark status bar
          await SystemBars.setStyle({
            style: isDark ? SystemBarsStyle.Dark : SystemBarsStyle.Light,
          });
        } catch {
          // Fallback if not supported
        }

        if (Capacitor.getPlatform() === 'android') {
          EdgeToEdge.setStatusBarColor({ color: statusBarColor }).catch(() => {});
          EdgeToEdge.setNavigationBarColor({ color: navigationBarColor }).catch(() => {});
        }
      }
    };

    const applyTheme = (isDark: boolean) => {
      const enableTransitions = disableTransitionsTemporarily();
      if (isDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
      updateSystemBars(isDark);
      enableTransitions();
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

  // Apply Motion Preference
  useEffect(() => {
    const root = document.documentElement;
    const isReduced = settings.reduceMotion === 'reduced';
    root.setAttribute('data-reduce-motion', isReduced ? 'reduced' : 'standard');
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
