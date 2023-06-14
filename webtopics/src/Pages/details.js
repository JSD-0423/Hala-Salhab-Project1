import React from 'react'
import Header from '../Componants/Header/header'
import Banner from '../Componants/Banner/Banner'
import TopicDetails from '../Componants/TopicDetails/TopicDetails'
import FavoriteCard from '../Componants/FavoriteCard/FavoriteCard'
import SubTopicsTable from '../Componants/SubTopicsTable/SubTopicsTable'

function Details() {
  return (
    <div>
      <Header />
      <Banner />
      <main className="container-fluid p-0 position-relative">
        <TopicDetails/>
        <FavoriteCard/>
        <SubTopicsTable/>
    </main>
      </div>
  )
}

export default Details