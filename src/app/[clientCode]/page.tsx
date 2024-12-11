'use client';
import './page.css';
import { LoadingSpinner } from '@/components/common/LoadingSpinner/LoadingSpinner';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { mockMatters } from '../api/mockData';
import { mockClientDetailsList } from '../api/mockData';
import { ContactsTable, MattersTable } from './Components/Tables/Tables';

export default function ClientDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [client, setClient] = useState<any | null>(null);

  useEffect(() => {
    const clientCode = params.clientCode as string;
    const client = mockClientDetailsList.find(
      (c) => c.clientCode === clientCode
    );

    if (client) {
      setClient(client);
    } else {
      router.push('/');
    }
  }, [params.clientCode, router]);

  if (!client) {
    return <LoadingSpinner />;
  }

  return (
    <div className="client-detail-container">
      <div className="detail-card">
        <header className="header">
          <h1 className="page-title">Client Details</h1>
          <button className="button">&lt; Back to Results</button>
        </header>
        <div className="client-info-grid">
          <div>
            <h2 className="info-label">Client Name</h2>
            <p>{client.clientName}</p>
          </div>
          <div>
            <h2 className="info-label">Client Description</h2>
            <p>{client.clientDescription}</p>
          </div>
          <div>
            <h2 className="info-label">Inception Date</h2>
            <p>{client.inceptionDate}</p>
          </div>
          <div>
            <h2 className="info-label">Address</h2>
            <p>
              {client.address.line1}
              <br />
              {client.address.line2}
              <br />
              {client.address.city}, {client.address.county}
              <br />
              {client.address.postcode}
            </p>
          </div>
        </div>
        <div>
          <h2 className="section-title">Contacts</h2>
          <ContactsTable contacts={client.contacts} />
        </div>
      </div>
      <div className="detail-card">
        <h2 className="section-title">Matters</h2>
        <MattersTable matters={mockMatters} />
      </div>
    </div>
  );
}
