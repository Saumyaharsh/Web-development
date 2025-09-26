import { useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);
  function expensivetask(num) {
    console.log("Expensive task");
    for (let i = 0; i <= 100000000; i++) {}
    return num * 2;
  }
  let doublevalue = useMemo(() => expensivetask(input), [input]);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div>Count : {count}</div>
      <div>double: {doublevalue}</div>
      <input
        type="Number"
        placeholder="Enter the number"
        onChange={(e) => setInput(e.target.value)}
      />
    </>
  );
}

export default App;
