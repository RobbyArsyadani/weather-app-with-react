/* eslint-disable no-unused-vars */

import { useState } from "react";
import Weather from "./components/weather";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">
        <Weather />
      </div>
    </>
  );
}

export default App;
