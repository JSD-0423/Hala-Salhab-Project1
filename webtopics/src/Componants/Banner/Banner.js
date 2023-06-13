import React from 'react'
import './banner.css'

function Banner() {
  return (
    <section class="banner" id="banner">
        <div class="rectangle_wrapper">
            <div class="triangle triangle-left"></div>
            <div class="triangle triangle-right"></div>
        </div>
        <div class="container d-flex justify-content-center pb-3">
            <div class="mx-auto text-start">
                <h3 class="fs-5 text-brand-secondary">Welcome to our website!</h3>
                <p class="m-0">We have a new desgin that's fresh, modern, and easy to use.</p>
            </div>  
        </div>
    </section>
  )
}

export default Banner