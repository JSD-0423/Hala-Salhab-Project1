import React from 'react'
import './TopicCard.css'
// import imge from ""

function TopicCard({category, topic,  author, image}) {
    // console.log(imge)
    return (
            <div className="card border-0 shadow-sm text-decoration-none icon-link w-100">
                <img src={'../Logos/ajax.png'} alt={image} className="card-img-top h-50" />
                <div className="card-body text-truncate d-flex flex-column gap-2 justify-content-start w-100">
                    <div>
                    <p className="text-body-secondary mb-0 text-truncate" id='category'>{category}</p>
                    <h6 className="card-title text-truncate text-uppercase fw-bold ">{topic}</h6>
                    </div>
                    <div className='mt-1'>
                        <div className="raiting">
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star-outline"></ion-icon>
                        </div>
                        <p className="card_text m-0 mt-2" id='author'>Author: {author}</p>
                    </div>
                </div>
            </div>
    )
}

export default TopicCard