import { useState, useEffect } from "react";

const Timer = () => {
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
        }, 1000);
        return () => clearTimeout(timer);
    }, [minute, second]);

    const resetTimer = () => {
        setMinute(1);
        setSecond(0);
    };

    const printTime = () => {
        return (
            <>
                <p>
                    {minute.toLocaleString("en-US", {
                        minimumIntegerDigits: 2,
                    })}
                    :
                    {second.toLocaleString("en-US", {
                        minimumIntegerDigits: 2,
                    })}
                </p>
            </>
        );
    };

    return (
        <div className="timer">
            <p className="timer-isi">{printTime()}</p>
        </div>
    );
};

export default Timer;
