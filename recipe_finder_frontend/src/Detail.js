import React from 'react';

function Detail({ recipe, goBack }) {
  return (
    <div className="Detail">
      <div className="Detail-content">
        <button onClick={goBack} className="Detail-back-button">Back</button>
        <h2>{recipe.title}</h2>
        <p>Cook Time: {recipe.cook_time} mins</p>
        <p>Prep Time: {recipe.prep_time} mins</p>
        <p>Rating: {recipe.ratings}</p>
        <img src={recipe.image} alt={recipe.title} className="Detail-image" />
        <h3>Ingredients</h3>
        <ul className="Detail-ingredients">
          {recipe.ingredients.map(ingredient => (
            <li key={ingredient.id}>{ingredient.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Detail;