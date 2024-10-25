// src/App.js
import React, { useState } from 'react';
import Home from './Home';
import Results from './Results';
import Detail from './Detail';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <div>
      {!selectedRecipe ? (
        <>
          <Home setRecipes={setRecipes} />
          <Results recipes={recipes} selectRecipe={setSelectedRecipe} />
        </>
      ) : (
        <Detail recipe={selectedRecipe} goBack={() => setSelectedRecipe(null)} />
      )}
    </div>
  );
}

export default App;
