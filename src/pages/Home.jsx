import Input from "../components/Input";
import Timer from "../components/Timer";
import TextField from "../components/TextField";
import Result from "../components/Result";
import React, { useState, useRef } from "react";
import { Text } from "../components/VarText";

const Context = React.createContext();

const Home = () => {
    const [userInput, setUserInput] = useState("");
    const [idx, setIdx] = useState(0);
    const [displayText, setDisplayText] = useState([]);
    const [dynamicClass, setDynamicClass] = useState([]);
    const [inputKataUser, setInputKataUser] = useState([]);
    const [isVisisble, setIsVisible] = useState(true);
    const wpm = useRef(0);
    const karakterBenar = useRef(0);
    const karakterSalah = useRef(0);
    const kataBenar = useRef(0);
    const kataSalah = useRef(0);

    const getRandomWord = () => {
        setDisplayText([]);
        for (let i = 0; i < 55; i++) {
            const randomIndex = Math.floor(Math.random() * Text.length);
            const randomWord = Text[randomIndex];
            setDisplayText((displayText) => [...displayText, randomWord]);
        }
    };

    return (
        <Context.Provider
            value={{
                idx,
                setIdx,
                userInput,
                setUserInput,
                displayText,
                setDisplayText,
                dynamicClass,
                setDynamicClass,
                getRandomWord,
                inputKataUser,
                setInputKataUser,
                isVisisble,
                setIsVisible,
                wpm,
                karakterBenar,
                karakterSalah,
                kataBenar,
                kataSalah,
            }}
        >
            <TextField />
            <div className="baris">
                <Input />
                <Timer />
            </div>
            <Result />
        </Context.Provider>
    );
};

export default Home;
export { Context };
