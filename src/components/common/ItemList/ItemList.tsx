'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Column, Table } from '@/components/common/Table/Table';
import { Client, Dispatch, Matter } from '@/types/types';
import { Modal } from '../Modal/Modal';

interface ItemListProps {
  clients: Client[] | Matter[];
  columns: any;
  rowsPerPage: number;
  rowOnClick: 'item' | 'matter';
  setMatterId?: Dispatch;
  matterData?: any;
}

export const ItemList = ({
  clients,
  rowsPerPage,
  columns,
  rowOnClick,
  setMatterId,
  matterData,
}: ItemListProps) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const onClick = (rowOnClick) => {
    if (rowOnClick === 'item') {
      return (client) => router.push(`/${client.clientId}`);
    }
    if (rowOnClick === 'matter' && matterData) {
      return handleOpen;
    }
    // It's good practice to have a default return value
    return () => {};
  };
  return (
    <div className="item-list">
      <div className="items-container">
        <Table
          data={clients}
          columns={columns}
          onRowClick={onClick(rowOnClick)}
          enableSort={true}
          rowsPerPage={rowsPerPage}
          setMatterId={setMatterId}
        />
        {matterData && (
          <Modal isOpen={isOpen} onClose={handleClose}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gridTemplateRows: 'auto',
                gap: '20px',
                marginBottom: '20px',
              }}
            >
              <div>
                <h2 className="info-label">Matter Name</h2>
                <p>{matterData.matterName}</p>
              </div>
              <div>
                <h2 className="info-label">Matter Code</h2>
                <p>{matterData.matterCode}</p>
              </div>
              <div>
                <h2 className="info-label">Inception Date</h2>
                <p>{matterData.matterDate}</p>
              </div>
              <div style={{ gridColumn: '1 / span 3' }}>
                <h2 className="info-label">Description</h2>
                <p>{matterData.matterDescription}</p>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};
