import React from 'react';

function Detail({ recipe, goBack }) {
  const decodeImageUrl = (url) => {
    try {
      const decodedUrl = new URL(url);
      return decodedUrl.searchParams.get('url') || url;
    } catch (error) {
      console.error('Error decoding image URL:', error);
      return url;
    }
  };

  const imageUrl = decodeImageUrl(recipe.image);

  return (
    <div className="Detail">
      <div className="Detail-content">
      <h1>{recipe.title}</h1>
        <img
          src={imageUrl}
          alt={recipe.title}
          onError={(e) => {
            console.error('Error loading image:', e);
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/300';
          }}
          style={{
            width: '100%',
            height: '300px',
            objectFit: 'cover',
            borderRadius: '8px',
            marginBottom: '1rem',
          }}
        />
        <p>Cook Time: {recipe.cook_time} mins</p>
        <p>Prep Time: {recipe.prep_time} mins</p>
        <p>Rating: {recipe.ratings}</p>
        <h3>Ingredients</h3>
        <ul className="Detail-ingredients">
          {recipe.ingredients.map(ingredient => (
            <li key={ingredient.id}>{ingredient.name}</li>
          ))}
        </ul>
      </div>
          <button onClick={goBack} className="Detail-back-button">Back</button>
    </div>
  );
}

export default Detail;
