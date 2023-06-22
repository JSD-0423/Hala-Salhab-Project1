import React from 'react'
import'./FavortiesContainer.css'
import FavortieCard from '../FavoriteCard/FavortieCard'
function FavortiesContainer({favoriteTopics, favotireContaierHeadLine}) {
  return (
    <section className="container-fluid shadow-sm d-flex justify-content-center px-sm-2 px-md-5 px-lg-0" id="favourite">
        <div className='container d-flex flex-column justify-content-center px-0'>
            <p className='my-3 fw-semibold'>{favotireContaierHeadLine}</p>
            <ul className="list-unstyled fav_cards">
                {favoriteTopics.map(topic =>{
                return <li className="fav_card shadow-sm rounded-2">
                    <FavortieCard topic={topic.topicName} image={topic.image} rating={topic.rating}/>
                </li>
                })
                }
                </ul>
        </div>
        </section>
  )
}

export default FavortiesContainer