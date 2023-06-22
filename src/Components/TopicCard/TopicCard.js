import React from 'react'
import './TopicCard.css'
import Rating from '../Rating/Rating'
import analytics from "../thumbNail‏/analytics.png";
import ThemeContext from '../../Context/ThemeContext'
import { useContext } from 'react'

function TopicCard({ id, category, topic, author, image, rating }) {
    const imagePath = require(`../thumbNail‏/${image}`).default;
    //extract theme 
    const { theme, toggleTheme } = useContext(ThemeContext);
    const cardBodyClassName = theme === 'dark'
        ? 'card-body-dark card-body text-truncate d-flex flex-column gap-2 justify-content-start w-100'
        : 'card-body-light card-body text-truncate d-flex flex-column gap-2 justify-content-start w-100';
    const pClassName = theme === 'dark'
        ? 'category-text-dark mb-0 text-truncate'
        : 'category-text-light text-body-secondary mb-0 text-truncate';

    return (
        <div className="card border-0 shadow-sm text-decoration-none icon-link w-100">
            <img src={analytics} alt={image} className="card-img-top h-50" />
            <div className={cardBodyClassName}>
                <div>
                    <p className={pClassName}>{category}</p>
                    <h6 className="card-title text-truncate text-uppercase fw-bold ">{topic}</h6>
                </div>
                <div className='mt-1'>
                    <div className="raiting">
                        <Rating halfIconName={"star-half"} fullIconName={"star"} rating={rating} emptyIconName={"star-outline"} />
                    </div>
                    <p className="card_text m-0 mt-2" id='author'>Author: {author}</p>
                </div>
            </div>
        </div>
    )
}

export default TopicCard