import React from "react";
import "./App.scss";
import Data from "./assets/initiative.json";

//components
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";

function App() {
  const data = Data

  return (
    <div className="App">
      <Navbar />
      <Cards data={data} />
    </div>
  );
}

export default App;
