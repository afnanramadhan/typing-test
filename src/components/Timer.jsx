import React, { useState, useEffect } from "react";
import reload from "../assets/reload.png";
import { Context } from "../pages/Home";

const Timer = () => {
    const { getRandomWord, setDynamicClass, setIdx, setInputKataUser, disabled } =
        React.useContext(Context);
    const [minute, setMinute] = useState(1);
    const [second, setSecond] = useState(0);
    useEffect(() => {
        const timer = setTimeout(() => {
            if (second > 0) {
                setSecond(second - 1);
            }
            if (second === 0) {
                if (minute === 0) {
                    clearTimeout(timer);
                } else {
                    setMinute(minute - 1);
                    setSecond(59);
                }
            }
            if(minute === 0 && second === 1){
                disabled.current = true;
                console.log("disabled");
            }
        }, 1000);
        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [minute, second]);

    const resetTimer = () => {
        setMinute(1);
        setSecond(0);
        setDynamicClass([]);
        setIdx(0);
        getRandomWord();
        setInputKataUser([]);
        disabled.current = false;
        console.log("enabled");
    };

    const printTime = () => {
        return (
            <>
                {minute.toLocaleString("en-US", {
                    minimumIntegerDigits: 2,
                })}
                :
                {second.toLocaleString("en-US", {
                    minimumIntegerDigits: 2,
                })}
            </>
        );
    };

    return (
        <div className="timer">
            <p className="timer-isi">{printTime()}</p>
            <button className="reload-button" onClick={resetTimer}>
                <img src={reload} alt="reload" className="reload-icon" />
            </button>
        </div>
    );
};

export default Timer;
