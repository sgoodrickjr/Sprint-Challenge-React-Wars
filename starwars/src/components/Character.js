import React, { useState, useEffect } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

import styled from 'styled-components'

const Headline = styled.h2`
    color: dodgerblue;
    border: 1px solid black;
`

// Write your Character component here



const Character = (props) => {
   // console.log("props from App.js", props);
    const [name, setName] = useState([]);
    return (
        <div className="characters">
            <Headline>{props.characterList.name}</Headline>
        </div>
    )
}


export default Character;
