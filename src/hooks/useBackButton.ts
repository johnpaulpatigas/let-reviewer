import { useContext, useEffect, useRef } from 'react';
import { BackButtonContext, type BackHandler } from '../contexts/BackButtonContext';
import { BackButtonProvider } from '../contexts/BackButtonProvider';

export { BackButtonProvider, type BackHandler };

export function useBackHandler(handler: BackHandler, priority = 10, enabled = true) {
  const context = useContext(BackButtonContext);
  const handlerRef = useRef(handler);

  // Keep handler ref updated so closures always reflect fresh state
  useEffect(() => {
    handlerRef.current = handler;
  });

  useEffect(() => {
    if (!context || !enabled) return;

    const unregister = context.registerHandler(() => handlerRef.current(), priority);
    return unregister;
  }, [context, priority, enabled]);
}
