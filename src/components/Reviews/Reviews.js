import React from 'react';
import useReview from '../../hooks/useReview';

const Reviews = () => {
    const [reviews] =useReview()
    return (
        <div>
            <h1>All reviews</h1>
            
        </div>
    );
};

export default Reviews;