// import { describe, it, expect, vi, beforeEach, MockedFunction } from 'vitest';
// import { render, screen, within } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { ItemList } from './ItemList';
// import { usePostList } from './Hooks/useClientList';
// import { ErrorMessageProps, ItemProps, SearchBarProps } from '@/app/types/types';
// import { LegacyRef } from 'react';

// vi.mock('./Hooks/usePostList');

// vi.mock('../PostItem/PostItem', () => {
//   // Not great, but vi mock calls are hoisted to top of the file
//   // eslint-disable-next-line @typescript-eslint/no-require-imports
//   const React = require('react');
//   return {
//     PostItem: React.forwardRef(function PostItem(
//       props: ItemProps,
//       ref: LegacyRef<HTMLDivElement> | undefined
//     ) {
//       return (
//         <div ref={ref} data-testid={`post-${props.client.id}`}>
//           {props.client.title}
//           <button onClick={() => props.onDelete(props.client.id)}>Delete</button>
//         </div>
//       );
//     }),
//   };
// });

// vi.mock('../SearchBar/SearchBar', () => ({
//   SearchBar: (props: SearchBarProps) => (
//     <input
//       data-testid="search-bar"
//       placeholder={props.initialValue}
//       onChange={(e) => props.onSearch(e.target.value)}
//     />
//   ),
// }));

// vi.mock('@/Componnets/LoadingSpinner/LoadingSpinner', () => ({
//   LoadingSpinner: () => <div data-testid="loading-spinner">Loading...</div>,
// }));

// vi.mock('../ErrorMessage/ErrorMessage', () => ({
//   ErrorMessage: (props: ErrorMessageProps) => (
//     <div data-testid="error-message">
//       {props.message}
//       <button onClick={props.onRetry}>Retry</button>
//     </div>
//   ),
// }));

// const mockUsePostList = usePostList as unknown as MockedFunction<
//   typeof usePostList
// >;

// describe('ItemList', () => {
//   const mockPosts = [
//     { id: 1, title: 'Post 1', body: 'post 1' },
//     { id: 2, title: 'Post 2', body: 'post 2' },
//   ];

//   const mockHandleDelete = vi.fn();
//   const mockHandleSearch = vi.fn();
//   const mockFetchPosts = vi.fn();

//   beforeEach(() => {
//     vi.clearAllMocks();
//     mockUsePostList.mockReturnValue({
//       filteredPosts: mockPosts,
//       loading: false,
//       error: null,
//       postsRef: { current: [] },
//       handleDelete: mockHandleDelete,
//       handleSearch: mockHandleSearch,
//       fetchPosts: mockFetchPosts,
//       posts: [],
//       searchTerm: '',
//     });
//   });

//   it('renders loading spinner when loading', () => {
//     mockUsePostList.mockReturnValue({
//       loading: true,
//       error: null,
//       filteredPosts: [],
//       postsRef: { current: [] },
//       posts: [],
//       searchTerm: '',
//       handleDelete: vi.fn(),
//       handleSearch: vi.fn(),
//       fetchPosts: vi.fn(),
//     });

//     render(<ItemList />);
//     expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
//   });

//   it('handles post deletion correctly', async () => {
//     render(<ItemList />);

//     for (const post of mockPosts) {
//       const postElement = screen.getByTestId(`post-${post.id}`);
//       const deleteButton = within(postElement).getByText('Delete');

//       await userEvent.click(deleteButton);
//       expect(mockHandleDelete).toHaveBeenCalledWith(post.id);
//     }
//   });

//   it('retries fetching posts when retry button is clicked', async () => {
//     const errorMessage = 'Failed to fetch posts';
//     mockUsePostList.mockReturnValue({
//       loading: false,
//       error: errorMessage,
//       filteredPosts: [],
//       postsRef: { current: [] },
//       fetchPosts: mockFetchPosts,
//       posts: [],
//       searchTerm: '',
//       handleDelete: vi.fn(),
//       handleSearch: vi.fn(),
//     });

//     render(<ItemList />);

//     const retryButton = screen.getByText('Retry');
//     await userEvent.click(retryButton);

//     expect(mockFetchPosts).toHaveBeenCalled();
//   });

//   it('renders with correct accessibility attributes', () => {
//     render(<ItemList />);

//     expect(screen.getByRole('main')).toBeInTheDocument();
//     expect(screen.getByRole('region')).toHaveAttribute('aria-label', 'Posts');
//     expect(screen.getByText('Posts List')).toHaveClass('sr-only');
//   });
// });
