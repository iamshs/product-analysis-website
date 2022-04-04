import React from 'react';
import useReview from '../../hooks/useReview';
import './Reviews.css'

const Reviews = () => {
    const [reviews] = useReview()
    return (
        <div>
            <h1>All reviews</h1>

            <div className=' reviews-conatiner'>  {
                    reviews.map(review =>
                        <div className='reviews'>
                            <h3>Review by: {review.name}</h3>
                            <p>{review.reviews}</p>
                            <p><small>ratings:{review.ratings}</small></p>
                        </div>
                    )
                }</div>



        </div>
    );
};

export default Reviews;