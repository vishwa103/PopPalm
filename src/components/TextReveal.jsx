import React, { useEffect, useRef, useState } from 'react';

const TextReveal = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Adjust based on when you want to trigger the animation
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={titleRef}
      className={`text-reveal ${isVisible ? 'animate' : ''}`}
    >
      <span>{children}</span> {/* Wrap content inside span */}
    </div>
  );
};

export default TextReveal;
