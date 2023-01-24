const Pagination = ({ totalPages, setPage, page }) => {
  return (
    <div className='pagination'>
      {[...Array(totalPages)].map((_, index) => {
        const pageNumber = index + 1;
        return (
          <button
            key={index}
            onClick={() => setPage(pageNumber)}
            disabled={pageNumber === page}
          >
            {pageNumber}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
