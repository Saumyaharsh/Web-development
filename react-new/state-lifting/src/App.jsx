import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  //create state
  //manage state
  //change state
  //sabhi child mei state ko sync karwadunga
  const [name, setName] = useState("");
  return (
    <div>
      <Card name={name} setName={setName} />
    </div>
  );
}

export default App;
