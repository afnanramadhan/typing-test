import React, { useState } from "react";
import { ppp } from "./TextField";

const Input = () => {
    const [userInput, setUserInput] = useState("");
    const [idx,setIdx] = useState(0);

    const removeSpace = (input) => {
        return input.replace(/\s/g, "");
    }

    const bruteForce = (input) => {
        input = removeSpace(input);
        // input -> qury user
        // ppp[idx] -> kata yang harus di ketik
        let m = ppp[idx].length;
        let n = input.length;
        console.log(m,n)
        if(m<n){
            return false
        }
        for(let i=0;i<n;i++){
            if(input[i]!==ppp[idx][i]){
                return false
            }
        }
        return true
    }

    const handleChange = (event) => {
        console.log(event.target.value);
        setUserInput(event.target.value);
        console.log(bruteForce(event.target.value));
    };
    
    const spasi = (e) => {
        if (e.keyCode === 32) {
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
