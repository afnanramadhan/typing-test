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
        setInputKataUser,
        inputKataUser,
        disabled,
    } = React.useContext(Context);

    const updateElement = (index, newValue) => {
        const newArray = [...dynamicClass];
        newArray[index] = newValue;
        setDynamicClass(newArray);
    };

    useEffect(() => {
        test();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userInput]);

    const test = () => {
        if (idx > 0) {
            if (cekKata(inputKataUser[idx - 1])) {
                dynamicClass[idx - 1] = "kata-benar";
            } else {
                dynamicClass[idx - 1] = "kata-salah";
            }
            if (!bruteForce(userInput)) {
                updateElement(idx, "highlight-salah");
            } else {
                updateElement(idx, "highlight");
            }
        } else {
            updateElement(idx, "highlight");
            if (userInput.length > 0) {
                if (!bruteForce(userInput)) {
                    updateElement(idx, "highlight-salah");
                } else {
                    updateElement(idx, "highlight");
                }
            }
            if(disabled.current){
                // updateElement(idx, "highlight-salah");
            }
        }
    };

    const removeSpace = (input) => {
        return input.replace(/\s/g, "");
    };

    // buat cek kata
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
            setIdx(idx + 1);
            setUserInput("");
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
