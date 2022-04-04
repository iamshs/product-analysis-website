import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import image from '../../utilities/laptop.jpg'
import Review from '../Review/Review';
import './Home.css'

const Home = () => {

    const [reviews] = useReview()
    const navigate =useNavigate()

    return (
        <div>
            <div className='product-container'>
                <div className="product-detail">
                    <h1 >Buying the <span className='product-title'>BEST ONE!!</span></h1>
                    <p>Now available with an OLED screen, an 8TB SSD, and Intel "Tiger Lake-H" processing, the Dell XPS 15 is our top pick among premium desktop-replacement laptops.</p>
                </div>
                <div className="product-img">
                    <img src={image} alt="" />
                </div>
            </div>
            <div className="review-container">
                <h1>What Our Customer Says</h1>

                <div className="review-details">
                    {
                        reviews.slice(0,3).map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>)
                    }
                </div>
                <button className='see-all-btn' onClick={()=>navigate('/reviews')}>See All Reviews</button>
            </div>

        </div>
    );
};

export default Home;