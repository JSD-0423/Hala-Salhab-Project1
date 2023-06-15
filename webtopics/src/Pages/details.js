import React from 'react'
import Header from '../Componants/Header/header'
import Banner from '../Componants/Banner/Banner'
import TopicDetails from '../Componants/TopicDetails/TopicDetails'
import FavoriteCard from '../Componants/FavoriteCard/FavoriteCard'
import SubTopicsTable from '../Componants/SubTopicsTable/SubTopicsTable'
import Footer from '../Componants/Footer/Footer'

function Details() {
  return (
    <div>
      <Header />
      <Banner />
      <main className="container-fluid p-0 position-relative">
        <div className="details-container">
        <TopicDetails/>
        <FavoriteCard/>
        <SubTopicsTable/>
      </div>
    </main>
    <Footer/>
      </div>
  )
}

export default Details