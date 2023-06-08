import { fetchData } from './fetchData.js';
import { getURLParameter } from './getURLParameter.js'
import { ml } from "./nestedHtml.js";
import {handleAddToFavorites} from './favourites.js'

const fetchdetails = async () => {
    let details;
    let category = document.getElementById('category');
    let courseTopic = document.getElementById('course-topic');
    let description = document.getElementById('description');
    let tableHeadLine = document.querySelector('.main-head-line')
    let topicsTable = document.getElementById('topics-table');
    let asideCard = document.querySelector('aside');

    try {
        //getting topic ID from URL
        let topicId = getURLParameter('topicId');
        //fetching topic details
        details = await fetchData(`https://tap-web-1.herokuapp.com/topics/details/${topicId}`);
    } catch (e) {
        alert(e)
    }
    //displaying topic details
    category.innerHTML = details.category;
    courseTopic.innerHTML = details.topic;
    description.innerHTML = details.description;
    tableHeadLine.innerHTML = `${details.topic} Sub Topics`
    details.subtopics.forEach(supTopic => {
        let tr = ml('tr', {}, ml('td', {}, [ml('ion-icon', { name: 'checkmark-circle-outline' }), ml('span'), {}, supTopic]))
        topicsTable.appendChild(tr)
    });

    //displaying side card
    let sideImg = ml('img', {src:`./Logos/${details.image}`, alt: details.image, class: "card-img-top h-50"})
    asideCard.appendChild(sideImg)
    let cardBody = ml('div', {class : 'card_body px-3'}, [ml('p', {}, `${details.topic} By ${details.name}`), ml('div', {class : 'add-to-fav'}, [ml('p', {}, 'Interested about this topic?'), ml('button', {class: 'fav-text-button', id: 'add-to-fav-btn'}, 'Add to Favourites'), ml('p', {}, 'Unlimited Credits')])])
    asideCard.appendChild(cardBody)
    
    let AddToFavBtn = document.getElementById('add-to-fav-btn');
    AddToFavBtn.addEventListener('click', () => handleAddToFavorites(AddToFavBtn,details));

}



fetchdetails()