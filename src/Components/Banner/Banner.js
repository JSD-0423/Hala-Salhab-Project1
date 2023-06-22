import React from 'react'
import './banner.css'
import ThemeContext from '../../Context/ThemeContext'
import { useContext } from 'react'

function Banner() {
  //extract theme 
  const { theme, toggleTheme } = useContext(ThemeContext);
  const bannerClassName = theme === 'dark'
    ? 'banner-dark'
    : 'banner-light';


  return (
    <section className={bannerClassName}>
        <div className="rectangle_wrapper">
            <div className="triangle triangle-left"></div>
            <div className="triangle triangle-right"></div>
        </div>
        <div className="container d-flex justify-content-center pb-3">
            <div className="mx-auto text-start">
                <h3 className="fs-5 text-brand-secondary">Welcome to our website!</h3>
                <p className="m-0">We have a new desgin that's fresh, modern, and easy to use.</p>
            </div>  
        </div>
    </section>
  )
}

export default Banner