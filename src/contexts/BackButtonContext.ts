import { createContext } from 'react';

export type BackHandler = () => boolean | void;

export interface HandlerRegistration {
  id: number;
  priority: number;
  handler: BackHandler;
}

export interface BackButtonContextType {
  registerHandler: (handler: BackHandler, priority?: number) => () => void;
}

export const BackButtonContext = createContext<BackButtonContextType | null>(null);
