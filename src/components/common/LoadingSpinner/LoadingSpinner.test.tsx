import { render, screen } from '@testing-library/react';
import { LoadingSpinner } from './LoadingSpinner';

describe('LoadingSpinner', () => {
  it('should render loading message', () => {
    render(<LoadingSpinner />);
    expect(screen.getByText('Loading posts')).toBeInTheDocument();
  });
});
