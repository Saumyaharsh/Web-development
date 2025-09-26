import { useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  // const [count, setCount] = useState(0);
  // const btnref = useRef();
  // let val = useRef(0);
  // function handleClick() {
  //   val.current = val.current + 1;
  //   console.log("Value of val ", val.current);
  //   setCount(count + 1);
  // }
  // function handlechangecolor() {
  //   btnref.current.style.backgroundColor = "red";
  //   btnref.current.style.color = "white";
  // }
  // useEffect(() => {
  //   console.log("Mai firse render ho gya");
  // });
  const timeref = useRef(null);
  function handlestart() {
    timeref.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  }
  function handlestop() {
    clearInterval(timeref.current);
    timeref.current = null;
  }
  function handlereset() {
    handlestop();

    setTime(0);
  }
  return (
    <>
      {/* <button ref={btnref} onClick={handleClick}>
        Increment
      </button>
      <br />
      <br />
      <div>Count : {count}</div>
      <br />
      <br />
      <button onClick={handlechangecolor}>Change the color of Increment</button> */}
      <h1>Stopwatch {time}</h1>
      <br /> <br />
      <button onClick={handlestart}>Start</button>
      <br /> <br />
      <button onClick={handlestop}>Stop</button>
      <br /> <br />
      <button onClick={handlereset}>Reset</button>
      <br /> <br />
    </>
  );
}

export default App;
