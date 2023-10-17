import { Link } from 'react-router-dom'
import './AboutContent.css'
import React from 'react'
import AboutImg from "../assets/abouimg.avif"
import AboutImg2 from "../assets/webimg.jpg"



function AboutContent() {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who Am I</h1>
            <p>Im a front-end developer</p>
            <Link to={"/contact"}>
                <button className='btn'>Contact</button>
            </Link>
        </div>
        <div className='right'>
            <div className='img-container'>
               <div className='img-top'>
                 <img src={AboutImg2} alt="img" className='img'/>
               </div>
               <div className='img-bottom'>
                 <img src={AboutImg} alt="img" className='img'/>
               </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent