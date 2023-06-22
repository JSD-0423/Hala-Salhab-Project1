import React from 'react'
import SearchBar from '../Components/SearchBar/SearchBar'
import SearchResult from '../Components/SearchResult/SearchResult'

export const Home = ({ data, loading, error, loadingMessage, dataCount, resultMessage, errorMessage,filterOptions, sortOptions, handleSearch, handleSort, handleFilter,searchValue, setSearchData, filteredTopics, searchData }) => {
  // console.log(data, error)
  console.log(filteredTopics, searchData)

  return (
    <div>
      <SearchBar filterOptions={filterOptions} sortOptions={sortOptions} handleSearch={handleSearch} handleSort={handleSort} handleFilter={handleFilter} searchValue={searchValue} setSearchData={setSearchData}/>
      <SearchResult data={data} loading={loading} error={error} loadingMessage={loadingMessage} dataCount={dataCount} resultMessage={resultMessage} errorMessage={errorMessage} filteredTopics={filteredTopics} searchData={searchData}/>
    </div>
  )
}

