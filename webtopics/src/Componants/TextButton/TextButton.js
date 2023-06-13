import React from 'react'
import './TextButton.css'

function TextButton(props) {
    return (
        <button className="btn text-button">
            <ion-icon name={props.name} aria-label={props.aria}></ion-icon>
            <span className="d-sm-inline-block d-none">{props.buttonText}</span>
        </button>
    )
}

export default TextButton