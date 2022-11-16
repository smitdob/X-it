import React from 'react'
import './Css/Services.css'
import ServiceCard from './ServiceCard'
const Services = ({ serviceData }) => {
    return (
        <>
            <div className="services-wrapper responsive-padding">
                <div className="service-section-content">
                    <h4 className='service-title-text'>Services</h4>
                </div>
                    <ServiceCard serviceData={serviceData}/>
                </div>
        </>
    )
}

export default Services