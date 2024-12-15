'use client';
import { Header } from '@/components/common/Header/Header';

import { SearchBar } from '@/components/common/SearchBar/SearchBar';

export const SearchHeader = ({ searchTerm, setSearchTerm }) => (
  <Header title="Search Client">
    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
  </Header>
);
