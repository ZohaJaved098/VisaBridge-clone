import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Head.css'
const Head = () => {
  const navigate = useNavigate();
  const handleGetStartClick = () => {
    navigate('/login'); 
  };
  return (
    <div className='head'>
      <h1>Do you want to move abroad?</h1>
      <h2>Let AI Guide Your Decisions on Where to Live, Work, and Excel</h2>
      <p>Travel Abroad Safely Without Relying on Travel Agents</p>
      <button onClick={handleGetStartClick} >Get Started <svg xmlns="http://www.w3.org/2000/svg" height="10px" viewBox="0 -960 960 960" width="10px"  fill="#3a373d" ><path d="m309.67-81.33-61-61.67L587-481.33 248.67-819.67l61-61.66 400 400-400 400Z"/></svg> </button> 
    
    </div>
  )
}

export default Head
