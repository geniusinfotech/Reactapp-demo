import React, { useState } from 'react'



export default function TextForm(props) {

    
    const [text, setText] = useState('Enter Your Text');
    // text = "new text"; //wrong why to change text
    // setText("new text"); //Correct why to change text


    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Coverted to UpperCase", "success")
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Coverted to LowerCase", "success")
        
    }
    

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Filed Empty", "success")

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

    const handleCopy = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy on Clipborad", "success")

    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    return (
        <>
        <div className='container' style={{color:props.mode === 'dark' ? 'white' : 'black' }}>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{background:props.mode === 'dark' ? 'gray' : 'white',color:props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Upeer Case</button> 
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lower Case</button> 
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>  
            <button className="btn btn-primary mx-2" onClick={handleSpeak}>Speak</button>  
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>  
            <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>  
            
        </div>

        <div className="container my-3" style={{color:props.mode === 'dark' ? 'white' : 'black'}}>
            <h1>Your Text Summary</h1>
            {/* <p>{text.split(" ").length-1} words and {text.length} characters</p> */}
            <p>{text.length === 0 ? 0 : text.trim().split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text : "Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}
