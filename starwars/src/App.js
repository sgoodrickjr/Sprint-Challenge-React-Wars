import React, { useState, useEffect } from 'react';
import Character from "./components/Character";
import './App.css';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

    const [characterList, setCharacterList] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
       // console.log("Our axios request", response.data.results);
        setCharacterList(response.data.results);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);
 // console.log("our character list", characterList);
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characterList.map(information => {
        return (
         <Character characterList={information}/> 
        )
      })
      }
    </div>
  );
}

export default App;
