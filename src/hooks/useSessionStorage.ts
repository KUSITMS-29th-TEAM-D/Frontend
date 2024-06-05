import { useEffect, useState } from 'react';

const useSessionStorage = <T>(key: string, initialValue: T): [T, (value: T) => void] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = sessionStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch (error) {
      console.error('Error reading from sessionStorage', error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      sessionStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error('Error writing to sessionStorage', error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
};

export default useSessionStorage;
