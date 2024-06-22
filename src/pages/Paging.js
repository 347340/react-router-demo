import React, { useState, useEffect } from 'react';

function Pagination({ totalItems, itemsPerPage, onPageChange }) {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [totalItems, itemsPerPage]);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  return (
    <div>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <button key={page} onClick={() => handlePageChange(page)}>
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
