// src/Detail.js
import React from 'react';

function Detail({ recipe, goBack }) {
  return (
    <div>
      <button onClick={goBack}>Back</button>
      <h2>{recipe.title}</h2>
      <p>Cook Time: {recipe.cook_time} mins</p>
      <p>Prep Time: {recipe.prep_time} mins</p>
      <p>Rating: {recipe.ratings}</p>
      <img src={recipe.image} alt={recipe.title} />
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map(ingredient => (
          <li key={ingredient.id}>{ingredient.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Detail;
