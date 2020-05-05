import React, { useState } from "react";
import "./App.scss";
import Data from "./assets/initiative.json";
import Infographic from "./components/Infographic";

//components
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Search from "./components/Search";

function App() {
  const [data, setData] = useState(Data);
  const totalOrganizations = Data.length;

  return (
    <div className="App">
      <Navbar />
      <Infographic totalOrg={totalOrganizations} partners={50} />

      <Search setData={setData} defaultData={Data} />
      <Cards data={data} />
    </div>
  );
}

export default App;
