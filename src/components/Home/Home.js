import React from 'react';
import {  useNavigate } from 'react-router-dom';
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
                    <p>The 15s-du1115TU powered by Intel Celeron N4020 (1.1 GHz up to 2.8 GHz, 2 cores) with Intel UHD Graphics 600. This Hp 15s series laptop comes with micro-edge display, the barely visible bezel revolutionizes your display by letting a larger screen fit into a smaller frame, that is featured with 15.6" diagonal, HD (1366 x 768), micro-edge, BrightView, 220 nits, 45% NTSC Display....</p>
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