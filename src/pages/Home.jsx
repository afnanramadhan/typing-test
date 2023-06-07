import Input from "../components/Input";
import Timer from "../components/Timer";
import TextField from "../components/TextField";
import React,{useState} from "react";

const Context = React.createContext();

const Home = () => {
    const [userInput, setUserInput] = useState("");
    const [idx,setIdx] = useState(0);
    const [displayText, setDisplayText] = useState([]);
    const [dynamicClass, setDynamicClass] = useState([]);


    return (
        <Context.Provider value={{idx, setIdx, userInput, setUserInput,displayText, setDisplayText,dynamicClass, setDynamicClass}}>
            <TextField />
            <div className="baris">
                <Input />
                <Timer />
            </div>
        </Context.Provider>
    );
};

export default Home;
export { Context };