import { Text } from "./VarText";
import React, { useState, useEffect } from "react";


var ppp = [];

const TextField = () => {

    const [displayText, setDisplayText] = useState([]);
    ppp = [...displayText];
    // console.log(displayText)

    useEffect(() => {
        setDisplayText([]); 
        getRandomWord();
    }, []);

    const getRandomWord = () => {
        setDisplayText([]);
        for (let i = 0; i < 35; i++) {
            const randomIndex = Math.floor(Math.random() * Text.length);
            const randomWord = Text[randomIndex];
            setDisplayText((displayText) => [...displayText, randomWord]);
        }
    };

    return (
        <div className="rectangle text">
            {displayText.map((word, index) => (
                <span key={index} wordNr={index}>{word} </span>
            ))}
        </div>
    );
};

// console.log(ppp);
export default TextField;
export {ppp};