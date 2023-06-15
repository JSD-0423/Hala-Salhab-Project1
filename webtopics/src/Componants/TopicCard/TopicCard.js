import React from 'react'
import './TopicCard.css'
// import { useNavigate } from "react-router-dom";

function TopicCard(props) {
    // const navigate = useNavigate();
    // const history = useHistory();

//    const handelNavigation = (e) =>{
//     e.preventDefault();
//     // navigate('/details/:id')
//     history.push('/details/:id');
//    }

    return (
        <li>
            <div className="card border-0 shadow-sm text-decoration-none icon-link w-100">
                <img src="https://austingil.com/wp-content/uploads/HTML-Blog-Cover.svg" alt="html-logo" className="card-img-top h-50" />
                <div className="card-body text-truncate d-flex flex-column gap-2 justify-content-start w-100">
                    <div>
                    <p className="text-body-secondary mb-0" id='category'>{props.catergory}</p>
                    <h6 className="card-title text-truncate text-uppercase fw-bold ">{props.topic}</h6>
                    </div>
                    <div className='mt-1'>
                        <div className="raiting">
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star-outline"></ion-icon>
                        </div>
                        <p className="card_text m-0 mt-2" id='author'>Author: {props.author}</p>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default TopicCard