import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Card.module.css' 
import { useState } from 'react';

const Card = ({name,imageURL,category,id,description,price,rating,ratingOutOf}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const filledStars = Math.round(rating);
    const emptyStars = 5 - filledStars;
     // Limit for truncated text
      const textLimit = 100;
    return (
    <>
    <div className={styles.card}>
  <div className="row">
    <div className="col-md-4">
      <img src={imageURL} className={styles.cardImage} alt="..."/>
     
    </div>
    <div className="col-md-8">
      <div className="card-body">
      <h5 className="card-title">{name}</h5>
    <p className="card-text">{id}</p>
    <p className="card-text">{category}</p>
    <p className="card-text">{price}</p>
    <p>{isExpanded ? description : `${description.slice(0, textLimit)}...`}
    <button
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          backgroundColor: "transparent",
          color: "grey",
          border: "none",
          borderRadius: "4px",
          padding: "2px",
          cursor: "pointer",
        }}
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button></p>
      <div className={styles.stars}>
          {Array(filledStars)
            .fill("★")
            .map((star, index) => (
              <span key={index} className={styles.star.filled}>{star}</span>
            ))}
          {Array(emptyStars)
            .fill("☆")
            .map((star, index) => (
              <span key={index} className={styles.star.empty}>{star}</span>
            ))}
        </div>
      <p className={styles.ratingText}>{rating.toFixed(1)} / 5</p>
      <p className={styles.totalRatings}>{ratingOutOf} reviews</p>
      
      </div>
    </div>
  </div>
</div> 

    </>
)}

export default Card