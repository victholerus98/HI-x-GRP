import React, {useState} from "react"
import "./styles/searchbar.scss"

const Searchbar = ({data, setData}) => {
  const [searchTerm, setSearchTerm] = useState("")

  let wordMatch = 0
  const handleSearch = () => {
    const results = data.filter(item => {
      if (item.NameOfInitiative.includes(searchTerm)) {
        wordMatch++
      }
      if (item.Summary.includes(searchTerm)) {
        wordMatch++
      }
    })
    return wordMatch ? setData(results) : setData(data)
  }

  const handleChange = event => {
    setSearchTerm(event.target.value)
  }

  return (
    <div className="searchContainer">
      <input
        className="searchBar"
        value={searchTerm}
        onChange={handleChange}
        type="text"
        placeholder="Search..."
      ></input>
      <input
        className="searchButton"
        id="submitButton"
        type="submit"
        value=""
        onClick={handleSearch}
      ></input>
    </div>
  )
}

export default Searchbar
