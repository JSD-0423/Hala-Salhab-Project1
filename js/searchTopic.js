import { displayWebTopics } from './webTopics.js';
import { debounce } from './debouncer.js';
import { fetchData } from './fetchData.js';

let searchInput = document.getElementById('search-input');
let sortSelect = document.getElementById('sort');
let filterSelect = document.getElementById('filter');

export const searchTopics = async () => {
    let searchvalue = searchInput.value.toLowerCase();
    let cardsContainer = document.getElementById('cards');
    let selectedSort = sortSelect.value;
    let selectedFilter = filterSelect.value;
    console.log(selectedSort, selectedFilter)

    let topics = await fetchData(`https://tap-web-1.herokuapp.com/topics/list?phrase=${searchvalue}`);
    let searchResult = [];
    history.pushState({}, "page 2", `?topic=${searchvalue}`);
    topics.forEach(element => {
        if (element.topic.toLowerCase().includes(searchvalue)) {
            searchResult.push(element);
        }
    })
    searchResult.filter((topic) => {
        console.log(topic.topic)
    console.log("filtered",searchResult)

        return topic.category == selectedFilter;
    }).sort((a, b) => {
        if (!selectedSort) {
            return;
        } else if (selectedSort === 'author-name') {
            const authorA = a.name.toLowerCase();
            const authorB = b.name.toLowerCase();
            if (authorA < authorB) {
                return -1;
            } else if (authorA > authorB) {
                return 1;
            } else {
                return 0;
            }

        } else {
            const TopicA = a.topic.toLowerCase();
            const TopicB = b.topic.toLowerCase();
            if (TopicA < TopicB) {
                return -1;
            } else if (TopicA > TopicB) {
                return 1;
            } else {
                return 0;
            }
        }

    })
    console.log("sorted",searchResult)

    //change URL without reloading 
    history.pushState({}, "", `?topic=${searchvalue}`);
    //hide existing cards
    cardsContainer.innerHTML = '';
    //display search cards

    cardsContainer.append(...displayWebTopics(searchResult))
}




// Event listener for search input
searchInput.addEventListener('input', function () {
    debounce(searchTopics, 300);
})

// Event listener for sort select
sortSelect.addEventListener('change', function () {
    searchTopics();
});

// Event listener for filter select
filterSelect.addEventListener('change', function () {
    searchTopics();
});