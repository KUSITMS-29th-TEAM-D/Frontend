import { useEffect, useState } from 'react';

import { personaAPI } from '@/apis/personaAPI';
import { DISCOVER_CATEGORY_LIST } from '@/components/DiscoverResultPage/ResultView';
import { userService } from '@/services/UserService';

export const useGetDiscoverResult = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isTest, setIsTest] = useState(false);
  const userState = userService.getUserState();

  useEffect(() => {
    const fetchKeywords = async () => {
      setLoading(true);
      try {
        const response = await personaAPI.getDiscoverCategoryKeyword('all');
        if (response.payload.keywords.length > 0) {
          setIsTest(true);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (userState === 'MEMBER') {
      fetchKeywords();
    }
  }, []);

  return { loading, error, isTest };
};

export const useGetDiscoverKeywordResult = () => {
  const [data, setData] = useState<{ [key: keyof typeof DISCOVER_CATEGORY_LIST]: string[] }>({
    all: [],
    health: [],
    career: [],
    love: [],
    leisure: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchKeywords = async () => {
      setLoading(true);
      try {
        const responses = await Promise.allSettled(
          Object.keys(DISCOVER_CATEGORY_LIST).map((category) =>
            personaAPI.getDiscoverCategoryKeyword(category)
          )
        );

        const updatedData: { [key: keyof typeof DISCOVER_CATEGORY_LIST]: string[] } = {};

        responses.forEach((response, index) => {
          const categoryKey = Object.keys(DISCOVER_CATEGORY_LIST)[index];
          console.log('Category:', categoryKey, 'Response:', response);
          if (response.status === 'fulfilled' && categoryKey) {
            updatedData[categoryKey] = response.value.payload.keywords;
          }
        });

        setData((prevData) => ({
          ...prevData,
          ...updatedData,
        }));
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchKeywords();
  }, []);

  return { data, loading, error };
};

export const useGetDiscoverSummary = () => {
  //
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchSummary = async () => {
      setLoading(true);
      try {
        const response = await personaAPI.getDefaultSummary();
        setData(response.payload.summary);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();
  }, []);

  return { data, loading, error };
};
