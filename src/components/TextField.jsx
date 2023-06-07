import { Text } from "./VarText";
import React, { useEffect } from "react";
import { Context } from "../pages/Home";

const TextField = () => {
    const { displayText, setDisplayText, dynamicClass} =
        React.useContext(Context);

    useEffect(() => {
        setDisplayText([]);
        getRandomWord();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getRandomWord = () => {
        setDisplayText([]);
        for (let i = 0; i < 55; i++) {
            const randomIndex = Math.floor(Math.random() * Text.length);
            const randomWord = Text[randomIndex];
            setDisplayText((displayText) => [...displayText, randomWord]);
        }
    };

    return (
        <div className="rectangle">
            <div className="text">
                {displayText.map((word, index) => (
                    <span
                        key={index}
                        wordNr={index}
                        className={
                            dynamicClass[index]
                        }
                    >
                        {word}{" "}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default TextField;
