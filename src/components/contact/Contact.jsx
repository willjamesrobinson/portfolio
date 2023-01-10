import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qrobqpb', 'template_qr3ctls', form.current, 'Q_S55do4-oazRzU04')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me!</h2>
    
    <div className="container contact_container">
      <div className="contact_options">
        <article className="contact_option">
          <AiOutlineMail className='contact_option-icon'/>
          <h4>Email</h4>
          <h5>willjamesr@gmail.com</h5>
          <a href='mailto:willjamesr@gmail.com' target="_blank" rel="noreferrer" >Send a message!</a>
        </article>
        <article className="contact_option">
          <AiFillLinkedin className='contact_option-icon'/>
          <h4>LinkedIn</h4>
          <h5>willjamesr@gmail.com</h5>
          <a href='https://www.linkedin.com/in/william-robinson-dev/' target="_blank" rel="noreferrer" >Connect with me!</a>
        </article>
        <article className="contact_option">
          <BsWhatsapp className='contact_option-icon'/>
          <h4>Whatsapp</h4>
          <h5>+61 433 199 701</h5>
          <a href='https://api.whatsapp.com/send?phone=61433199701' target="_blank" rel="noreferrer" >Send me a text!</a>
        </article>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder="Your full name" required />
        <input type="email" name='email' placeholder="Your email" required/>
        <textarea name="message" rows="7" placeholder="Your Message" required/>
        <button type='submit' className='btn btn-primary'> Send Message</button>
      </form>
    </div>
    </section>
  )
}

export default Contact
