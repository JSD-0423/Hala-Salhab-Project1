import React from 'react'
import TextButton from '../TextButton/TextButton'
import './header.css'
import ThemeContext from '../../Context/ThemeContext'
import { useContext } from 'react'

function Header({ toggleFavorites, headerTitle }) {

  //extract theme 
  const { theme, toggleTheme } = useContext(ThemeContext);
  const headerClassName = theme === 'dark'
    ? 'dark-header container-fluid shadow-sm d-flex justify-content-center px-sm-2 px-md-5 px-lg-0'
    : 'light-header container-fluid shadow-sm d-flex justify-content-center px-sm-2 px-md-5 px-lg-0';

  const themeBtnIcon= theme === 'dark'
  ? 'sunny-outline'
  : 'moon-outline';
  
  return (
    <header className={headerClassName}
      id="header">
      <div className='container d-flex justify-content-between align-items-center px-0'>
        <p className="brand-primary-text m-0">{headerTitle}</p>
        <div className='d-flex justify-content-end gap-2'>
          <TextButton name='moon-outline' aria='Dark Mode' buttonText='Dark Mode' handelClick={toggleTheme} />
          <TextButton name='heart-outline' aria='Favourite' buttonText='Favourite' handelClick={toggleFavorites} />
        </div>
      </div>
    </header>
  )
}

export default Header