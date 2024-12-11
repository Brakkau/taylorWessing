'use client';
import { LoadingSpinner } from '@/components/common/LoadingSpinner/LoadingSpinner';
import { Table } from '@/components/common/Table/Table';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Client {
  clientName: string;
  clientDescription: string;
  clientCode: string;
  inceptionDate: string;
}

const mockClientData = [
  {
    clientName: 'Client Number 1',
    clientDescription: 'Client Number 1: Descriptive Text',
    clientCode: 'Client1Code',
    inceptionDate: '23rd June 2010',
  },
  {
    clientName: 'Client Number 2',
    clientDescription: 'Client Number 2: Descriptive Text',
    clientCode: 'Client2Code',
    inceptionDate: '2nd Dec 2016',
  },
  {
    clientName: 'Client Number 3',
    clientDescription: 'Client Number 3: Descriptive Text',
    clientCode: 'Client3Code',
    inceptionDate: '1st June 2008',
  },
  {
    clientName: 'Client Number 4',
    clientDescription: 'Client Number 4: Descriptive Text',
    clientCode: 'Client4Code',
    inceptionDate: '23rd June 2010',
  },
  {
    clientName: 'Client Number 5',
    clientDescription: 'Client Number 5: Descriptive Text',
    clientCode: 'Client5Code',
    inceptionDate: '23rd June 2010',
  },
  {
    clientName: 'Client Number 6',
    clientDescription: 'Client Number 6: Descriptive Text',
    clientCode: 'Client6Code',
    inceptionDate: '23rd June 2010',
  },
  {
    clientName: 'Client Number 7',
    clientDescription: 'Client Number 7: Descriptive Text',
    clientCode: 'Client7Code',
    inceptionDate: '23rd June 2010',
  },
  {
    clientName: 'Client Number 8',
    clientDescription: 'Client Number 8: Descriptive Text',
    clientCode: 'Client8Code',
    inceptionDate: '23rd June 2010',
  },
  {
    clientName: 'Client Number 9',
    clientDescription: 'Client Number 9: Descriptive Text',
    clientCode: 'Client9Code',
    inceptionDate: '23rd June 2010',
  },
  {
    clientName: 'Client Number 10',
    clientDescription: 'Client Number 10: Descriptive Text',
    clientCode: 'Client10Code',
    inceptionDate: '23rd June 2010',
  },
  {
    clientName: 'Client Number 11',
    clientDescription: 'Client Number 11: Descriptive Text',
    clientCode: 'Client11Code',
    inceptionDate: '23rd June 2010',
  },
  {
    clientName: 'Client Number 12',
    clientDescription: 'Client Number 12: Descriptive Text',
    clientCode: 'Client12Code',
    inceptionDate: '23rd June 2010',
  },
];

export default function ClientDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [client, setClient] = useState<Client | null>(null);

  useEffect(() => {
    // Simulate fetching client data
    const clientCode = params.clientCode as string;
    const foundClient = mockClientData.find((c) => c.clientCode === clientCode);

    if (foundClient) {
      setClient(foundClient);
    } else {
      router.push('/');
    }
  }, [params.clientCode, router]);

  if (!client) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mx-auto p-4">
      <button
        onClick={() => router.back()}
        className="mb-4 px-4 py-2 bg-gray-100 rounded-lg"
      >
        ← Back
      </button>

      <Table data={[client]} />
    </div>
  );
}
