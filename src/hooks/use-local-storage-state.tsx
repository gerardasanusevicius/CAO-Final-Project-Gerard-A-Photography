import { useState, useEffect } from 'react';

type UseLocalStorage = <T>(name: string, defaultValue: T) =>
[T, (newValue: T) => void];

const useLocalStorage: UseLocalStorage = (name, initialValue) => {
  const [value, setValue] = useState(() => {
    const existingValue = localStorage.getItem(name);

    return existingValue
      ? JSON.parse(existingValue) as typeof initialValue
      : initialValue;
  });

  useEffect(() => {
    const stringifiedValue = JSON.stringify(value);
    localStorage.setItem(name, stringifiedValue);
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;
