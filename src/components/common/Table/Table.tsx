import React, { useState } from 'react';
import './Table.css';
import { useParams, useRouter } from 'next/navigation';

interface Client {
  clientName: string;
  clientDescription: string;
  clientCode: string;
  inceptionDate: string;
}

interface TableProps {
  data: Client[];
}

export const Table: React.FC<TableProps> = ({ data }) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);
  const [sortColumn, setSortColumn] = useState<keyof Client>('clientName');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const sortedData = [...data].sort((a, b) => {
    const aValue = a[sortColumn].toString().toLowerCase();
    const bValue = b[sortColumn].toString().toLowerCase();

    if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedData = sortedData.slice(startIndex, startIndex + rowsPerPage);

  const handleSort = (column: keyof Client) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortOrder('asc');
    }
  };

  const handleRowClick = (client: Client) => {
    router.push(`/${client.clientCode}`)
  };

  return (
    <div>
      <h2>Search Results</h2>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('clientName')}>
              Client Name{' '}
              {sortColumn === 'clientName'
                ? sortOrder === 'asc'
                  ? '▲'
                  : '▼'
                : ''}
            </th>
            <th onClick={() => handleSort('clientDescription')}>
              Client Description{' '}
              {sortColumn === 'clientDescription'
                ? sortOrder === 'asc'
                  ? '▲'
                  : '▼'
                : ''}
            </th>
            <th onClick={() => handleSort('clientCode')}>
              Client Code{' '}
              {sortColumn === 'clientCode'
                ? sortOrder === 'asc'
                  ? '▲'
                  : '▼'
                : ''}
            </th>
            <th onClick={() => handleSort('inceptionDate')}>
              Inception Date{' '}
              {sortColumn === 'inceptionDate'
                ? sortOrder === 'asc'
                  ? '▲'
                  : '▼'
                : ''}
            </th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((client, index) => (
            <tr key={index} onClick={() => handleRowClick(client)}>
              <td>{client.clientName}</td>
              <td>{client.clientDescription}</td>
              <td>{client.clientCode}</td>
              <td>{client.inceptionDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};
