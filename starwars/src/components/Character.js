import React, { useState, useEffect } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

// Write your Character component here



const Character = (props) => {
   // console.log("props from App.js", props);
    const [name, setName] = useState([]);
    return (
        <div className="characters">
            <h2

            style={{ fontSize: "12px"}, {color: "white"}}
            

            >{props.characterList.name}</h2>
        </div>
    )
}


export default Character;
