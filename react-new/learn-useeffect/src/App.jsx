import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);
  // useEffect(()=>{
  //   // first > side-effect function h
  //   // sec onf -> clean-up function
  //   // third -> comma seperated dep list
  //   first
  //   return ()=>{
  //     second
  //   }
  // },[third])

  // Variation 1
  // useEffect(() => {
  //   alert("I will run on each render");
  // });

  // Variation: 2
  // that runs on only first render
  // useEffect(() => {
  //   alert("I will alert on only 1st render");
  // }, []);

  //Variation 3:
  // useEffect(() => {
  //   alert("I will run every time when count is updated");
  // }, [count]);

  // Variation 4
  // multiple dependencies
  // useEffect(() => {
  //   alert("I will run everytime when count/total is updated");
  // }, [count, total]);

  //Variation 5
  // iss baar let's add a cleanup function
  useEffect(() => {
    alert("Count is updated");
    return () => {
      alert("Count is unmounted from UI");
    };
  }, [count]);

  function handleTotal() {
    setTotal(total + 1);
  }
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p>{`Count is ${count}`}</p>
      <br />
      <br />
      <button onClick={handleTotal}>Total</button>
      <p>{`Total is ${total}`}</p>
    </div>
  );
}

export default App;
