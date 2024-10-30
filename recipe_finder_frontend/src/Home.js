import React, { useState } from 'react';
import axios from 'axios';

function Home({ setRecipes, setQuery }) {
  const [localQuery, setLocalQuery] = useState('');
  const [message, setMessage] = useState('');

  const searchRecipes = async (query) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/recipes`, {
      params: { ingredients: query }
    });
      if (response.data.length === 0) {
        setMessage('No recipes found');
      } else {
        setMessage('');
      }
      setRecipes(response.data);
      setQuery(query); // Pass the query to the App component
    } catch (error) {
      console.error('Error fetching recipes:', error);
      setMessage('Error fetching recipes');
    }
  };

  return (
    <div>
      <div className="search-bar">
        <i className="fas fa-search"></i>
        <input
          type="text"
          placeholder="Search by ingredients (comma separated)"
          value={localQuery}
          onChange={(e) => setLocalQuery(e.target.value)}
        />
        <button onClick={() => searchRecipes(localQuery)}>Search</button>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Home;