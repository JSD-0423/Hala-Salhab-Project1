import React, { useEffect } from 'react'
import './searchBar.css'
import SelectList from '../SelectList/SelectList'
import SearchInput from '../SearchInput/SearchInput'
import useApiRequest from '../../API/useApiRequest'

function SearchBar({filterOptions, sortOptions, handleSearch, handleSort, handleFilter, searchValue, setSearchData}) {
    const {data, loading, error } = useApiRequest(`https://tap-web-1.herokuapp.com/topics/list?phrase=${searchValue}`);

    useEffect(() => {
        if (data && data.length > 0) {
          setSearchData(data);
        }
      }, [searchValue, data]);
    
    return (
        <section className="container-fluid d-flex justify-content-center mt-4">
            <div className="container row align-items-center shadow-sm rounded-3 px-0" id="search-bar">
                <ion-icon name="search-outline" aria-label="Search" id='search-icon'></ion-icon>
                <SearchInput placeHolder={"Search the website..."} handleSearch={handleSearch}/>
                <div className="col-12 col-lg-3">
                    <div className="row">
                        <div className="col-6 border-md-start border-top d-flex flex-column justify-content-around pe-0">
                            <SelectList name="sort" id="sort" label="Sort by:" options={sortOptions} handelOptionValue={handleSort}/>
                        </div>
                        <div className="col-6 border-start border-top d-flex flex-column justify-content-around pe-0">
                            <SelectList name="filter" id="filter" label="Filter by:" options={filterOptions} handelOptionValue={handleFilter}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SearchBar