import { useState } from 'react';

function usePagination() {
  const [page, setPage] = useState(1);
  const [perPage] = useState(25);

  return { page, setPage, perPage };
}

export default usePagination;
