import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  incremented,
  decremented,
  reset,
  incrementbyAmount,
} from "./features/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  function handleaddclick() {
    dispatch(incremented());
  }
  function handlesubClick() {
    dispatch(decremented());
  }
  function handlereset() {
    dispatch(reset());
  }
  function handleincbyamount() {
    dispatch(incrementbyAmount(amount));
  }
  return (
    <>
      <div id="container">
        <button onClick={handleaddclick}>+</button>
        <p>Count : {count}</p>
        <button onClick={handlesubClick}>-</button>
        <button onClick={handlereset}>Reset</button>
        <input
          type="Number"
          placeholder="Enter the number"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleincbyamount}>Increment by amount</button>
      </div>
    </>
  );
}

export default App;
