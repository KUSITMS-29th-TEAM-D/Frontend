import { useEffect, useState } from 'react';

import { personaAPI } from '@/apis/personaAPI';
import { CategoryTypeKey } from '@/constants/discover';
import { DiscoverSummary } from '@/types/test.type';

const initialValue: { [key: CategoryTypeKey]: DiscoverSummary[] } = {
  health: [],
  career: [],
  love: [],
  leisure: [],
};

export const useSummarySessionStorage = () => {
  const [summaryValue, setSummaryValue] = useState<{ [key: CategoryTypeKey]: DiscoverSummary[] }>(
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
    updateFunction: (prevSummary: DiscoverSummary[]) => DiscoverSummary[]
  ) => {
    setSummaryValue((prev) => {
      const updatedSummary = updateFunction(prev[category]);
      const newValue = { ...prev, [category]: updatedSummary };
      window.sessionStorage.setItem('selpiece-discover-summary', JSON.stringify(newValue));
      return newValue;
    });
  };

  const deleteSummary = () => {
    window.sessionStorage.removeItem('selpiece-discover-summary');
  };

  return {
    summaryValue,
    resetSummary,
    updateSummary,
    deleteSummary,
  } as const;
};
