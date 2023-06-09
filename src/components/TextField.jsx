import React, { useEffect, useRef } from "react";
import { Context } from "../pages/Home";

const TextField = () => {
    const { displayText, dynamicClass, getRandomWord, isVisisble } =
        React.useContext(Context);
    const classVisibility = useRef("a");

    useEffect(() => {
        getRandomWord();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (!isVisisble) {
            classVisibility.current = "disabled-content";
        } else {
            classVisibility.current = "enabled-content";
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    });

    return (
        <div className={`rectangle ${classVisibility.current}`}>
            <div className="text">
                {displayText.map((word, index) => (
                    <span
                        key={index}
                        wordnr={index}
                        className={dynamicClass[index]}
                    >
                        {word}{" "}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default TextField;
