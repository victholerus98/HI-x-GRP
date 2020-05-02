import React, {useState} from "react";
import "./styles/searchbar.scss";
import Data from "../assets/initiative.json";



const Searchbar = () => {

  //setword håller koll på alla våra ändringar i vår sökning.
  const [word, setWord] = useState("")

  //setfilterdisplay kommer att visa en updaterad lista baserad på vår sökning.
  const [filterDisplay, setfilterDisplay] = useState(Data.map(item => item.NameOfInitiative));

  //handlechange körs varje gång det sker en ändring i vår searchfield
  const handleChange = e => {


  //vi sparar vår ursprungliga lista i en ny array som vi kallar för oldList, 
    const oldList = item.NameOfInitiative.map(item => {
  //och konverterar alla namn på initiativen till lowercase, då vi inte vet formatet på sökningen.
      return item.NameOfInitiative.toLowerCase()
    }
    )};

    //OM vår search field INTE är tom, visas vår nya lista.
    if (e !== "") {
      const newList = []; // NewList är en array som håller i alla iniativ som möter vårt sökkriterie. 
  
      setWord(e);   //setWord håller koll på alla ändringar i vår searchfield


      //här kör vi includes() metoden. Den läser av om en string inkluderar specifica karaktärer.
      //vi "pass" in the state of "word";
      //den kollar om om våra oldList innehåller "word" i stringen
      newList = oldList.filter(item => item.NameOfInitiative.includes(word.toLowerCase()) 
      );

      //vi kör setFilterDisplay, för att updatera vår state varje gång vår search input ändras. 
      setFilterDisplay(newList);
    } else {
      //Om vår search field ÄR tom, returnerar vi original listan. 
      setFilterDisplay(item.NameOfInitiative);
      }
    };
    
  
  return (
    <div className="searchContainer">
      <input className="searchBar" type="text" placeholder="Search..."></input>
      <input
        className="searchButton"
        id="submitButton"
        type="submit"
        value=""
      ></input>
    </div>
  );
};

export default Searchbar;
