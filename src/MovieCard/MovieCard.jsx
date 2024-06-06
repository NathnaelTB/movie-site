import React from 'react';
import './MovieCard.css';

const MovieCard = (props) => {
    let ratingNumber = props.data.rating.toFixed(1);
    let ratingColor;

    if(ratingNumber > 6.9) {
        ratingColor = 'green';
    } else if(ratingNumber > 4.9) {
        ratingColor = 'yellow';
    } else {
        ratingColor = 'red';
    }

    return (
        <div className="card">
            <img src={props.data.image} alt={props.data.title} />
            <div className="details">
              <h3>{props.data.title}</h3>  
              <div className={`rating-box rating-${ratingColor}`}>
                <h4>{ratingNumber}</h4>
              </div>
            </div>
            <div className="overview">
                <h2>Overview</h2>
                <p>{props.data.overview}</p>
            </div>
            
        </div>
    )
}

export default MovieCard;