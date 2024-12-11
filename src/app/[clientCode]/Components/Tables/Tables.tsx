import { Column, Table } from "@/components/common/Table/Table";

// For the contacts table in client details
interface Contact {
  name: string;
  email: string;
  phone: string;
}

export const ContactsTable: React.FC<{ contacts: Contact[] }> = ({ contacts }) => {
  const columns: Column<Contact>[] = [
    { key: 'name', header: 'Name' },
    { key: 'email', header: 'Email' },
    { key: 'phone', header: 'Phone' },
  ];

  return (
    <Table
      data={contacts}
      columns={columns}
      enablePagination={false}
      enableSort={false}
    />
  );
};

// For the matters table
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
