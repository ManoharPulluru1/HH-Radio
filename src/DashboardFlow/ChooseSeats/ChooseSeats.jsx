import React, { useState } from 'react';
import './ChooseSeats.css';
import BackArrow from '/svgs/BackArrow.svg';
import errorIcon from '/svgs/errorIcon.svg';

const ChooseSeats = () => {
    const [isSwitchClicked, setIsSwitchClicked] = useState(false);

    const clickedSwitch = () => {
        setIsSwitchClicked(!isSwitchClicked);
    };

    return (
        <div className='ChooseSeatsMain'>
            <div className='ChooseSeatHeader'>
                <img className='backButtonCS' src={BackArrow} alt='backArrow' />
                <div className='CsHeaderLine'>
                    <div className='CsHeading'>Black Flag Tour</div>
                    <div className='CsHeadingTagLine'>Jan 10, 2024 11:00 PM</div>
                </div>
            </div>
            <div className='ChooseSeatBody'>
                <div className='seatCategoryDiv'>
                    <div className='switchMapDivParent'>
                        <div onClick={clickedSwitch} className='switchMapDiv'>Switch to Map</div>
                    </div>
                    <div style={{ top: isSwitchClicked ? '70%' : '18%' }} className='seatCategory'>
                        <div className='stageDiv'></div>
                        <div className='backStageDiv'></div>
                        <div className='vipStageDiv'></div>
                        <div className='generalStageDiv'></div>
                        <div className='wedgeDiv'></div>
                    </div>
                </div>
                <div style={{
                    top: isSwitchClicked ? '55%' : '40%',
                    width: isSwitchClicked ? '85%' : '75%',
                    height: isSwitchClicked ? '7%' : '5%',
                }} className='seatOptionsDiv'>
                    <div className='dot1'></div>
                    <div className='seatOption1'>Booked</div>
                    <div className='dot2'></div>
                    <div className='seatOption2'>Available</div>
                    <div className='dot3'></div>
                    <div className='seatOption3'>Selected</div>
                </div>
                <img style={{ opacity: isSwitchClicked ? '0' : '1' }} className='errorIcon' src={errorIcon} />
                <p style={{ opacity: isSwitchClicked ? '0' : '1' }} className='errorTag'>
                    You have not selected any space
                </p>
            </div>
        </div>
    );
};

export default ChooseSeats;
