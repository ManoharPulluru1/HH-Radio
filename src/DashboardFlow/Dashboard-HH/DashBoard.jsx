import React, {useEffect, useState} from 'react';
import './DashBoard.css';

import dashboardHeaderLogo from './images/dashboardHeaderLogo.svg';
import profile from './images/profile.svg';
import radioLogo from './images/radioLogo.svg';
import liveLogo from './images/liveLogo.svg';
import leftNext from './images/leftNext.svg';
import rightNext from './images/rightNext.svg';
import rightArrow from './images/rightArrow.svg';
import timeLogo from './images/timeLogo.svg';
import playAndPause from './images/playAndPause.svg';
import nexusConnectLogo from './images/nexusConnectLogo.svg';
// import Carousel from './Caurosel/Carousel';
import CircleSlider from './CircleSlider/CircleSlider';
import SwipperDiv from './SwipperDiv/SwipperDiv';
import { useNavigate } from 'react-router-dom';

const DashBoard = () => {
  const [isSwiperClicked, setIsSwiperClicked] = useState(false);
  const [startY, setStartY] = useState(null);
  const [swipeDistance, setSwipeDistance] = useState(0);

  const navigate = useNavigate();

  const handleTouchStart = (e) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    if (startY !== null) {
      const currentY = e.touches[0].clientY;
      const distance = currentY - startY;
      setSwipeDistance(distance);

      if (distance > 50) {
        setIsSwiperClicked(false);
        // console.log("Swiper Clicked");
        setTimeout(() => {
          navigate('/itenary');
        }, 2000);
      }
    }
  };

  // console.log(isSwiperClicked)
  const handleTouchEnd = () => {
    setStartY(null);
    setSwipeDistance(0);
  };

  return (
    <div className='DashBoardMain'>
      <div className='dashBoardHeader'>
        <div className='dashBoardHeaderLeft'>
          <img src={dashboardHeaderLogo} alt='dashboardHeaderLogo' />
        </div>
        <div className='dashBoardHeaderRight'>
          <img src={profile} alt='profile' />
        </div>
      </div>
      <div className='dashBoardRadio'>
        <div className='dashboardRadioSmall'>
          <div className='radioLeft'>
            <img className='radioLogo' src={radioLogo} alt='radioLogo' />
            <img className='liveLogo' src={liveLogo} alt='radioLogo' />
          </div>
          <div className='radioRight'>
            <div className='radioTitle'>Puros Trancazos</div>
            <div className='radioChannel'>Puros Trancazos</div>
            <div className='radioControls'>
              <img src={leftNext} alt='leftNext' />
              <img src={playAndPause} alt='playAndPause' />
              <img src={rightNext} alt='rightNext' />
            </div>
          </div>
        </div>
      </div>
      <div className='dashBoardEventName'>
        <div className='eventTitle'>
          <>Bright lights, Big City!</> <img src={rightArrow} alt='rightArrow' />
        </div>
        <div className='eventRecomendations'>14 recommendations</div>
      </div>
      <div className='dashBoardEventContent'>
        {/* <Carousel /> */}
      </div>
      <div className='dashBoardFooter'>
        <div className='dashboardFooterTop'>
          <>Let's Go</>
          <img onClick={()=>{setIsSwiperClicked(true)}} src={timeLogo} alt='timeLogo' />
        </div>
        <div className='dashboardFooterBottom'>Happening now in Vegas</div>
        <img style={{}} className='nexusConnectLogo' src={nexusConnectLogo} alt='nexusConnectLogo' />
      </div>
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ bottom: isSwiperClicked ? "0%" : "-28%" }}
        className='swiperDiv'
      >
        <SwipperDiv/>
      </div>
      <div className='circleSlider'>
        <CircleSlider />
      </div>
    </div>
  );
};

export default DashBoard;
