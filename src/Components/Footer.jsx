import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="left">
        <div className="document">
          <Link to='/terms-and-conditions/'>Terms & Condition</Link>
          <Link to='/privacy-policy/'>Privacy Policy</Link>
        </div>
        <div className="icon">
          <img src="/assets/facebook.svg" alt="facebook" />
        </div>
      </div>
      <div className="center">
        <div className="address">
          <p>Head office: 3577 Harlem Road, <br /> Buffalo, NY 14225, USA</p>
        </div>
        <div className="rotate-img">
          <img src="/assets/globeFooter.png" alt="globe" />
        </div>
      </div>
      <div className="right">
        <div className="contact">
          <Link to='/terms-and-conditions/'>Reviews</Link>
          <Link to='/privacy-policy/'>Contact us</Link>
        </div>
        <div className="copyright">
          <p>Copyright © 2024 Visa Bridge</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
