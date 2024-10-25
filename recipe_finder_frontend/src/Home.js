// src/Home.js
import React, { useState } from 'react';
import axios from 'axios';

function Home({ setRecipes }) {
  const [query, setQuery] = useState('');

  const searchRecipes = async () => {
    const response = await axios.get(`http://localhost:3000/recipes?ingredient=${query}`);
    setRecipes(response.data);
  };

  return (
    <div>
      <h1>Recipe Finder</h1>
      <input
        type="text"
        placeholder="Search by ingredient"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={searchRecipes}>Search</button>
    </div>
  );
}

export default Home;
