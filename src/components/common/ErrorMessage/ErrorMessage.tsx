import type { ErrorMessageProps } from '@/types/types';
import { Button } from '../Button/Button';

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  onRetry,
}: ErrorMessageProps) => (
  <div role="alert" aria-live="assertive" className="error-container">
    <h2 className="error-heading">Error</h2>
    <p>{message}</p>
    <Button onClick={onRetry} className="retry-button">
      Retry
    </Button>
  </div>
);
