import { displayWebTopics } from './webTopics.js';
import { displayCategorize } from './categorize.js';
import { ml } from "./nestedHtml.js";
import { fetchData } from './fetchData.js';

// function showHideFav() {
//     let favourites = document.getElementById("favourite");
//     if (favourites.style.display === "") {
//         favourites.style.display = "block";
//     } else if (favourites.style.display == "block") {
//         favourites.style.display = "";
//     }
// }

const fetchWebTopics = async () => {
    let spinner = document.getElementById("spinner");
    let webTopicsContainer = document.querySelector('main');
    let showLoadingRestule = document.getElementById('loading-status');
    let categoryList = document.getElementById('filter');
    let cardsContainer = document.getElementById('cards');
    let topics;
    let categories;

    //show  spinner when loading
    spinner.style.display = "block";

    //hide container to give loading effect
    webTopicsContainer.style.display = "none";

    try {
        //fetching webTopics
        topics = await fetchData('https://tap-web-1.herokuapp.com/topics/list');
        categories = displayCategorize(topics);
        cardsContainer.append(displayWebTopics(topics))
        spinner.style.display = "none";
        webTopicsContainer.style.display = "block";

    } catch (e) {
        spinner.style.display = "none";
        showLoadingRestule.innerHTML = 'Something went wrong. Web topics failed to load';
    }

    if (categories) {
        categories.forEach(category => {
            let option = ml('option', { value: category }, category)
            categoryList.appendChild(option);
        })
    }
}

fetchWebTopics();

