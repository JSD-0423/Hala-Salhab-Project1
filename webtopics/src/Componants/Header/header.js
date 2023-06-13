import React from 'react'
import TextButton from '../TextButton/TextButton'
import './header.css'

function Header() {
  return (
    <header className="container-fluid d-flex justify-content-between align-items-center px-sm-2 px-lg-5 shadow-sm"
        id="header">
        <p className="brand-primary-text m-0">Web Topics</p>
        <div className='d-flex justify-content-end gap-2'>
            <TextButton name='moon-outline' aria= 'Dark Mode' buttonText= 'Dark Mode'/>
            <TextButton name='heart-outline' aria= 'Favourite' buttonText= 'Favourite'/>
        </div>
    </header>
  )
}

export default Header