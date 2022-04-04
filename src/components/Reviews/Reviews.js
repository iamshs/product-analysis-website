import React from 'react';

import useReview from '../../hooks/useReview';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews] = useReview()

    return (
        <div>
            <h1>All reviews</h1>

            <div className=' reviews-conatiner'>  {
                reviews.map(review => <Review key={review.id}
                    review={review}
                >

                </Review>

                )
            }</div>



        </div>
    );
};

export default Reviews;