import React from 'react'
import './Css/HeroBtn.css'
const HeroBtn = ({HeroBtnName}) => {
  return (
    <>
        <button className='hero-btn'>{HeroBtnName}</button>
    </>
  )
}

export default HeroBtn