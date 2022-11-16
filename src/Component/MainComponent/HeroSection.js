import React from 'react'
import { NavLink } from 'react-router-dom'
import HeroBtn from './HeroBtn';

const HeroSection = ({data}) => {
    
    return (
        <>
            <div className="herosection-wrapper responsive-padding" style={{  backgroundImage: "url(" + data.imgsrclandingimg + ")",backgroundPosition: 'center',backgroundSize: 'cover',backgroundRepeat: 'no-repeat',backgroundAttachment: 'fixed'}}>
                <div className="hero-section-content">
                    <span className="title-text-span">Welcome to</span>
                    <h4 className='title-text'>{data.titletexthome}</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet cum quae ad provident repellendus commodi aut illo blanditiis quaerat hic. Non commodi qui at assumenda nobis veritatis eum animi nisi.</p>
                    <div className="text-center">
                        <NavLink to='/products'>
                            <HeroBtn HeroBtnName='Shop Now'/>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection