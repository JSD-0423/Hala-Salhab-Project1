import React from 'react'
import Header from '../Componants/Header/header' 
import Banner from '../Componants/Banner/Banner'
import SearchBar from '../Componants/SearchBar/SearchBar'
import SearchResult from '../Componants/SearchResult/SearchResult'
import Footer from '../Componants/Footer/Footer'

export const Home = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <SearchBar/>
      <SearchResult/>
      <Footer/>
    </div>
  )
}

