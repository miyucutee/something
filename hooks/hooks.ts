import { useState, useCallback, useEffect } from 'react';

export type Options = {
  step: number 
};

/**
 * @name `useCounter` - React hook to increment a counter by a given step.
 * @param initialValue - Initial value of the counter
 * @param options - Options to configure the counter
 * @description - This hook is used to increment a counter by a given step.
 */
export const useCounter = (initialValue: number, options?: Options) => {
  const [count, setCount] = useState(initialValue);

	const steps = Number(options?.step || 1)

  const increment = useCallback(() => setCount(count +  steps), [count,steps]);
	const decrement = useCallback(() => setCount(count -  steps), [count,steps]);

  return { count, increment, decrement };
};


type Optionss = {
	greeting: string;
	info: string
};

/**
 * @name `useHello` - React hook to say hello.
 * @description - This hook is used to say hello.
 * @example
 * const [value, setValue, sayHello] = useHello('Hello', { greeting: 'Hello' });
 * 
 */
export const useHello = <T>(initialValue: T, options?: Optionss) => {
	const [value, setValue] = useState(initialValue);
	const sayHello = () => console.log(options);
	return [value, setValue, sayHello] as const;
};


/**
 * @name `useToggle`
 * @description A hook that returns a boolean value and a function to toggle it. Useful for toggling a boolean value in a component. 
 * @param initialValue The initial value of the boolean.
 * @returns A tuple containing the boolean value and a function to toggle it.
 * @example const [value, toggle] = useToggle(false);
 */
export const useToggle = (initialValue: boolean) => {
	const [value, setValue] = useState(initialValue);
	const toggle = useCallback(() => setValue((value) => !value),[]);
	return [value, toggle] as const;
};




