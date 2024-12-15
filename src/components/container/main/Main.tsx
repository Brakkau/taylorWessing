'use client';

import { ErrorMessage } from '@/components/common/ErrorMessage/ErrorMessage';
import { LoadingSpinner } from '@/components/common/LoadingSpinner/LoadingSpinner';
import { SearchHeader } from '../searchHeader/SearchHeader';
import { Results } from '../results/Results';
import { useState } from 'react';
import { useClientList } from '@/hooks/useClientList';
import { Column } from '@/components/common/Table/Table';
import { ClientList } from '@/types/types';
import { useRouter } from 'next/navigation';

export const Main = () => {
  const router = useRouter;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState();
  const rowsPerPage = 10;
  const columnOrder = 'NAME';
  const sort = 'ASCENDING';
  const offset = rowsPerPage;
  const index = (currentPage - 1) * rowsPerPage;
  const { clients, loading, error } = useClientList(
    searchTerm,
    columnOrder,
    sort,
    index,
    offset
  );
  const columns: Column<ClientList>[] = [
    { key: 'name', header: 'Client Name', sortable: true },
    { key: 'code', header: 'Client Code', sortable: true },
    { key: 'inception', header: 'Inception Date', sortable: true },
  ];

  return (
    <>
      <SearchHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {!searchTerm && !clients && (
        <p role="status" className="no-results">
          Please search using the search above.
        </p>
      )}
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} onRetry={() => {}} />}
      {!loading && !error && clients && (
        <>
          <Results
            clients={clients}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            rowsPerPage={rowsPerPage}
            columns={columns}
            rowOnClick='item'
          />
        </>
      )}
    </>
  );
};
