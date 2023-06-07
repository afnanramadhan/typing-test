import React, { useEffect } from "react";
import { Context } from "../pages/Home";

const Input = () => {

    const {
        idx,
        setIdx,
        userInput,
        setUserInput,
        displayText,
        dynamicClass,
        setDynamicClass,
    } = React.useContext(Context);

    const updateElement = (index, newValue) => {
        const newArray = [...dynamicClass]; // Create a copy of the original array
        newArray[index] = newValue; // Update the desired element
        setDynamicClass(newArray); // Update the state with the modified array
        console.log(idx);
    };

    useEffect(() => {
        test();
    }, [userInput]);

    const test = () => {
        if (idx > 0) {
            if (!bruteForce(userInput)){
                updateElement(idx, "highlight-salah");
            }else{
                updateElement(idx, "highlight");
            }
        }else{
            updateElement(idx, "highlight");
        }

    };

    const removeSpace = (input) => {
        return input.replace(/\s/g, "");
    };



    const bruteForce = (input) => {
        input = removeSpace(input);
        // input -> query user
        // displayText[idx] -> kata yang harus di ketik
        let m = displayText[idx].length;
        let n = input.length;
        if (m < n) {
            return false;
        }
        for (let i = 0; i < n; i++) {
            if (input[i] !== displayText[idx][i]) {
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
