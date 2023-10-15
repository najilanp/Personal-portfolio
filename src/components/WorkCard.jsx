import React from 'react'
import './WorkCard.css'
import { NavLink } from 'react-router-dom'

function WorkCard({imgsrc,title,text,view,source}) {
  return (
    <div className='project-card'>
    <img src={imgsrc} alt="img" />
    <h2 className='project-title'>{title}</h2>
    <div className='project-details'>
          <p>{text}</p>
          <div className='project-btn'>
             <NavLink target='_blank' to={view} className="btn">View</NavLink>
             <NavLink  target='_blank' to={source} className="btn">Source</NavLink>
          </div>
    </div>
 </div>
  )
}

export default WorkCard