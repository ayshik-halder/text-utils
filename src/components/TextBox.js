import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextBox(props) {
    //creating a state using {useState}
    const [text, setText] = useState('Enter text here');
    //clearing textBox
    const handleClearText = () => {
        setText('');
    };
    const handleUpperCaseBtn = () => {
        let newText = text.toUpperCase();
        // console.log("handleUpperCaseBtn: " + text + " => " + newText);
        setText(newText);
    };
    const handleLowerCaseBtn = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        // console.log("handleOnChange");
        setText(event.target.value);
    };
    //count words
    const wordCount = (value) => {
        return value.replace(/\./g, '')
            .split(' ')
            .filter(str => { return str !== '' })
            .length;
    };
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onClick={handleClearText} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary " onClick={handleUpperCaseBtn}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-3" onClick={handleLowerCaseBtn}>Convert to LowerCase</button>
                <button className="btn btn-danger mx-2" onClick={handleClearText}>Clear Text</button>
            </div>
            <div className="container my-3" >
                <h1>Text Summary:</h1>
                <p><b>{wordCount(text)}</b> words and <b>{text.length}</b> characters.</p>
                <p><b>{wordCount(text) * 0.005}</b> minutes to read.</p>
            </div>
            <div className="container my-3" >
                <h1>Text Preview:</h1>
                <p>{text}</p>
            </div>
        </>
    );


}

TextBox.propTypes = {
    heading: PropTypes.string.isRequired
}
TextBox.defaultProps = {
    heading: 'Text Area:',
}