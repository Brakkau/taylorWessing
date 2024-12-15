'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Column, Table } from '@/components/common/Table/Table';
import { Client, Matter } from '@/types/types';

interface ItemListProps {
  clients: Client | Matter;
  columns: any;
  rowsPerPage: number;
}

export const ItemList = ({ clients, rowsPerPage, columns }: ItemListProps) => {
  const router = useRouter();

  return (
    <div className="item-list">
      <div className="items-container">
        <Table
          data={clients}
          columns={columns}
          onRowClick={(client) => router.push(`/${client.clientId}`)}
          enableSort={true}
          rowsPerPage={rowsPerPage}
        />
      </div>
    </div>
  );
};
