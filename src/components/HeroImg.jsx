import { Link } from "react-router-dom"
import "./HeroImg.css" 
import BgImg1 from "../assets/bg-img1.avif"

import React from 'react'

function HeroImg() {
  return (
    <div className="hero">
        <div className="mask">
          <img className="intro-img" src={BgImg1} alt="bg" />
        </div>
        <div className="content">
            <p>NAJILA N P</p>
            <h1>I AM A FRONTEND DEVELOPER</h1>
            <div>
            <Link to={"/project"} className="btn">Projects</Link>
            <Link to={"/contact"} className="btn-light btn">Contact</Link>
        </div>
        </div>
        
    </div>
  )
}

export default HeroImg