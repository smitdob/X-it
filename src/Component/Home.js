import React from 'react'
import HeroSection from './MainComponent/HeroSection'
import Services from './MainComponent/Services'
import './Style.css'
const Home = () => {
  // data for HomeSection and hero btn
  const data={
    titletexthome:'X-it Store',
    imgsrclandingimg:'https://bit.ly/3Eyia6A'}
  // data for service section
  const serviceData=[
    {
      id:1,
      name:"Design and Trend Direction",
      describe:'I love working with both new and established brands on their designs. I’m able to work with your inspiration, or I can provide moodboards and creative direction for you, it’s up to you. I invest in a lot of trend resources, so clients don’t have to.',
      imagesrc:"https://bit.ly/3EyuEes",
      points:{
        point1:'Concept creation',
        point2:'Trend research',
        point3:'Moodboards',
        point4:'Colour palette creation',
        point5:'Range plans',
        point6:'Garment design'
      }
    },
    {
      id:2,
      name:"Production, Sourcing and Working with Suppliers",
      describe:'Getting ideas produced successfully can be difficult. In my 16 years in the industry I’ve been involved in the production of over 1000 styles and would love to help you go from idea to production effectively. ',
      imagesrc:"https://bit.ly/3OdMdUs",
      points:{
        point1:'Concept creation',
        point2:'Translating your design ideas into a factory ready format',
        point3:'Technical drawings',
        point4:'Tech packs, including measurements, grade rules, construction, tolerance and more',
        point5:'3d design renders',
        point6:'Fit sample assistance',
        point7:'Product development',
        point8:'Factory and fabric sourcing <assistance></assistance>',
        point9:'Factory management help',
        point10:'Costings and price calculations',
        point11:'Critical path creation and management'
      }
    }
  ]
  return (
    <>
      <HeroSection data={data}/>
      <Services serviceData={serviceData}/>
    </>
    )
}

export default Home