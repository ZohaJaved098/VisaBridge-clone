import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Details.css'

const Details = () => {
    const navigate = useNavigate();
    const handleExploreClick = () => {
    navigate('/'); 
  };
  return (
    <div className='details'>
        <div className="content">
            <h2>International Opportunities</h2>
            <p>Embark on an enriching journey towards global career opportunities. Our platform offers comprehensive resources to navigate the complexities of the international job market, immigration processes, and career advancement. Delve into a wealth of information tailored to help you understand and adapt to different work cultures, legal requirements for working abroad, and strategies for successful career growth in a global context.</p>
            <img src="/assets/flags.png" alt="" />
            <button onClick={handleExploreClick} >Explore International Opportunities <svg xmlns="http://www.w3.org/2000/svg" height="10px" viewBox="0 -960 960 960" width="10px"  fill="#3a373d" ><path d="m309.67-81.33-61-61.67L587-481.33 248.67-819.67l61-61.66 400 400-400 400Z"/></svg> </button>
        </div>
        <div className="content">
            <h2>An AI Based Immigration Consultant Platform</h2>
            <p>Visa Bridge, the most innovative AI-driven Immigration Consultant platform, simplifies the complexities of immigration and the visa process, making it easier than ever before. With global adaptability on the rise, choosing the best country to migrate to is becoming increasingly challenging. Visa Bridge revolutionizes this process by analyzing your CV and recommending the best countries out of 200 options worldwide.</p>
            <p>Simply upload your CV, and its advanced AI software will handle the rest. It offers personalized recommendations, providing detailed information on finding a job, getting a driver's license, buying a home, and everything else you need to know about your top three chosen countries. This is achieved through extensive data analysis on social media platforms such as Reddit, Twitter, and Facebook, gathering real-life experiences from students, skilled professionals, entrepreneurs, medical doctors, pharmacists, and other experts.</p>
        </div>    
    </div>
  )
}

export default Details
