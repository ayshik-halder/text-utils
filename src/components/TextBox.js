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
                <button className="btn btn-primary" onClick={handleUpperCaseBtn}>Convert to UpperCase</button>
            </div>
            <div className="container my-3" >
                <h1>Text Summary:</h1>
                <p>{wordCount(text)} words and {text.length} characters.</p>
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