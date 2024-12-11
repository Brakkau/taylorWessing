'use client';

import React, { useState } from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { ItemList } from '../ItemList/ItemList';

interface Client {
  clientName: string;
  clientDescription: string;
  clientCode: string;
  inceptionDate: string;
}

interface SearchableClientListProps {
  clients: Client[];
}

export const SearchableClientList: React.FC<SearchableClientListProps> = ({
  clients,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredClients, setFilteredClients] = useState(clients);

  // Handle search logic
  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);

    // Filter the clients based on the search term
    const filtered = clients.filter((client) =>
      client.clientName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredClients(filtered);
  };

  return (
    <>
      <header>
        <h1>Client Search</h1>
        <SearchBar onSearch={handleSearch} />
      </header>
      <main>
        <ItemList clients={filteredClients} />
      </main>
    </>
  );
};
