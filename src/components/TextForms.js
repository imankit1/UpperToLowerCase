import React, {useState} from 'react'


export default function TextForms(props) {
    const handleUpClick =()=>{
        // console.log("UpperCase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText) 
    }
    const handleLoClick =()=>{
        // console.log("UpperCase was clicked"+ text);
        let newText = text.toLowerCase();
        setText(newText) 
    }
    const handleClearClick =()=>{
        // console.log("UpperCase was clicked"+ text);
        let newText = '';
        setText(newText) 
    }

    const handleOnChange =(event)=>{
        console.log("on change");
        setText(event.target.value)
    }

const [text, setText] =useState('');
    return (
        <>
        <div className="container ">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* <label for="mybox" className="form-label">Example textarea</label> */}
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
                </div>
                <button className="btn btn-primary mx-1"   onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1"   onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1"   onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="container my-3">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.08*text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
                </div> 
            </>
    )
}
