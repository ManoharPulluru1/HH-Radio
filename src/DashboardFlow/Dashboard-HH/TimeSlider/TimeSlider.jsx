import React, { useEffect, useRef } from 'react';
import MicroSlider from 'micro-slider';
import Hammer from 'hammerjs';


const TimeSlider = () => {
    const sliderRef = useRef(null);
    let autoplayInterval;
  
    useEffect(() => {
      const sliderElement = sliderRef.current;
      const msSlider = new MicroSlider(sliderElement, { indicators: true, indicatorText: '' });
      const hammer = new Hammer(sliderElement);
      const msTimer = 2000;
  
      const handleMouseEnter = () => {
        clearInterval(autoplayInterval);
        console.log('Mouse enter detected');
      };
  
      const handleMouseLeave = () => {
        clearInterval(autoplayInterval);
        autoplayInterval = setInterval(() => msSlider.next(), msTimer);
        console.log('Mouse leave detected');
      };
  
      const handleClick = () => {
        clearInterval(autoplayInterval);
        console.log('Click detected');
      };
  
      const handleTap = () => {
        clearInterval(autoplayInterval);
        console.log('Tap gesture detected');
      };
  
      const handleSwipe = () => {
        clearInterval(autoplayInterval);
        autoplayInterval = setInterval(() => msSlider.next(), msTimer);
        console.log('Swipe gesture detected');
      };
  
      sliderElement.addEventListener('mouseenter', handleMouseEnter);
      sliderElement.addEventListener('mouseleave', handleMouseLeave);
      sliderElement.addEventListener('click', handleClick);
  
      hammer.on('tap', handleTap);
      hammer.on('swipe', handleSwipe);
  
      const slideLinks = document.querySelectorAll('.slider-item');
      if (slideLinks && slideLinks !== null && slideLinks.length > 0) {
        slideLinks.forEach((el) =>
          el.addEventListener('click', (e) => {
            e.preventDefault();
            const href = el.dataset.href;
            const target = el.dataset.target;
            if (href !== '#') window.open(href, target);
          })
        );
      }
  
      autoplayInterval = setInterval(() => msSlider.next(), msTimer);
  
      return () => {
        clearInterval(autoplayInterval);
        sliderElement.removeEventListener('mouseenter', handleMouseEnter);
        sliderElement.removeEventListener('mouseleave', handleMouseLeave);
        sliderElement.removeEventListener('click', handleClick);
        hammer.off('tap', handleTap);
        hammer.off('swipe', handleSwipe);
      };
    }, []);
  
    return (
      <div className="micro-slider" ref={sliderRef}>
        {/* Your slider items here */}
        <div className="slider-item s1" data-href="https://codepen.io/sukma-budi" data-target="_blank">1</div>
<div className="slider-item s2" data-href="https://github.com/lgse/micro-slider" data-target="_blank">2</div>
{/* <!-- More slider items with the 'slider-item' class --> */}

      </div>
    );
  };
  
  export default TimeSlider;
  