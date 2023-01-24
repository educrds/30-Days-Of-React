import { useState } from 'react';

function usePagination() {
  const [page, setPage] = useState(1);
  const [perPage] = useState(25);

  return { page, setPage, perPage };
}

const Pagination = ({ totalPages, setPage, page }) => {
  return (
    <div className='pagination'>
      {[...Array(totalPages)].map((_, index) => {
        const pageNumber = index + 1;
        return (
          <button
            key={index}
            onClick={() => {
              setPage(pageNumber);
              window.scrollTo(0, 0);
            }}
            disabled={pageNumber === page}
          >
            {pageNumber}
          </button>
        );
      })}
    </div>
  );
};

export { usePagination, Pagination };
