import React from 'react';
import './StarRating.scss'; // Import the SCSS file for styling

interface StarRatingProps {
  rating: number; // Rating value from 0 to 6
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  // Calculate the number of filled stars
  const filledStars = rating < 0 ? 0 : rating > 6 ? 6 : rating;

  // Render stars based on the filledStars value
  const renderStars = () => {
    return (
      <div className="stars">
        {Array.from({ length: 5 }, (_, index) => (
          <span key={index} className={index < filledStars ? 'star filled' : 'star'}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="star-rating">
      {renderStars()}
    </div>
  );
};

export default StarRating;
