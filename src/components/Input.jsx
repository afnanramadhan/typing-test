import React, { useState } from "react";
import { copyDisplayText } from "./TextField";
import { Context } from "../pages/Home";

var cpyIdx;

const Input = () => {
    const { idx, setIdx, userInput, setUserInput } = React.useContext(Context);
    cpyIdx = idx;

    const removeSpace = (input) => {
        return input.replace(/\s/g, "");
    };

    // const updateElement = (index, newValue) => {
    //     const newArray = [...dynamicClass]; // Create a copy of the original array
    //     newArray[index] = newValue; // Update the desired element
    //     setDynamicClass(newArray); // Update the state with the modified array
    //   };

    // const pp = () => {

    // }

    const bruteForce = (input) => {
        input = removeSpace(input);
        // input -> query user
        // copyDisplayText[idx] -> kata yang harus di ketik
        let m = copyDisplayText[idx].length;
        let n = input.length;
        if (m < n) {
            return false;
        }
        for (let i = 0; i < n; i++) {
            if (input[i] !== copyDisplayText[idx][i]) {
                return false;
            }
        }
        return true;
    };

    const handleChange = (event) => {
        console.log(event.target.value);
        setUserInput(event.target.value);
        console.log(bruteForce(event.target.value));
    };

    const spasi = (e) => {
        if (e.keyCode === 32) {
            setUserInput("");
            setIdx(idx + 1);
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
export { cpyIdx };
