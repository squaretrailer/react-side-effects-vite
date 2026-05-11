import { useState, useEffect, use } from 'react'
import JokeDisplay from './components/JokeDisplay'
import FetchButton from './components/FetchButton'

function App() {
  const [joke, setJoke] = useState(null)
  const [loading, setLoading] = useState(false)   // missing line

  useEffect(() => {
    fetchJoke()
  }, [])

  const fetchJoke = () => {
    setLoading(true)
    fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
      .then(response => response.json())
      .then(data => {
        setJoke(data.joke)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching joke:', error)
        setLoading(false)
      })
  }

  return (
    <div className="app">
      <h1>Programming Jokes</h1>
      {/* Step 4 & 5: */}
      <JokeDisplay joke={joke} />
      <FetchButton onFetch={fetchJoke} />
    </div>
  )
}

export default App

//
