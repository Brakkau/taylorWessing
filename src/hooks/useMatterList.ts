import { useState, useEffect } from 'react';
import { ClientAPI } from '@/app/api/api';
import { formatDate } from '@/utils/formatDate';

export const useMatterList = (
  clientId: string,
  columnOrder: string,
  sort: string,
  index: number,
  offset: number
) => {
  const [matterList, setMatterList] = useState(null);
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<string | null>(null);

    const formatInceptionDates = (data) => {
      const newData = { ...data };

      newData.results = newData.results.map((result) => {
        const newResult = { ...result };
        newResult.matterDate = formatDate(newResult.matterDate);
        return newResult;
      });

      return newData;
    };

useEffect(() => {
  const fetchData = async () => {
    try {
      setLoading(true);
      const matterData = await ClientAPI.matterSearch(
        clientId,
        columnOrder,
        sort,
        index,
        offset
      );
      setMatterList(formatInceptionDates(matterData));
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  fetchData();
}, [clientId, columnOrder, sort, index, offset]);

  return { matterList, loading, error };
};
