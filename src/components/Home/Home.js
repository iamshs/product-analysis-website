import React from 'react';
import image from '../../utilities/laptop.jpg'
import './Home.css'

const Home = () => {
    return (
        <div className='product-container'>
            <div className="product-detail">
              <h2>laptop</h2>
            </div>
            <div className="product-img">
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Home;