'use client';

import { ItemList } from '@/components/common/ItemList/ItemList';
import { Pagination } from '@/components/common/Pagination/Pagination';

export const Results = ({
  clients,
  currentPage,
  setCurrentPage,
  rowsPerPage,
  columns,
}) => {
  const handlePageChange = (page) => {
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
