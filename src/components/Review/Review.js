import React from 'react';
import './Review.css'

const Review = (props) => {
    console.log(props)
    const {name,reviews,ratings}=props.review
    return (
        <div className='review'>
           <h3>Name:{name}</h3>
           <p><span>Review:</span>{reviews}</p>
           <p><small><span>ratings:</span>{ratings}</small></p> 
        </div>
    );
};

export default Review;