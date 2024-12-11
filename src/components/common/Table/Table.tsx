import React, { useState } from 'react';
import './Table.css';

export interface Column<T> {
  key: keyof T;
  header: string;
  sortable?: boolean;
}

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  onRowClick?: (item: T) => void;
  enablePagination?: boolean;
  enableSort?: boolean;
  rowsPerPage?: number;
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  customSort?: (a: T, b: T, column: keyof T, order: 'asc' | 'desc') => number;
}

export const Table = <T,>({
  data,
  columns,
  onRowClick,
  enablePagination = false,
  enableSort = false,
  rowsPerPage = 10,
  currentPage = 1,
  totalPages,
  onPageChange,
  customSort,
}: TableProps<T>) => {
  const [sortColumn, setSortColumn] = useState<keyof T | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSort = (column: keyof T) => {
    if (!enableSort) return;

    if (sortColumn === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortOrder('asc');
    }
  };

  const sortedData =
    enableSort && sortColumn
      ? [...data].sort((a, b) => {
          if (customSort) {
            return customSort(a, b, sortColumn, sortOrder);
          }

          const aValue = String(a[sortColumn]).toLowerCase();
          const bValue = String(b[sortColumn]).toLowerCase();

          if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
          if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
          return 0;
        })
      : data;

  const displayData = enablePagination
    ? sortedData.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
      )
    : sortedData;

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={String(column.key)}
                onClick={() => column.sortable && handleSort(column.key)}
                className={column.sortable ? 'sortable' : ''}
              >
                {column.header}
                {enableSort && sortColumn === column.key && (
                  <span className="sort-indicator">
                    {sortOrder === 'asc' ? ' ▲' : ' ▼'}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {displayData.map((item, index) => (
            <tr
              key={index}
              onClick={() => onRowClick && onRowClick(item)}
              className={onRowClick ? 'clickable' : ''}
            >
              {columns.map((column) => (
                <td key={String(column.key)}>{String(item[column.key])}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {enablePagination && onPageChange && (
        <div className="pagination">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
