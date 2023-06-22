import { useEffect, useState } from 'react';

function AddToFavBtn({ topicName, image, rating, favoriteTopics, setFavoriteTopics }) {
  const [isFavorite, setIsFavorite] = useState(false);

  // Check if the topic is already in favorites
  useEffect(() => {
    const favorite = favoriteTopics.find((topic) => topic.topicName === topicName);
    setIsFavorite(!!favorite);
  }, [favoriteTopics, topicName]);

  const toggleFavorite = () => {
    const favorite = favoriteTopics.find((topic) => topic.topicName === topicName);
    const topic = { topicName, image, rating };

    if (favorite) {
      // Remove the topic from favorites
      const updatedFavorites = favoriteTopics.filter((topic) => topic.topicName !== topicName);
      setFavoriteTopics(updatedFavorites);
      setIsFavorite(false);
    } else {
      // Add the topic to favorites
      const updatedFavorites = [...favoriteTopics, topic];
      setFavoriteTopics(updatedFavorites);
      setIsFavorite(true);
    }
  };

  const buttonText = isFavorite ? 'Remove from favorites' : 'Add to favorites';
  const iconName = isFavorite ? 'heart' : 'heart-outline';

  return (
    <button className="fav-text-button w-100 border-0" onClick={toggleFavorite}>
      {buttonText} <ion-icon className="align-middle" name={iconName} aria-label="Favorite"></ion-icon>
    </button>
  );
}

export default AddToFavBtn;
