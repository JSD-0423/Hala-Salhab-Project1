import React, { useState, useEffect } from 'react';
import ThemeContext from './ThemeContext';

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme ? storedTheme : 'light';
      });
      
      useEffect(() => {
        localStorage.setItem('theme', theme);
      }, [theme]);
      

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
