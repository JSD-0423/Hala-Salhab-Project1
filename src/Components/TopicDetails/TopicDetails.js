import React from 'react'
import './TopicDetails.css'
import Rating from '../Rating/Rating'

function TopicDetails({category, topic, description, rating}) {
  return (
    <div className="container-fluid dark-background">
    <div className="details">
        <div className="details-header-wrapper py-4">
            <p className="m-0 fw-medium">{category}</p>
            <h1>{topic}</h1>
            <div className="raiting">
              <Rating halfIconName={"star-half"} fullIconName={"star"} rating={rating} emptyIconName={"star-outline"}/>
            </div>
        </div>
        <summary className="list-unstyled pb-4">{description}</summary>

    </div>
</div>
  )
}

export default TopicDetails