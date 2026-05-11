import { useState, useEffect } from 'react';
import JokeDisplay from './components/JokeDisplay';
import FetchButton from './components/FetchButton';

function App() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(true); // Start true to show loading

  const fetchJoke = () => {
    setLoading(true);
    fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
      .then(response => response.json())
      .then(data => {
        setJoke(data.joke);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching joke:', error);
        setJoke('Failed to load joke. Try again.');
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="app">
      <h1>Programming Jokes</h1>
      {loading && <p>Loading...</p>}
      <JokeDisplay joke={joke} />
      <FetchButton onFetch={fetchJoke} />
    </div>
  );
}

export default App;