import React, { useState } from 'react'



export default function TextForm(props) {

    
    var [text, setText] = useState('Enter Your Text');
    // text = "new text"; //wrong why to change text
    // setText("new text"); //Correct why to change text


    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    }

    const handleSpeak = () => {
        let newText = new SpeechSynthesisUtterance();
        newText.text = text;
        window.speechSynthesis.speak(newText);
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    return (
        <>
        <div className='container'>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Upeer Case</button> 
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lower Case</button> 
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>  
            <button className="btn btn-primary mx-2" onClick={handleSpeak}>Speak</button>  
            
        </div>

        <div className="container my-3">
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
