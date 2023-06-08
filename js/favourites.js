

export const  handleAddToFavorites = (AddToFavBtn, topicDetails) => {
    console.log(AddToFavBtn)
   // Retrieve favorites from local storage or initialize as an empty array
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  // Check if the topic is already in favorites
  const topicIndex = favorites.findIndex(topic => topic.id === topicDetails.id);

  if (topicIndex === -1) {
    // Topic is not in favorites, add it
    favorites.push(topicDetails);
    console.log('Added to Favorites');
    AddToFavBtn.textContent = 'Remove from Favorites';
  } else {
    // Topic is already in favorites, remove it
    favorites.splice(topicIndex, 1);
    console.log('Removed from Favorites');
    AddToFavBtn.textContent = 'Add to Favorites';
  }

  // Store the updated favorites in local storage
  localStorage.setItem('favorites', JSON.stringify(favorites));
  }