import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ChildA from "./components/ChildA";
function App() {
  // step1 createcontext
  const usercontext = createContext();
  // step2 : wrap all the child inside a provider
  // step3 : pass value
  /// step4 : consumer ke andar jaakr consume karlo
  const themecontext = createContext();
  const [user, setUser] = useState({ name: "Saumya" });
  const [theme, setTheme] = useState("Light");
  return (
    <>
      <usercontext.Provider value={user}>
        <themecontext.Provider value={{ theme, setTheme }}>
          style={{ backgroundColor: theme === "Light" ? "beige" : "black" }}
          <div id="container">
            <ChildA />
          </div>
        </themecontext.Provider>
      </usercontext.Provider>
    </>
  );
}

export default App;
export { usercontext };
export { themecontext };
