import React, { useEffect, useState } from "react";
import { Context } from "../pages/Home";

const Input = () => {
    const [inputKataUser, setInputKataUser] = useState([]);
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
    };

    useEffect(() => {
        test();
        test2();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userInput]);


    const test2 = () => {
        if(idx>0){
            if(cekKata(inputKataUser[idx-1])){
                updateElement(idx-1, "kata-benar");
            }else{
                updateElement(idx-1, "kata-salah");
            }
        }
    }

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

    const cekKata = (input) => {
        if(input === displayText[idx-1]){
            console.log("benar");
            return true;
        } 
        console.log("salah");
        return false;
    }

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
        // console.log(event.target.value);
        setUserInput(event.target.value);
        // console.log(bruteForce(event.target.value));
    };

    const spasi = (e) => {
        if (e.keyCode === 32) {
            setInputKataUser((inputKataUser) => [...inputKataUser, removeSpace(userInput)]);
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
