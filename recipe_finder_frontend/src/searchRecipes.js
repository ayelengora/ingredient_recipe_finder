import axios from 'axios';

async function searchRecipes(query) {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/recipes`, {
    params: { search: query }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    if (error.response) {
      // Server responded with a status other than 200 range
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
      console.error('Response headers:', error.response.headers);
    } else if (error.request) {
      // Request was made but no response received
      console.error('Request data:', error.request);
    } else {
      // Something happened in setting up the request
      console.error('Error message:', error.message);
    }
    throw error;
  }
}

export default searchRecipes;