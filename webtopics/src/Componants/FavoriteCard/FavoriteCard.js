import React from 'react'
import './FavoriteCard.css'

function FavoriteCard() {
    return (
        <div className="card">
            <img src="./Logos/javascript.jpg" alt="JavaScript" className="logo-img" />
            <div className="card_content">
                <p>HTML by <a href="">Sarah Smith</a></p>
                <div className="add-to-fav">
                    <p>Interested about this topic?</p>
                    <button className="fav-text-button">Add to Favourites <ion-icon className="align-middle"
                        name="heart-outline" aria-label="Favourite"></ion-icon></button>
                    <p>Unlimited Credits</p>
                </div>
            </div>
        </div>
    )
}

export default FavoriteCard