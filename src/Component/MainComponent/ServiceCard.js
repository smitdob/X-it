import React from 'react'
import './Css/Services.css'
const ServiceCard = ({serviceData}) => {
  return (
    <>
        {serviceData.map((elem) => {
                            return (
                                <div className="service-content-wrapper" key={elem.id}>
                                    <div className={`service-content`}>
                                        <h4 className="service-content-title">{elem.name}</h4>
                                        <p className='service-content-dis'>{elem.describe}</p>
                                        <ul className="service-content-point">
                                            {elem.points.point1 ? <li className='service-point'>{elem.points.point1}</li> : ''}
                                            {elem.points.point2 ? <li className='service-point'>{elem.points.point2}</li> : ''}
                                            {elem.points.point3 ? <li className='service-point'>{elem.points.point3}</li> : ''}
                                            {elem.points.point4 ? <li className='service-point'>{elem.points.point4}</li> : ''}
                                            {elem.points.point5 ? <li className='service-point'>{elem.points.point5}</li> : ''}
                                            {elem.points.point6 ? <li className='service-point'>{elem.points.point6}</li> : ''}
                                            {elem.points.point7 ? <li className='service-point'>{elem.points.point7}</li> : ''}
                                            {elem.points.point8 ? <li className='service-point'>{elem.points.point8}</li> : ''}
                                            {elem.points.point9 ? <li className='service-point'>{elem.points.point9}</li> : ''}
                                            {elem.points.point10 ? <li className='service-point'>{elem.points.point10}</li> : ''}
                                            {elem.points.point11 ? <li className='service-point'>{elem.points.point11}</li> : ''}
                                        </ul>
                                    </div>
                                    <div className="service-image-wrapper">
                                        {elem.imagesrc ? <img className='service-image' src={elem.imagesrc} alt="service" /> : <img className='service-image' src={'https://bit.ly/3EyuEes'} alt="service" />}
                                    </div>
                                </div>
                            )
                        })
                    }
                 </>
  )
}

export default ServiceCard