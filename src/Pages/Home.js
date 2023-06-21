import React from 'react'
import SearchBar from '../Components/SearchBar/SearchBar'
import SearchResult from '../Components/SearchResult/SearchResult'

export const Home = ({ data, loading, error, loadingMessage, dataCount, resultMessage, errorMessage,filterOptions, sortOptions }) => {
  // console.log(data, error)
  return (
    <div>
      <SearchBar filterOptions={filterOptions} sortOptions={sortOptions}/>
      <SearchResult data={data} loading={loading} error={error} loadingMessage={loadingMessage} dataCount={dataCount} resultMessage={resultMessage} errorMessage={errorMessage}/>
    </div>
  )
}

