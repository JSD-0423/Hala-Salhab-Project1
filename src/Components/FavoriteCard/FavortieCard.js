import React from 'react'
import analytics from "../thumbNail‏/analytics.png";
import Rating from '../Rating/Rating'

function FavortieCard({ topic, rating, image }) {
  return (
    <div>
      <img className="rounded-top-2 " src="./Logos/react.webp" alt={image} />
      <div className="card-body text-truncate m-1">
        <p className="card-title">{topic}</p>
        <div className="raiting">
          <Rating halfIconName={"star-half"} fullIconName={"star"} emptyIconName={"star-outline"} rating={rating}/>
        </div>
      </div>
    </div>
  )
}

export default FavortieCard