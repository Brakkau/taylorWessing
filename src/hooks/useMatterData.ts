import { useState, useEffect } from 'react';
import { ClientAPI } from '@/app/api/api';
import { formatDate } from '@/utils/formatDate';

export const useMatterData = (matterId: string) => {
  const [matterData, setMatterData] = useState(null);
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<string | null>(null);

  const formatInceptionDates = (data) => {
    const newData = {
      ...data,
      matterDate: formatDate(data.matterDate),
    };

    return newData;
  };

  useEffect(() => {
    if (!matterId) {
      return;
    }
    const fetchData = async () => {
      try {
        setLoading(true);
        const matterData = await ClientAPI.getMatterData(matterId);
        setMatterData(formatInceptionDates(matterData));
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [matterId]);

  return { matterData, loading, error };
};
