import React from 'react'
import './searchBar.css'
import SelectList from '../SelectList/SelectList'

function SearchBar() {
  return (
    <section className="container-fluid d-flex justify-content-center mt-4">
    <div className="container row align-items-center shadow-sm rounded-3 px-0" id="search-bar">
            <ion-icon name="search-outline" aria-label="Search" id='search-icon'></ion-icon>
            <input type="search" placeholder="Search the website..." className="col border border-0 ms-3 my-2" />
        <div className="col-12 col-lg-3">
            <div className="row">
                <div className="col-6 border-md-start border-top d-flex flex-column justify-content-around pe-0">
                    <SelectList name ="sort" id="sort" label="Sort by:"/>
                </div>
                <div className="col-6 border-start border-top d-flex flex-column justify-content-around pe-0">
                    <SelectList name ="filter" id="filter" label="Filter by:"/>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default SearchBar