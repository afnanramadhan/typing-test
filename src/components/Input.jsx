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
        dynamicClass2,
        setDynamicClass2,
    } = React.useContext(Context);

    const updateElement = (index, newValue) => {
        const newArray = [...dynamicClass];
        console.log("newArray :", newArray);
        newArray[index] = newValue;
        setDynamicClass(newArray);
    };
    const updateElement2 = (index, newValue) => {
        const newArray = [...dynamicClass2];
        console.log("newArray2 :", newArray);
        newArray[index] = newValue;
        setDynamicClass2(newArray);
    };

    useEffect(() => {
        test();
        test2();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userInput]);

    const test2 = () => {
        if (idx > 0) {
            if (cekKata(inputKataUser[idx - 1])) {
                // updateElement2(idx - 1, "kata-benar");
                dynamicClass[idx - 1] = "kata-benar";
            } else {
                dynamicClass[idx - 1] = "kata-salah";
                // updateElement2(idx - 1, "kata-salah");
            }
        }
    };

    const test = () => {
        if (idx > 0) {
            // dynamicClass[idx - 1] = "";
            if (!bruteForce(userInput)) {
                updateElement(idx, "highlight-salah");
            } else {
                updateElement(idx, "highlight");
            }
        } else {
            updateElement(idx, "highlight");
        }
    };

    const removeSpace = (input) => {
        return input.replace(/\s/g, "");
    };

    const cekKata = (input) => {
        if (input === displayText[idx - 1]) {
            return true;
        }
        return false;
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
        setUserInput(event.target.value);
    };

    const spasi = (e) => {
        if (e.keyCode === 32) {
            setInputKataUser((inputKataUser) => [
                ...inputKataUser,
                removeSpace(userInput),
            ]);
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
