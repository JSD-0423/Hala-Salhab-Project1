import React from 'react';

function Rating({ rating, halfIconName, fullIconName, emptyIconName }) {
  const stars = [];
  const intValue = Math.floor(rating);
  const decimalValue = rating - intValue;
  const maxStars = 5;
  // Render full stars
  for (let i = 0; i < intValue; i++) {
    stars.push(<ion-icon name={fullIconName} key={i}></ion-icon>);
  }

  // Render half star if decimal value is between 0.25 and 0.75
  if (decimalValue >= 0.25 && decimalValue <= 0.75) {
    stars.push(<ion-icon name={halfIconName} key={intValue}></ion-icon>);
  }
   // Render empty stars
   const emptyStars = maxStars - stars.length;
   for (let i = 0; i < emptyStars; i++) {
     stars.push(<ion-icon name={emptyIconName} key={intValue + i+1}></ion-icon>);
   }

  return <div>{stars}</div>;
}

export default Rating;