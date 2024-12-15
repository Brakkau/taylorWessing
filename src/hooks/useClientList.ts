import { useState, useRef, useEffect } from 'react';
import { ClientAPI } from '@/app/api/api';
import { formatDate } from '@/utils/formatDate';

export const useClientList = (searchTerm, columnOrder, sort, index, offset) => {
  const [clients, setClients] = useState(null);
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<string | null>(null);
  const clientsRef = useRef<(HTMLElement | null)[]>([]);

  const formatInceptionDates = (data) => {
    const newData = { ...data };

    newData.results = newData.results.map((result) => {
      const newResult = { ...result };
      newResult.inception = formatDate(newResult.inception);
      return newResult;
    });

    return newData;
  };

  const fetchClients = async () => {
    if (!searchTerm) {
      return;
    }

    try {
      setLoading(true);
      const clients = await ClientAPI.paginatedResults(
        searchTerm,
        columnOrder,
        sort,
        index,
        offset
      );
      setClients(formatInceptionDates(clients));
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch clients. Please try again later.');
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, [searchTerm, columnOrder, sort, index, offset]);

  return {
    clients,
    loading,
    error,
    searchTerm,
    clientsRef,
    fetchClients,
  };
};
