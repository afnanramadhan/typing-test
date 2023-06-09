import React, { useState, useEffect } from "react";
import reload from "../assets/reload.png";
import { Context } from "../pages/Home";

const Timer = () => {
    const {
        getRandomWord,
        setDynamicClass,
        setIdx,
        setInputKataUser,
        setIsVisible,
        wpm,
        karakterBenar,
        karakterSalah,
        kataBenar,
        kataSalah,
        startTimer,
        setStartTimer,
        setUserInput,
    } = React.useContext(Context);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(30);
    useEffect(() => {
        const timer = setTimeout(() => {
            if (startTimer) {
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
                if (minute === 0 && second === 1) {
                    setIsVisible(false);
                    setStartTimer(false);
                }
            }
        }, 1000);
        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [minute, second, startTimer]);

    const resetTimer = () => {
        setMinute(0);
        setSecond(30);
        setDynamicClass([]);
        setIdx(0);
        getRandomWord();
        setInputKataUser([]);
        setIsVisible(true);
        setStartTimer(false);
        setUserInput("");
        wpm.current = 0;
        karakterBenar.current = 0;
        karakterSalah.current = 0;
        kataBenar.current = 0;
        kataSalah.current = 0;
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
