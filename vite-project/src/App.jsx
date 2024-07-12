import {useState} from "react";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  function loadData() {
    console.log("Data Loaded...");
  }

  useEffect(() => {
    loadData()
  }, [count]);

  return(
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Load Data</button>
    </>
  )
}

export default App
