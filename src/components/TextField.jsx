import { Text } from "./VarText";
import React, { useState, useEffect } from "react";

var ppp = [];

const TextField = () => {
    const [displayText, setDisplayText] = useState([]);
    const [dynamicClass, setDynamicClass] = useState([]);
    ppp = [...displayText];
    // console.log(displayText)

    useEffect(() => {
        setDisplayText([]);
        getRandomWord();
    }, []);

    const getRandomWord = () => {
        setDisplayText([]);
        for (let i = 0; i < 55; i++) {
            const randomIndex = Math.floor(Math.random() * Text.length);
            const randomWord = Text[randomIndex];
            setDisplayText((displayText) => [...displayText, randomWord]);
        }
    };

    // console.log(typeof(document.querySelector("[wordNr]")));
    // const aaa = document.querySelector("[wordNr]");
    useEffect(() => {
        for (let index = 0; index < 10; index++) {
            if(index%2===0){
                setDynamicClass((dynamicClass) => [...dynamicClass, "kata-benar"]);
            }else{
                setDynamicClass((dynamicClass) => [...dynamicClass, "kata-salah"]);
            }
        }
    },[])
    

    return (
        <div className="rectangle">
            <div className="text">
                {displayText.map((word, index) => (
                    <span key={index} wordNr={index} className={dynamicClass[index]}>
                        {word}{" "}
                    </span>
                ))}
            </div>
        </div>
    );
};

// console.log(ppp);
export default TextField;
export { ppp };
