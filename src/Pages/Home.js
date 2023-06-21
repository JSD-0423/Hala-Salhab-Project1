import React from 'react'
import SearchBar from '../Componants/SearchBar/SearchBar'
import SearchResult from '../Componants/SearchResult/SearchResult'

export const Home = ({ data, loading, error, loadingMessage }) => {
  // console.log(data, error)
  return (
    <div>
      <SearchBar/>
      <SearchResult data={data} loading={loading} error={error} loadingMessage={loadingMessage}/>
    </div>
  )
}

