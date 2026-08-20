import React, { useEffect, useRef, useState, useCallback } from 'react';
import { App as CapApp } from '@capacitor/app';
import { Capacitor } from '@capacitor/core';
import { BackButtonContext, type HandlerRegistration, type BackHandler } from './BackButtonContext';

let nextHandlerId = 1;

export const BackButtonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const handlersRef = useRef<HandlerRegistration[]>([]);
  const lastBackPressRef = useRef<number>(0);
  const [showExitToast, setShowExitToast] = useState(false);
  const toastTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const registerHandler = useCallback((handler: BackHandler, priority = 10) => {
    const id = nextHandlerId++;
    const entry: HandlerRegistration = { id, priority, handler };
    handlersRef.current.push(entry);

    return () => {
      handlersRef.current = handlersRef.current.filter((h) => h.id !== id);
    };
  }, []);

  const handleBackEvent = useCallback(() => {
    // Sort handlers: highest priority first, then latest registered (LIFO)
    const sorted = [...handlersRef.current].sort((a, b) => {
      if (b.priority !== a.priority) {
        return b.priority - a.priority;
      }
      return b.id - a.id;
    });

    for (const entry of sorted) {
      try {
        const handled = entry.handler();
        if (handled === true) {
          // A handler consumed the event - dismiss any exit toast and reset exit counter
          if (toastTimeoutRef.current) {
            clearTimeout(toastTimeoutRef.current);
            toastTimeoutRef.current = null;
          }
          setShowExitToast(false);
          lastBackPressRef.current = 0;
          return;
        }
      } catch (err) {
        console.error('Error executing back button handler:', err);
      }
    }

    // Default root fallback: double back press to exit
    const now = Date.now();
    if (now - lastBackPressRef.current < 2000) {
      // Second back press within 2000ms window -> Exit app
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
        toastTimeoutRef.current = null;
      }
      setShowExitToast(false);
      lastBackPressRef.current = 0;

      if (Capacitor.isNativePlatform()) {
        CapApp.exitApp().catch(() => {});
      }
    } else {
      // First back press -> Show toast prompt
      lastBackPressRef.current = now;
      setShowExitToast(true);

      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
      toastTimeoutRef.current = setTimeout(() => {
        setShowExitToast(false);
        lastBackPressRef.current = 0;
      }, 2000);
    }
  }, []);

  // Setup Capacitor Android hardware back button listener & Web Escape listener
  useEffect(() => {
    let listenerHandle: { remove: () => void } | null = null;

    if (Capacitor.isNativePlatform()) {
      CapApp.addListener('backButton', () => {
        handleBackEvent();
      }).then((handle) => {
        listenerHandle = handle;
      });
    }

    // Web Escape key listener for desktop preview testing
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleBackEvent();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      if (listenerHandle) {
        listenerHandle.remove();
      }
      window.removeEventListener('keydown', handleKeyDown);
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
    };
  }, [handleBackEvent]);

  return (
    <BackButtonContext.Provider value={{ registerHandler }}>
      {children}
      {showExitToast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-slate-900/90 dark:bg-neutral-800/90 text-white text-xs font-medium rounded-full shadow-lg border border-slate-700/50 dark:border-neutral-700/50 backdrop-blur pointer-events-none animate-fade-in flex items-center gap-1.5"
        >
          <span>Press back again to exit</span>
        </div>
      )}
    </BackButtonContext.Provider>
  );
};
