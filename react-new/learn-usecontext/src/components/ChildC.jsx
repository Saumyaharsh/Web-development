import React, { useContext } from "react";
import { usercontext } from "../App";
import { themecontext } from "../App";

const ChildC = () => {
  const user = useContext(usercontext);
  const { theme, setTheme } = useContext(themecontext);
  function handleClick() {
    if (theme === "Light") setTheme("dark");
    else {
      setTheme("Light");
    }
  }
  return (
    <div>
      Hello
      <button onClick={handleClick}>Change Theme</button>
    </div>
  );
};

export default ChildC;
