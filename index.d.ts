import { Options } from './hooks/hooks';
declare module 'hooks-beta' {
  function useCounter(initialValue: number, options: Options): { count: number, increment: () => void };
  function useCounter(initialValue: number): { count: number, increment: () => void };
}
