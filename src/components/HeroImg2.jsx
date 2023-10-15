import React from 'react'
import './HeroImg2.css'

function HeroImg2({heading,text}) {
  return (
    <div className='hero-img' style={{background:"url(https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60)", backgroundSize:"cover",backgroundPosition:"center"}}>
      
        <div className='heading'>
            <h1>{heading}</h1>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default HeroImg2