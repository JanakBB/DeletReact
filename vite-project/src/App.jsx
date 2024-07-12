import {useState} from "react";

function App() {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={incrementCount}>Increment</button>
    </>
);
}

export default App
