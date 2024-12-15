'use client';

import './SearchBar.css';
import React, { useId, useState } from 'react';
import { Button } from '../Button/Button';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  setSearchTerm,
}) => {
  const searchId = useId();
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchTerm(localSearchTerm);
  };

  return (
    <form className="search-bar" role="search" onSubmit={handleSubmit}>
      <input
        id={searchId}
        type="search"
        placeholder="Search for clients..."
        className="search-input"
        value={localSearchTerm}
        onChange={handleChange}
        autoComplete="off"
        spellCheck="false"
      />
      <Button type="submit" variant="secondary">
        Search
      </Button>
    </form>
  );
};
