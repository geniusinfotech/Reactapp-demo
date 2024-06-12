import React, { useState } from 'react'
export default function TextForm(props) {
    var [text, setText] = useState("Enter your Text")

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);

    }

    const handleUpChange = () => {
        // console.log("Btn Click");
        let newText = text.toUpperCase()
        setText(newText);
    }

    const handleWithChange = () => {
        // console.log("Btn Click");
        let newText = text.toLowerCase()
        setText(newText);
    }


    const handleSpeak = () => {
        let newText = new SpeechSynthesisUtterance();
        newText.text = text;
        window.speechSynthesis.speak(newText);
    }

    const clearText = () => {
        // console.log("Btn Click");
        let newText = "";
        setText(newText);
    }


    const handleCopy = () => {
        var newText = document.getElementById('exampleFormControlTextarea1');
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }

    const handleExtra = () => {
        let newText = text.split(/[ ] + /);
        setText(newText.join(" "));
    }

    return (
        <div>
            <div className="my-5 container">
                <h1 className="">{props.heading}</h1>
                <textarea className={`form-control bg-${props.mode === "light" ? "light" : "dark"} text-${props.mode === "light" ? "dark" : "light"}`} id="exampleFormControlTextarea1" rows="10" value={text} onChange={handleOnChange}></textarea>
                <button className='btn btn-outline-danger mt-3' onClick={handleUpChange}>Convert To Upper Case</button>&nbsp;&nbsp;&nbsp;
                <button className='btn btn-outline-dark mt-3' onClick={handleWithChange}>Convert To Lower Case</button>&nbsp;&nbsp;&nbsp;
                <button className='btn btn-outline-success mt-3' onClick={handleSpeak}>Speak</button>&nbsp;&nbsp;&nbsp;
                <button className='btn btn-outline-primary mt-3' onClick={clearText} id='clear'>Clear Text</button>&nbsp;&nbsp;&nbsp;
                <button className='btn btn-outline-primary mt-3' onClick={handleCopy} id='clear'>Copy Text</button>&nbsp;&nbsp;&nbsp;
                <button className='btn btn-outline-primary mt-3' onClick={handleExtra} id='clear'>Remove Extra Text</button>&nbsp;&nbsp;&nbsp;
            </div>

            <div className="container">
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length}Words</p>
                <p>{text.length}Characters</p>
                <p>{0.008 * text.split("").length}Reading Time</p>
                <h3>Previews</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}