import React from 'react'
import './FavoriteCard.css'

function FavoriteCard() {
    return (
        <div className="fav-card card rounded-0 border-3 border-white shadow-none">
        <img src="https://austingil.com/wp-content/uploads/HTML-Blog-Cover.svg" alt="JavaScript" className="card-img-top"/>
        <div className="card-body p-3 pt-5">
            <p><span className='fw-bold'>HTML</span> by <span className='text-decoration-underline bs-link-hover-color'>Sarah Smith</span></p>
            <div className="add-to-fav p-3">
                <p className='mb-1'>Interested about this topic?</p>
                <button className="fav-text-button w-100 border-0">Add to Favourites <ion-icon className="align-middle"
                        name="heart-outline" aria-label="Favourite"></ion-icon></button>
                <p className='mt-2 mb-0'>Unlimited Credits</p>
            </div>
        </div>
    </div>
    )
}

export default FavoriteCard