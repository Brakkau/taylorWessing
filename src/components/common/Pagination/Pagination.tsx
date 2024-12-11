

export const Pagination = ({ totalPages, currentPage, onPageChange }) => {

  const handlePrevious = () => {
    if (onPageChange > 1) {
      onPageChange(currentPage - 1);
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  return (
    <div>
      <button onClick={handlePrevious}>Previous</button>
      <button>{`Page ${currentPage} of ${totalPages}`}</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};
