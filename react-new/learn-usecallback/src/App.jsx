import { useCallback, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Childcomponent from "./Component/Childcomponent";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  return (
    <>
      <div>Count : {count}</div>
      <button onClick={handleClick}>Increment</button>
      <div>
        <Childcomponent countvalue={"Click Me"} handleClick={handleClick} />
      </div>
    </>
  );
}

export default App;
