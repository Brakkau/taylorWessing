export const LoadingSpinner: React.FC = () => (
  <div role="status" aria-live="polite" className="loading-container">
    <span className="sr-only">Loading posts</span>
    <div className="loading-spinner" aria-hidden="true">
      Loading...
    </div>
  </div>
);
