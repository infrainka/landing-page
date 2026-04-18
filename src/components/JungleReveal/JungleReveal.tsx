import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './JungleReveal.css'; 

const JungleReveal: React.FC = () => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleEnterJungle = () => {
    navigate('/portfolio');
  };

  const handleLeafClick = (e: React.MouseEvent<HTMLImageElement>) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      e.stopPropagation();
      
      if (!isAnimating && !isRevealed) {
        setIsAnimating(true);
        setIsRevealed(true); 
        
        setTimeout(() => {
          setIsAnimating(false);
        }, 600); 
      }
    }
  };

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.classList.contains('leaf')) {
      handleLeafClick(e as React.MouseEvent<HTMLImageElement>);
    }
  };

  // Reusable leaf attributes to keep the JSX clean
  const commonLeafProps = {
    decoding: "async" as const,
    fetchPriority: "high" as const,
    loading: "eager" as const,
    onClick: handleLeafClick,
  };

  return (
    <div 
      className={`jungle-container ${isRevealed ? 'revealed' : ''}`}
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className={`content ${isAnimating ? 'animating' : ''}`}>
        <button
          className="reveal-button"
          onClick={handleEnterJungle}
        >
          Enter The Jungle!
        </button>
      </div>

      <img
        {...commonLeafProps}
        src="/amgk_simx_210722.webp"
        className="leaf top-left"
        alt="Top-left jungle leaves"
      />
      <img
        {...commonLeafProps}
        src="/leaves.webp"
        className="leaf top-right"
        alt="Top-right jungle leaves"
      />
      <img
        {...commonLeafProps}
        src="/mid-leaf.webp"
        className="leaf middle-left"
        alt="Middle-left jungle leaves"
      />
      <img
        {...commonLeafProps}
        src="/mid-leaf-r.webp"
        className="leaf middle-right"
        alt="Middle-right jungle leaves"
      />
      <img
        {...commonLeafProps}
        src="/amgk_simx_210722.webp"
        className="leaf bottom-left"
        alt="Bottom-left jungle leaves"
      />
      <img
        {...commonLeafProps}
        src="/leaves.webp"
        className="leaf bottom-right"
        alt="Bottom-right jungle leaves"
      />
    </div>
  );
};

export default JungleReveal;