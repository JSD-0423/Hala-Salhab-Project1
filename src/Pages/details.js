import React from 'react'
import TopicDetails from '../Componants/TopicDetails/TopicDetails'
import FavoriteCard from '../Componants/FavoriteCard/FavoriteCard'
import SubTopicsTable from '../Componants/SubTopicsTable/SubTopicsTable'

function Details() {
  return (
      <main className="container-fluid p-0 position-relative">
        <div className="details-container">
        <TopicDetails/>
        <FavoriteCard/>
        <SubTopicsTable/>
      </div>
    </main>
  )
}

export default Details