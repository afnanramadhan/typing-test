import { Context } from "../pages/Home";
import React from "react";

const Result = () => {
    const { wpm, karakterBenar, karakterSalah,kataBenar, kataSalah } = React.useContext(Context);

    // const getWPM = () => {
    //     wpm.current = Math.floor((kataBenar.current / 5) * 60);
    // }

    return(
        <div className="result">
            <p>Result</p>
            <p>WPM: {wpm.current}</p>
            <p>Karakter Benar : {karakterBenar.current}</p>
            <p>Karakter Salah : {karakterSalah.current}</p>
            <p>Kata Benar : {kataBenar.current}</p>
            <p>Kata Salah : {kataSalah.current}</p>
        </div>
    )
}

export default Result;