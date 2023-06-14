import React from 'react'
import './TopicCard.css'
function TopicCard(props) {
    return (
        <li>
            <a className="card border-0 shadow-sm h-100 text-decoration-none icon-link">
                <img src="https://austingil.com/wp-content/uploads/HTML-Blog-Cover.svg" alt="html-logo" className="card-img-top h-50" />
                <div className="card-body text-truncate d-flex flex-column gap-2 justify-content-start w-100">
                    <div>
                    <p className="text-body-secondary mb-0" id='category'>{props.catergory}</p>
                    <h6 className="card-title text-truncate text-uppercase fw-bold ">{props.topic}</h6>
                    </div>
                    <div className='mt-1'>
                        <div className="raiting">
                            <ion-icon name="star" className="star"></ion-icon>
                            <ion-icon name="star" className="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star-outline"></ion-icon>
                        </div>
                        <p className="card_text m-0 mt-2" id='author'>Author: {props.author}</p>
                    </div>
                </div>
            </a>
        </li>
    )
}

export default TopicCard