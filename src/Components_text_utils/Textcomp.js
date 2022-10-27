import React from 'react'
import { useState } from 'react';
export default function Textcomp(props) {
    const [text, setText] = useState("");
    ////
    const upperClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "info")
        // console.log(newText)
    }
    ////
    const copyText=()=>{
        let selectedText=document.getElementById("exampleFormControlTextarea1");
        selectedText.select();
        navigator.clipboard.writeText(selectedText.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied!", "info")
    }
    
    const RemoveSpaces = () => {
        let newStr = text.split(/\s+/);
        setText(newStr.join(" "))
        props.showAlert("Extra Spaces has been removed", "info")
    }
    ////
    const lowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        // console.log(newText)
        props.showAlert("Converted to Lower Case", "info")
    }
    ////
    const capitaliser = () => {
        let retStr = "";
        let newTextArr = text.split(/\s+/);
        for (let i = 0; i < newTextArr.length; i++) {
            let x = newTextArr[i][0].toUpperCase();
            let y = newTextArr[i].slice(1).toLowerCase();
            y = x + y;
            console.log(y);
            if (i === newTextArr.length - 1) {
                retStr += y;
                break;
            }
            retStr += y + " ";
        }
        setText(retStr);
        props.showAlert("Text has been capitalized.(First letter of each word will be upper case & rest would be lower case)", "info")
    }
    /////
    const clear = () => {
        setText("");
        props.showAlert("Text Cleared", "info")
    }
    /////
    const reverse = () => {
        let newText = "";
        for (let i = 0; i < text.length; i++) {
            newText += text[i] === text[i].toUpperCase() ? text[i].toLowerCase() : text[i].toUpperCase();
        }
        setText(newText);
        props.showAlert("Cases have been interchanged", "info")
    }
    /////
    const onChangeHandler = (e) => {
        setText(e.target.value)
    }
    return (

        <div className={`border border-${props.mode === 'light' ? 'dark' : 'light'} rounded-3 container py-3 my-3`}>

            <div className={`container py-3 my-3 bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{
                        // textAlign: "center"
                    }}>Textify your content in your way</label>
                    <textarea placeholder='Enter Your Text Here' value={text} onChange={onChangeHandler} className={`form-control bg-${props.mode === 'light' ? 'light' : 'dark'} text-${props.mode === 'light' ? 'black' : 'white'}`} id="exampleFormControlTextarea1" rows="5"></textarea>
                </div>
                <button disabled={text.split(" ").filter((e)=>{return e.length!==0}).length===0} className={`btn ${props.mode === 'light' ? 'btn-primary' : 'btn-outline-primary'} text-light btn-sm mx-3 my-2`} onClick={upperClick}>Convert to Upper Case</button>
                <button disabled={text.split(" ").filter((e)=>{return e.length!==0}).length===0} className={`btn ${props.mode === 'light' ? 'btn-primary' : 'btn-outline-primary'} text-light btn-sm mx-3 my-2`} onClick={lowerClick}>Convert to Lower Case</button>
                <button disabled={text.split(" ").filter((e)=>{return e.length!==0}).length===0} className={`btn ${props.mode === 'light' ? 'btn-primary' : 'btn-outline-primary'} text-light btn-sm mx-3 my-2`} onClick={capitaliser}>Capitalisation</button>
                <button disabled={text.split(" ").filter((e)=>{return e.length!==0}).length===0} className={`btn ${props.mode === 'light' ? 'btn-primary' : 'btn-outline-primary'} text-light btn-sm mx-3 my-2`} onClick={reverse}>Invert the Cases</button>
                <button disabled={text.length===0} className={`btn ${props.mode === 'light' ? 'btn-primary' : 'btn-outline-primary'} text-light btn-sm mx-3 my-2`} onClick={RemoveSpaces}>Remove Extra Spaces</button>
                <button disabled={text.split(" ").filter((e)=>{return e.length!==0}).length===0} className={`btn ${props.mode === 'light' ? 'btn-primary' : 'btn-outline-primary'} text-light btn-sm mx-3 my-2`} onClick={clear}>Clear</button>
                <button disabled={text.split(" ").filter((e)=>{return e.length!==0}).length===0} className={`btn ${props.mode === 'light' ? 'btn-primary' : 'btn-outline-primary'} text-light btn-sm mx-3 my-2`} onClick={copyText}>Copy Text</button>
            </div>
            <div className={`container my-3 bg-${props.mode} text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <h2>Short Overview of Your Text</h2>
                <p>No. of words in your text: {text.split(/\s+/).filter((e)=>{return e.length!==0}).length}</p>
                <p>No. of characters used in your text: {text.length}</p>
                <p>Avg time taken to read: {((text.split(/\s+/).filter((e)=>{return e.length!==0}).length)*(18 / 100)).toFixed(2)} seconds</p>
            </div>
        </div>
    );
}
