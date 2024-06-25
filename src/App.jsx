import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import PasswordValidator from "./assets/components/PasswordValidator/PasswordValidator";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PasswordValidator />
    </>
  );
}

export default App;
