import React from 'react'
import TextButton from '../TextButton/TextButton'
import './header.css'

function Header() {
  return (
    <header className="container-fluid shadow-sm d-flex justify-content-center px-sm-2 px-md-5 px-lg-0"
        id="header">
        <div className='container d-flex justify-content-between align-items-center px-0 mx-0'>
        <p className="brand-primary-text m-0">Web Topics</p>
        <div className='d-flex justify-content-end gap-2'>
            <TextButton name='moon-outline' aria= 'Dark Mode' buttonText= 'Dark Mode'/>
            <TextButton name='heart-outline' aria= 'Favourite' buttonText= 'Favourite'/>
        </div>
        </div>
    </header>
  )
}

export default Header