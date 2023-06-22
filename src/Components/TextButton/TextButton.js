import React from 'react'
import './TextButton.css'
import ThemeContext from '../../Context/ThemeContext'
import { useContext } from 'react'

function TextButton({ name, aria, buttonText, handelClick }) {
    const handelEvent = () => {
        handelClick()
    }

    //extract theme 
    const { theme, toggleTheme } = useContext(ThemeContext);
    const buttonClassName = theme === 'dark'
        ? 'text-button-dark text-button'
        : 'text-button-ligh text-button';

    return (
        <button className={buttonClassName} onClick={handelEvent}>
            <ion-icon name={name} aria-label={aria}></ion-icon>
            <span className="d-sm-inline-block d-none">{buttonText}</span>
        </button>
    )
}

export default TextButton