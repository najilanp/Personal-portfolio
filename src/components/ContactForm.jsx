import "./ContactForm.css"
import React from 'react'

function ContactForm() {
  return (
    <div className="form">
        <form>
            <label>Name</label>
            <input type="text" />
            <label>Subject</label>
            <input type="text" />
            <label>Email</label>
            <input type="email" />
            <label htmlFor="">Message</label>
            <textarea  cols="30" rows="10" placeholder="type your message"></textarea>
            <button type="submit" className="btn">Submit</button>
        </form>
    </div>
  )
}

export default ContactForm