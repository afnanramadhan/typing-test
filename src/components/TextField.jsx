import { Text } from "./VarText";
import React, { useEffect } from "react";
import { Context } from "../pages/Home";



const TextField = () => {
    const { displayText, setDisplayText, dynamicClass, setDynamicClass, idx } = React.useContext(Context);

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

    const updateElement = (index, newValue) => {
        const newArray = [...dynamicClass]; // Create a copy of the original array
        newArray[index] = newValue; // Update the desired element
        setDynamicClass(newArray); // Update the state with the modified array
        console.log(idx);
    };

    // console.log(typeof(document.querySelector("[wordNr]")));
    // const aaa = document.querySelector("[wordNr]");
    // useEffect(() => {
    //     for (let index = 0; index < 10; index++) {
    //         if (index % 2 === 0) {
    //             setDynamicClass((dynamicClass) => [
    //                 ...dynamicClass,
    //                 "kata-benar",
    //             ]);
    //         } else {
    //             setDynamicClass((dynamicClass) => [
    //                 ...dynamicClass,
    //                 "kata-salah",
    //             ]);
    //         }
    //     }
    // }, []);

    return (
        <div className="rectangle">
            {/* <div>
                <button onClick={() => updateElement(idx, "kata-salah")}>
                    PP
                </button>
            </div> */}
            <div className="text">
                {displayText.map((word, index) => (
                    <span
                        key={index}
                        wordNr={index}
                        className={dynamicClass[index]}
                    >
                        {word}{" "}
                    </span>
                ))}
            </div>
        </div>
    );
};

// console.log(ppp);
export default TextField;
