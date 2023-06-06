import {displayWebTopics} from './webTopics.js';
// function showHideFav() {
//     let favourites = document.getElementById("favourite");
//     if (favourites.style.display === "") {
//         favourites.style.display = "block";
//     } else if (favourites.style.display == "block") {
//         favourites.style.display = "";
//     }
// }

async function fetchWebTopics() {
    let spinner = document.getElementById("spinner");
    let webTopicsContainer = document.querySelector('main');
    let showLoadingRestule = document.getElementById('loading-status');

    //show  spinner when loading
    spinner.style.display = "block";

    //hide container to give loading effect
    webTopicsContainer.style.display = "none";

    try {
        //fetching webTopics
        const response = await fetch("https://tap-web-1.herokuapp.com/topics/list");
        let data = await response.text();
        localStorage.setItem("Web Topics", data);
        let topics = JSON.parse(data)
        displayWebTopics(topics);
        spinner.style.display = "none";
        webTopicsContainer.style.display = "block";

    } catch (e) {
        spinner.style.display = "none";
        showLoadingRestule.innerHTML = 'Something went wrong. Web topics failed to load';
    }
}

fetchWebTopics();

