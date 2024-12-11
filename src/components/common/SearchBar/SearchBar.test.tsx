import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
  it('renders with default props', () => {
    const mockOnSearch = vi.fn();
    render(<SearchBar onSearch={mockOnSearch} />);

    expect(screen.getByText('Search posts')).toBeInTheDocument();

    const searchInput = screen.getByRole('searchbox');
    expect(searchInput).toHaveAttribute(
      'placeholder',
      'Search posts by title...'
    );
    expect(searchInput).toHaveAttribute('aria-label', 'Search posts by title');
    expect(searchInput).toHaveAttribute('autocomplete', 'off');
    expect(searchInput).toHaveAttribute('spellcheck', 'false');
  });

  it('renders with initial value', () => {
    const mockOnSearch = vi.fn();
    const initialValue = 'test search';
    render(<SearchBar onSearch={mockOnSearch} initialValue={initialValue} />);

    const searchInput = screen.getByRole('searchbox');
    expect(searchInput).toHaveValue(initialValue);
  });

  it('calls onSearch handler when input changes', () => {
    const mockOnSearch = vi.fn();
    render(<SearchBar onSearch={mockOnSearch} />);

    const searchInput = screen.getByRole('searchbox');
    const testValue = 'test search';

    fireEvent.change(searchInput, { target: { value: testValue } });
    expect(mockOnSearch).toHaveBeenCalledWith(testValue);
    expect(mockOnSearch).toHaveBeenCalledTimes(1);
  });

  it('includes visually hidden helper text for screen readers', () => {
    const mockOnSearch = vi.fn();
    render(<SearchBar onSearch={mockOnSearch} />);

    expect(
      screen.getByText('Type to filter posts by title')
    ).toBeInTheDocument();
  });

  it('has proper ARIA attributes for accessibility', () => {
    const mockOnSearch = vi.fn();
    render(<SearchBar onSearch={mockOnSearch} />);

    const searchContainer = screen.getByRole('search');
    expect(searchContainer).toBeInTheDocument();

    const searchInput = screen.getByRole('searchbox');
    expect(searchInput).toHaveAttribute('aria-label', 'Search posts by title');
  });
});
