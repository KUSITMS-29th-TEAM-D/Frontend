import { useEffect, useState } from 'react';

import { personaAPI } from '@/apis/personaAPI';
import { CategoryTypeKey } from '@/constants/discover';

const initialValue: { [key: CategoryTypeKey]: string[] } = {
  health: [],
  career: [],
  love: [],
  leisure: [],
};

export const useSummarySessionStorage = () => {
  const [summaryValue, setSummaryValue] = useState<{ [key: CategoryTypeKey]: string[] }>(
    initialValue
  );

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const item = window.sessionStorage.getItem('selpiece-discover-summary');
        if (!item) {
          const response = await personaAPI.getDefaultSummary();
          setSummaryValue(response.payload);
          window.sessionStorage.setItem(
            'selpiece-discover-summary',
            JSON.stringify(response.payload)
          );
        } else {
          setSummaryValue(JSON.parse(item));
        }
      } catch (error) {
        console.error(error);
        setSummaryValue(initialValue);
      }
    };

    fetchSummary();
  }, []);

  const resetSummary = (category: CategoryTypeKey) => {
    setSummaryValue((prev) => {
      const newValue = { ...prev, [category]: [] };
      window.sessionStorage.setItem('selpiece-discover-summary', JSON.stringify(newValue));
      return newValue;
    });
  };

  const updateSummary = (
    category: CategoryTypeKey,
    updateFunction: (prevSummary: string[]) => string[]
  ) => {
    setSummaryValue((prev) => {
      const newValue = { ...prev, [category]: updateFunction(prev[category]) };
      window.sessionStorage.setItem('selpiece-discover-summary', JSON.stringify(newValue));
      return newValue;
    });
  };

  return {
    summaryValue,
    resetSummary,
    updateSummary,
  } as const;
};
