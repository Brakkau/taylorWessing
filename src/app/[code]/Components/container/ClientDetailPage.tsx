'use client';

import styles from '@/styles/page.module.css';

import { LoadingSpinner } from '@/components/common/LoadingSpinner/LoadingSpinner';
import { Client, Matter } from '@/types/types';
import { useRouter } from 'next/navigation';
// import { useClientAndMatterData } from '@/hooks/useClientAndMatterData';
import { ContactsTable } from '../Tables/Tables';
import { Button } from '@/components/common/Button/Button';
import { useMatterList } from '@/hooks/useMatterList';
import { ErrorMessage } from '@/components/common/ErrorMessage/ErrorMessage';
import { useState } from 'react';
import { Results } from '@/components/container/results/Results';
import { Column } from '@/components/common/Table/Table';
import { Header } from '@/components/common/Header/Header';
import { formatDate } from '@/utils/formatDate';

interface ClientDetailPageProps {
  clientData: Client;
}

export const ClientDetailPage = ({ clientData }: ClientDetailPageProps) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const columnOrder = 'NAME';
  const sort = 'ASCENDING';
  const offset = rowsPerPage;
  const index = (currentPage - 1) * rowsPerPage;

  const { matterList, loading, error } = useMatterList(
    clientData.clientId,
    columnOrder,
    sort,
    index,
    offset
  );

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} onRetry={() => {}} />;

  const columns: Column<Matter>[] = [
    { key: 'matterCode', header: 'Matter Code', sortable: true },
    { key: 'matterName', header: 'Matter Name', sortable: true },
    { key: 'matterDate', header: 'Matter Date', sortable: true },
  ];

  return (
    <div className="clientData-detail-container">
      <Header title="Client Details">
        <Button variant="secondary" onClick={router.back}>
          Back to Results
        </Button>
      </Header>
      <main className={styles.main}>
        <div className="detail-card">
          <div className="clientData-info-grid">
            <div>
              <h2 className="info-label">Client Name</h2>
              <p>{clientData.name}</p>
            </div>
            <div>
              <h2 className="info-label">Client Description</h2>
              <p>{clientData.description}</p>
            </div>
            <div>
              <h2 className="info-label">Inception Date</h2>
              <p>{formatDate(clientData.inceptionDate)}</p>
            </div>
            <div>
              <h2 className="info-label">Address</h2>
              <p>
                {clientData.address.addressLine1}
                <br />
                {clientData.address.addressLine2}
                <br />
                {clientData.address.city}, {clientData.address.county}
                <br />
                {clientData.address.postcode}
              </p>
            </div>
          </div>
          <div>
            <h2 className="section-title">Contacts</h2>
            <ContactsTable contacts={clientData.people} />
          </div>
        </div>
        <div className="detail-card">
          <h2 className="section-title">Matters</h2>
          {!loading && !error && matterList && (
            <>
              <Results
                clients={matterList}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                rowsPerPage={rowsPerPage}
                columns={columns}
              />
            </>
          )}
        </div>
      </main>
    </div>
  );
};
