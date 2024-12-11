"use client";

import React, { useId } from 'react';
import './SearchBar.css';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
  initialValue?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  initialValue = '',
}) => {
  const searchId = useId();

  return (
    <div className="search-bar" role="search">
      <input
        id={searchId}
        type="search"
        placeholder="Search for clients..."
        onChange={(e) => onSearch(e.target.value)}
        className="search-input"
        defaultValue={initialValue}
        autoComplete="off"
        spellCheck="false"
      />
    </div>
  );
};
