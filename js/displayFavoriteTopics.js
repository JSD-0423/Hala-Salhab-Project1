function displayFavoriteTopics() {
    const favoriteContainer = document.getElementById('favourite');
    const favCardsList = favoriteContainer.querySelector('.fav_cards');
    favCardsList.innerHTML = ''; // Clear previous content

    // Retrieve favorite topics array from local storage
    const favoriteTopics = JSON.parse(localStorage.getItem('favorites')) || [];
    favoriteTopics.forEach((topic) => {
        const favCard = document.createElement('li');
        favCard.classList.add('fav_card', 'shadow-sm', 'rounded-2');

        const favCardImage = document.createElement('div');
        favCardImage.classList.add('fav_card_image');
        const image = document.createElement('img');
        image.classList.add('rounded-top-2');
        image.src = `./Logos/${topic.image}`;
        image.alt = topic.topic;
        favCardImage.appendChild(image);
        favCard.appendChild(favCardImage);

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body', 'text-truncate', 'm-1');
        const cardTitle = document.createElement('p');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = topic.topic;
        const rating = document.createElement('div');
        rating.classList.add('raiting');
        for (let i = 0; i < topic.rating-1; i++) {
            const starIcon = document.createElement('ion-icon');
            starIcon.setAttribute('name', 'star');
            rating.appendChild(starIcon);
        }
        for (let i = topic.rating; i < 5; i++) {
            const starOutlineIcon = document.createElement('ion-icon');
            starOutlineIcon.setAttribute('name', 'star-outline');
            rating.appendChild(starOutlineIcon);
        }
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(rating);
        favCard.appendChild(cardBody);

        favCardsList.appendChild(favCard);
    });
}

displayFavoriteTopics();
