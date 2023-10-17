import './Footer.css'
import React from 'react'
import {FaHome,FaPhone, FaMailBulk, FaLinkedin, FaGithub} from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
          <div className='left'>
            <div className='location'>
               <FaHome size={20}style={{color:"#fff",marginRight:"2rem"}} />
               <div>
                <p>Nalompunathil House</p>
                <p>Kallachi Post</p>
                <p>kozhikode, Kerala</p>
                <p>673506</p>
               </div>
            </div>
            <div className='phone'>
                <h4><FaPhone size={20}style={{color:"#fff",marginRight:"2rem"}} /> 8086493290</h4>
            </div>
            <div className='email'>
                <h4><FaMailBulk size={20}style={{color:"#fff",marginRight:"2rem"}} /> npnajila@gmail.com</h4>
            </div>
           
          </div>
          <div className='right'>
            <h4>Intern at LuminarTechnolab, Kochi</h4>
            <div className='social'>
            <Link target='_blank'><FaLinkedin   size={30}style={{color:"#fff",marginRight:"1rem"}} /></Link>      
           <Link to={"https://github.com/najilanp"} target='_blank'><FaGithub  size={30}style={{color:"#fff",marginRight:"1rem"}} /></Link> 
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer