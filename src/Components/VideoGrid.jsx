import React from 'react';
import './VideoGrid.css';

const VideoGrid = () => {
  return (
    <div className="video-wrapper">
      <div className="videos-grid">
        <div className="video-item">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Ssr-8NRg6gI"
            title="Let's go to Qatar"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h2>Let's go to Qatar</h2>
        </div>
        <div className="video-item">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/r2R-8MOIlYg"
            title="Let's go to Saudia Arabia (Part 2)"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h2>Let's go to Saudia Arabia (Part 2)</h2>
        </div>
        <div className="video-item">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/t2EaKiO2UIQ"
            title="Let's go to Saudia Arabia"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h2>Let's go to Saudia Arabia</h2>
        </div>
        <div className="video-item">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/jgSkTYfWkzU"
            title="Let's go to UAE"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h2>Let's go to UAE</h2>
        </div>
        <div className="video-item">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/O2fI_O_JWxk"
            title="Let's go to Fiji"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h2>Let's go to Fiji</h2>
        </div>
        <div className="video-item">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/hhiUJrfh_mk"
            title="Let's go to Brunei Darussalam"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h2>Let's go to Brunei Darussalam</h2>
        </div>
      </div>
    </div>
  );
};

export default VideoGrid;
