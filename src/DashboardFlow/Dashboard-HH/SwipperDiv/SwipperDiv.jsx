import React from 'react'
import "./SwipperDiv.css"
// import TimeSlider from '../TimeSlider/TimeSlider'

const SwipperDiv = () => {
  return (
    <div className='SwipperDivMain'>
      <div className='SwipperBar'>
        <div className='SwipeDownDiv'></div>
      </div>
      <div className='SwipperOpt'>
        <div className='SwipperOpt1'>Cancel</div>
        <div className='SwipperOpt2'>Happening in Vegas</div>
        <div className='SwipperOpt3'>Save</div>
      </div>
      <div className='SwipperBody'>
        {/* <TimeSlider/> */}
      </div>
    </div>
  )
}

export default SwipperDiv
