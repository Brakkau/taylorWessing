'use client';

import React from 'react';
import { Item } from '../Item/Item';
import { SearchBar } from '../SearchBar/SearchBar';
import { LoadingSpinner } from '@/components/common/LoadingSpinner/LoadingSpinner';
import { ErrorMessage } from '@/components/common/ErrorMessage/ErrorMessage';
// import { useClientList } from './Hooks/useClientList';
import './ItemList.css';
import { Table } from '../Table/Table';

export const ItemList: React.FC = ({ clients }) => {
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
            <Table data={clients} />
          </>
        )}
      </div>
    </div>
  );
};
