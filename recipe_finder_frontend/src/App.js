// src/App.js
import React, { useState } from 'react';
import Home from './Home';
import Results from './Results';
import Detail from './Detail';
import logo from './assets/recipe.png';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [query, setQuery] = useState(''); // Añadir estado para el query

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Recipe Finder Logo" />
      </header>
      <Home setRecipes={setRecipes} setQuery={setQuery} />
      {recipes.length > 0 && !selectedRecipe && (
        <Results recipes={recipes} selectRecipe={setSelectedRecipe} query={query} />
      )}
      {selectedRecipe && (
        <Detail recipe={selectedRecipe} goBack={() => setSelectedRecipe(null)} />
      )}
    </div>
  );
}

export default App;