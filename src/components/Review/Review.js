
import React from 'react';
import './Review.css'

const Review = (props) => {
    console.log(props)
    const {name,reviews,ratings}=props.review
    return (
        <div className='review'>
           <h3>Review by:<span>{name}</span></h3>
           <p><span>Review:</span>{reviews}</p>
           <p>ratings: {ratings} star</p> 
        </div>
    );
};

export default Review;