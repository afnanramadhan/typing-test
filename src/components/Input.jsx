import React, { useState } from "react";
import { ppp } from "./TextField";

const Input = () => {
    const [userInput, setUserInput] = useState("");
    const [idx,setIdx] = useState(0);

    const removeSpace = (input) => {
        return input.replace(/\s/g, "");
    }

    const validateInput = (input) => {
        if(input === ppp[idx]) {
            return true;
        }
        return false;
    };

    const handleChange = (event) => {
        console.log(event.target.value);
        setUserInput(event.target.value);
    };
    
    const spasi = (e) => {
        if (e.keyCode === 32) {
            console.log(validateInput(removeSpace(userInput)));
            console.log(ppp[idx]);
            console.log(idx)
            setUserInput("");
            setIdx(idx+1);
        }
    };

    return (
        <div className="input">
            <input
                type="text"
                className="input-field"
                onChange={handleChange}
                onKeyDown={spasi}
                value={userInput}
            />
        </div>
    );
};

export default Input;
