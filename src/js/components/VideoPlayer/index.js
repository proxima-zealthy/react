import React from 'react';
import './VideoPlayes.scss';


const defaultProps = {
  videoId: 'tPLJXHdqEu4',
  title: 'Video Title',
  description: 'Video description here'
}

export default function VideoPlayer({videoId, title, description}) {
  
  return (
    <div className="VideoPlayer">
      <iframe  
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="autoplay; encrypted-media" 
        allowfullscreen
      />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

VideoPlayer.defaultProps = defaultProps;