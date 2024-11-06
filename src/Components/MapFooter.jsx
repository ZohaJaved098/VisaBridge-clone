import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MapFooter.css';

const MapFooter = () => {
    const navigate = useNavigate();
    const handleSubscribeClick=()=>{
      navigate('/')
    };
    const [visiblePair, setVisiblePair] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisiblePair(prevPair => (prevPair === 0 ? 1 : 0));
        }, 10000); 
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="subscription">
            <div className="map-footer">
                <div className={`titles ${visiblePair === 0 ? 'fade-in' : 'fade-out'}`}>
                    <h1>Subscribe for Immigration & Career Insights</h1>
                    <p>Join over 15,000 individuals who are navigating their way to a successful international career. Stay informed, stay ahead.</p>
                </div>
                <div className={`titles ${visiblePair === 1 ? 'fade-in' : 'fade-out'}`}>
                    <h1>Stay Informed and Prepared</h1>
                    <p>Join our community of passionate and aspiring international professionals. Subscribe for the latest updates, tips, and strategies to make your global career aspirations a reality.</p>
                </div>
            </div>
            <div className="mail">
                <input type="email" name="email" placeholder='Enter Your Email' />
                <button onClick={handleSubscribeClick} >Submit </button>
            </div>
            <div className="map">
                <img src="/assets/mapFooter.webp" alt="" />
            </div>
        </div>
    );
};

export default MapFooter;
