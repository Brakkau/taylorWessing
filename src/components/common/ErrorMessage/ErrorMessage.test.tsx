import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ErrorMessage } from './ErrorMessage';

describe('ErrorMessage Component', () => {
  const defaultProps = {
    message: 'Test error message',
    onRetry: vi.fn(),
  };

  it('renders error message correctly', () => {
    render(<ErrorMessage {...defaultProps} />);

    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByText('Error')).toBeInTheDocument();
    expect(screen.getByText('Test error message')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('calls onRetry when retry button is clicked', () => {
    render(<ErrorMessage {...defaultProps} />);

    const retryButton = screen.getByRole('button', { name: /retry/i });
    fireEvent.click(retryButton);

    expect(defaultProps.onRetry).toHaveBeenCalledTimes(1);
  });

  it('has correct ARIA attributes', () => {
    render(<ErrorMessage {...defaultProps} />);

    const alertContainer = screen.getByRole('alert');
    expect(alertContainer).toHaveAttribute('aria-live', 'assertive');
  });

  it('applies correct CSS classes', () => {
    render(<ErrorMessage {...defaultProps} />);

    expect(screen.getByRole('alert')).toHaveClass('error-container');
    expect(screen.getByText('Error')).toHaveClass('error-heading');
    expect(screen.getByRole('button')).toHaveClass('retry-button');
  });
});
