import React, { useState } from 'react';
import axios from 'axios';

function Home({ setRecipes, setQuery }) {
  const [localQuery, setLocalQuery] = useState('');

  const searchRecipes = async (query) => {
    try {
      const response = await axios.get('http://localhost:3001/recipes', {
        params: { ingredients: query }
      });
      setRecipes(response.data);
      setQuery(query); 
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <div>
      <div className="search-bar">
        <i className="icon-search"></i>
        <input
          type="text"
          placeholder="Search by ingredients (comma separated)"
          value={localQuery}
          onChange={(e) => setLocalQuery(e.target.value)}
        />
        <button onClick={() => searchRecipes(localQuery)}>Search</button>
      </div>
    </div>
  );
}

export default Home;