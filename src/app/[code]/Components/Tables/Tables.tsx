import { Column, Table } from '@/components/common/Table/Table';
import { Person } from '@/types/types';

export const ContactsTable: React.FC<{ contacts: Person[] }> = ({
  contacts,
}) => {
  const columns: Column<Person>[] = [
    { key: 'preferredName', header: 'Name' },
    { key: 'email', header: 'Email' },
    { key: 'phone', header: 'Phone' },
  ];

  return (
    <Table
      data={contacts}
      columns={columns}
      enableSort={false}
    />
  );
};


interface Matter {
  code: string;
  name: string;
  date: string;
}

export const MattersTable: React.FC<{ matters: Matter[] }> = ({ matters }) => {
  const columns: Column<Matter>[] = [
    { key: 'code', header: 'Matter Code', sortable: true },
    { key: 'name', header: 'Matter Name', sortable: true },
    { key: 'date', header: 'Inception Date', sortable: true },
  ];

  return (
    <Table
      data={matters}
      columns={columns}
      onRowClick={(matter) =>
        alert(`Redirecting to details for matter: ${matter.code}`)
      }
      enablePagination={true}
      enableSort={true}
      rowsPerPage={6}
    />
  );
};
