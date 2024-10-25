// src/Results.js
import React from 'react';

function Results({ recipes, selectRecipe }) {
  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id} onClick={() => selectRecipe(recipe)}>
            {recipe.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Results;
