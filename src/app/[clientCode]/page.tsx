'use client';
import { LoadingSpinner } from '@/components/common/LoadingSpinner/LoadingSpinner';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { mockMatters } from '../api/mockData';
import { mockClientDetailsList } from '../api/mockData';
import './page.css';

interface Client {
  clientName: string;
  clientDescription: string;
  clientCode: string;
  inceptionDate: string;
}

export default function ClientDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [client, setClient] = useState<Client | null>(null);

  const handleRowClick = (matterCode) => {
    alert(`Redirecting to details for matter: ${matterCode}`);
  };

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
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {client.contacts.map((contact, index) => (
                <tr key={index}>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="detail-card">
        <h2 className="section-title">Matters</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Matter Code</th>
              <th>Matter Name</th>
              <th>Inception Date</th>
            </tr>
          </thead>
          <tbody>
            {mockMatters.map((matter, index) => (
              <tr
                key={index}
                onClick={() => handleRowClick(matter.code)}
                className="table-row-clickable"
              >
                <td>{matter.code}</td>
                <td>{matter.name}</td>
                <td>{matter.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination-container">
          <p>6 results of 12</p>
          <div>
            <button className="button">&lt; Previous</button>
            <button className="button">Next &gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}
