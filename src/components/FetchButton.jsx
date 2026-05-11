// Step 1: Accept `fetchJoke` as a prop
const FetchButton = ({ onFetch }) => {
  return <button onClick={onFetch} className="fetch-button">Get a New Joke</button>;
};

export default FetchButton
