import { displayWebTopics } from './webTopics.js';
import { debounce } from './debouncer.js';

export const searchTopics = () => {
    let value = searchInput.value.toLowerCase();

    let topics = JSON.parse(localStorage.getItem("Web Topics"))
    let searchResult = [];
    history.pushState({}, "page 2", `?topic=${value}`); 
    console.log(history)
    topics.forEach(element => {
        if (element.topic.toLowerCase().includes(value)) {
            searchResult.push(element);
        }
    });
    let cardsContainer = document.getElementById('cards');
    //hide existing cards
    cardsContainer.innerHTML = '';
    //change URL without reloading 
    history.pushState({}, "", `?topic=${value}`);
    //display search cards
    displayWebTopics(searchResult);
}

let searchInput = document.getElementById('search-input')

searchInput.addEventListener('input', function () {
    debounce(searchTopics, 300);
})