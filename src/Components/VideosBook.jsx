import React from 'react'
import { useNavigate } from 'react-router-dom';
import './VideosBook.css'
import VideoGrid from './VideoGrid';
import Books from './Books';
const VideosBook = () => {
    const navigate = useNavigate();
    const handleVideoClick=()=>{
        navigate('/videos/')
    };
    const handleBooksClick=()=>{
    navigate('/books/')
    };
  return (
    <div className='contents'>
        <div className="title">    
            <h2>Latest Videos and Books</h2>
            <p>Discover a range of informative videos and guides that offer insights into working and living in various countries.</p>
        </div>
        <div className="videos-container">
            <VideoGrid/>
        </div>
        <div className="btn">
            <button onClick={handleVideoClick} >See All Videos <svg xmlns="http://www.w3.org/2000/svg" height="10px" viewBox="0 -960 960 960" width="10px"  fill="#3a373d" ><path d="m309.67-81.33-61-61.67L587-481.33 248.67-819.67l61-61.66 400 400-400 400Z"/></svg></button>
        </div>
    
        <div className="books-container">
            <Books/>
        </div>
        <div className="btn">
            <button onClick={handleBooksClick} >See All Books <svg xmlns="http://www.w3.org/2000/svg" height="10px" viewBox="0 -960 960 960" width="10px"  fill="#3a373d" ><path d="m309.67-81.33-61-61.67L587-481.33 248.67-819.67l61-61.66 400 400-400 400Z"/></svg></button>
        </div>
    
    </div>
  )
}

export default VideosBook
