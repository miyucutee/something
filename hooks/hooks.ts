import { useState, useCallback } from 'react';

export type Options = {
  step: number;
};

/**
 * @name `useCounter` - React hook to increment a counter by a given step.
 * @param initialValue - Initial value of the counter
 * @param options - Options to configure the counter
 * @description - This hook is used to increment a counter by a given step.
 */
export const useCounter = (initialValue: number, options: Options) => {
  const [count, setCount] = useState(initialValue);
  const { step } = options;

  const increment = useCallback(() => setCount(count + step | 1), [count, step]);

  return { count, increment };
};


type Optionss = {
	greeting: string;
};

/**
 * @name `useHello` - React hook to say hello.
 * @description - This hook is used to say hello.
 * @example
 * const [value, setValue, sayHello] = useHello('Hello', { greeting: 'Hello' });
 * 
 */
const useHello = <T>(initialValue: T, options: Optionss) => {
	const [value, setValue] = useState(initialValue);
	const sayHello = () => console.log(options.greeting);
	return [value, setValue, sayHello] as const;
};

export default useHello;
