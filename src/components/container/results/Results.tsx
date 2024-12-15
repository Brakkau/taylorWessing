'use client';

import { ItemList } from '@/components/common/ItemList/ItemList';
import { Pagination } from '@/components/common/Pagination/Pagination';
import { Column } from '@/components/common/Table/Table';
import { Client, Dispatch } from '@/types/types';

type ResultsProps<T> = {
  clients: Client[];
  currentPage: number;
  setCurrentPage: (page: number) => void;
  rowsPerPage: number;
  columns: Column<T>[];
  rowOnClick: () => void;
  matterData?: any;
  matterId?: string;
  setMatterId?: Dispatch;
};

export const Results = ({
  clients,
  currentPage,
  setCurrentPage,
  rowsPerPage,
  columns,
  rowOnClick,
  matterData,
  setMatterId,
}: ResultsProps) => {
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      {clients.returnedResults === 0 ? (
        <p role="status" className="no-results">
          No clients found. Try adjusting your search.
        </p>
      ) : (
        <>
          <div className="results-container">
            <p className="results-title">Search Results</p>
            <p className="results-text">
              {clients.results.length} results of {clients.totalResults}
            </p>
          </div>
          <ItemList
            clients={clients.results}
            rowsPerPage={rowsPerPage}
            columns={columns}
            rowOnClick={rowOnClick}
            setMatterId={setMatterId}
            matterData={matterData}
          />
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(clients.totalResults / rowsPerPage)}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </>
  );
};
