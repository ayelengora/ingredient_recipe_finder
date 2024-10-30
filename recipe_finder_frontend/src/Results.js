import React, { useState } from 'react';

function Results({ recipes, selectRecipe, query }) {
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;

  // Calculate the indices of the first and last results on the current page
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = recipes.slice(indexOfFirstResult, indexOfLastResult);

  // Calculate the total number of pages
  const totalPages = Math.ceil(recipes.length / resultsPerPage);

  // Calculate the range of page numbers to display
  const maxPageButtons = 10;
  const startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
  const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="Results">
      <h2 className="Results-Title">{query.toUpperCase()} RECIPES</h2>
      {recipes.length === 0 ? (
        <p>No recipes found</p>
      ) : (
        <>
          <ul className="Results-List">
            {currentResults.map(recipe => (
              <li
                key={recipe.id}
                className="Results-Item"
                onClick={() => selectRecipe(recipe)}
              >
              {recipe.title}
              </li>
            ))}
          </ul>
          <div className="Pagination">
            {currentPage > 1 && (
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className="Pagination-Button"
              >
              &laquo;
              </button>
            )}
            {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
              <button
                key={startPage + index}
                onClick={() => handlePageChange(startPage + index)}
                className={`Pagination-Button ${currentPage === startPage + index ? 'active' : ''}`}
              >
                {startPage + index}
              </button>
            ))}
            {currentPage < totalPages && (
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className="Pagination-Button"
              >
                &raquo;
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Results;