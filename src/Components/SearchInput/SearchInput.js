import React from 'react'
function SearchInput({placeHolder, handleSearch}) {
  const handelSearchInput = (event) =>{
    const searchValue = event.target.value;
    handleSearch(searchValue);
  }
  return <input type="search" placeholder={placeHolder} className="col border border-0 ms-3 my-2 z-1" onChange={handelSearchInput}/>
}

export default SearchInput