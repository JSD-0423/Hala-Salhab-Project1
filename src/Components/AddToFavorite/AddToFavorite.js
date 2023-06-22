import React from 'react'
import './FavoriteCard.css'
import AddToFavBtn from '../AddToFavBtn/AddToFavBtn'

function AddToFavorite({rating, topic, name, image, favoriteTopics, setFavoriteTopics}) {
    return (
        <div className="fav-card card rounded-0 border-3 border-white shadow-none">
        <img src="https://austingil.com/wp-content/uploads/HTML-Blog-Cover.svg" alt={image} className="card-img-top"/>
        <div className="card-body p-3 pt-5">
            <p><span className='fw-bold'>{topic}</span> by <span className='text-decoration-underline bs-link-hover-color'>{name}</span></p>
            <div className="add-to-fav p-3">
                <p className='mb-1'>Interested about this topic?</p>
                <AddToFavBtn text='Add to Favourites' favoriteTopics={favoriteTopics} setFavoriteTopics={setFavoriteTopics} topicName={topic} image={image} rating={rating} name="heart-outline"/>
                <p className='mt-2 mb-0'>Unlimited Credits</p>
            </div>
        </div>
    </div>
    )
}

export default AddToFavorite