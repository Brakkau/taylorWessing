'use client';

import React, { useState } from 'react';
import './Table.css';
import { Dispatch } from '@/types/types';

export interface Column<T> {
  key: keyof T;
  header: string;
  sortable?: boolean;
}

interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  onRowClick?: (item: T) => void;
  enableSort?: boolean;
  rowsPerPage?: number;
  currentPage?: number;
  customSort?: (a: T, b: T, column: keyof T, order: 'asc' | 'desc') => number;
  setMatterId?: Dispatch;
}

export const Table = <T,>({
  data,
  columns,
  onRowClick,
  enableSort = false,
  customSort,
  setMatterId,
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
          {sortedData.map((item, index) => (
            <tr
              key={index}
              onClick={() => {
                if (onRowClick) onRowClick(item);
                if (setMatterId && 'matterId' in item)
                  setMatterId(item.matterId);
              }}
              className={onRowClick ? 'clickable' : ''}
            >
              {columns.map((column) => (
                <td key={String(column.key)}>{String(item[column.key])}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
