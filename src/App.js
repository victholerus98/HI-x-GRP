import React from "react"
import "./App.scss"
import Data from "./assets/initiative.json"
import Infographic from "./components/Infographic";

//components
import Navbar from "./components/Navbar"
import Cards from "./components/Cards"

function App() {
  const data = Data
  const dataLength = data.length
  console.log(dataLength)
  return (
    <div className="App">
      <Navbar />
      <Infographic />
      <Cards data={data} />
    </div>
  )
}

export default App
