'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Column, Table } from '../Table/Table';

export const ItemList: React.FC = ({ clients }) => {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;
    const totalPages = Math.ceil(clients.length / rowsPerPage);

    const columns: Column<any>[] = [
      { key: 'clientName', header: 'Client Name', sortable: true },
      {
        key: 'clientDescription',
        header: 'Client Description',
        sortable: true,
      },
      { key: 'clientCode', header: 'Client Code', sortable: true },
      { key: 'inceptionDate', header: 'Inception Date', sortable: true },
    ];
  //   const {
  //     filteredPosts,
  //     loading,
  //     error,
  //     postsRef,
  //     handleDelete,
  //     handleSearch,
  //     fetchPosts,
  //   } = useClientList(totalPages, currentPage);

  // const [currentPage, setCurrentPage] = 1;
  // const TotalPages = 10;

  // const handlePageChange = (page) => {
  //   setCurrentPage(page);
  // };

  // if (loading) {
  //   return <LoadingSpinner />;
  // }

  // if (error) {
  //   return <ErrorMessage message={error} onRetry={fetchPosts} />;
  // }

  return (
    <div className="item-list">
      <div className="items-container">
        {clients.length === 0 ? (
          <p role="status" className="no-results">
            No clients found. Try adjusting your search.
          </p>
        ) : (
          <>
            <Table
              data={clients}
              columns={columns}
              onRowClick={(client) => router.push(`/${client.clientCode}`)}
              enablePagination={true}
              enableSort={true}
              rowsPerPage={rowsPerPage}
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </div>
    </div>
  );
};
