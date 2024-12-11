import type { ErrorMessageProps } from '@/types/types';

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  onRetry,
}: ErrorMessageProps) => (
  <div role="alert" aria-live="assertive" className="error-container">
    <h2 className="error-heading">Error</h2>
    <p>{message}</p>
    <button onClick={onRetry} className="retry-button">
      Retry
    </button>
  </div>
);
