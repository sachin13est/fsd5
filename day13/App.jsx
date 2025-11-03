import React, { useState, useEffect, useCallback } from "react";
import "./App.css";

function App() {
  const images = [
    "https://picsum.photos/id/1015/1200/800",
    "https://picsum.photos/id/1018/1200/800",
    "https://picsum.photos/id/1025/1200/800",
    "https://picsum.photos/id/1035/1200/800",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Navigate to previous slide
  const handlePrevClick = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  // Navigate to next slide
  const handleNextClick = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrevClick();
      if (e.key === 'ArrowRight') handleNextClick();
      if (e.key === 'Space') setIsPlaying(prev => !prev);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrevClick, handleNextClick]);

  // Auto-play functionality
  useEffect(() => {
    let intervalId;
    if (isPlaying) {
      intervalId = setInterval(handleNextClick, 3000);
    }
    return () => clearInterval(intervalId);
  }, [isPlaying, handleNextClick]);

  const handlePause = () => {
    setIsPlaying(prev => !prev);
  };

  return (
    <div 
      className="slider-container"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      role="region"
      aria-label="Image Slider"
    >
      <div className="image-container">
        <img 
          src={images[currentIndex]} 
          alt={`Slide ${currentIndex + 1} of ${images.length}`} 
          className="slider-image"
        />
      </div>
      <div className="button-container">
        <button 
          onClick={handlePrevClick} 
          className="nav-btn"
          aria-label="Previous slide"
        >
          ❮
        </button>
        <button 
          onClick={handleNextClick} 
          className="nav-btn"
          aria-label="Next slide"
        >
          ❯
        </button>
      </div>
      <button 
        onClick={handlePause} 
        className="nav-btn play-pause"
        aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isPlaying ? '⏸' : '▶'}
      </button>
      <div className="dots-container" role="tablist" aria-label="Slide dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-selected={index === currentIndex}
            role="tab"
          />
        ))}
      </div>
    </div>
  );
}

export default App; 