import React from 'react'
import './about.css'
import ME2 from '../../assets/me2.png'
import {FaAward} from 'react-icons/fa'
import {GoLocation} from 'react-icons/go'
import {AiFillStar} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me!</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME2} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon"/>
              <h5>Experience</h5>
              <small>3+ Years Professional Experience</small>
            </article>
            <article className="about_card">
              <GoLocation className="about_icon"/>
              <h5>Location</h5>
              <small>Melbourne, Australia</small>
            </article>
            <article className="about_card">
              <AiFillStar className="about_icon"/>
              <h5>My Favourites</h5>
              <small>Ruby on Rails, React, Javascript, CSS, UI/UX</small>
            </article>
          </div>

          <p>
          After 3+ years in the Civil Engineering and Construction industry, I decided to pursue software engineering. I've always been deeply curious and excited about learning, design and problem solving which led me to join Le Wagon's Software Development Coding Bootcamp in 2022 to accelerate my journey. Prior to studying, I worked as a Civil Engineer and Junior Project Manager for 3 years where I developed a broad set of transferable skills. 
          </p>

          <a href="#contact" className="btn btn-primary"> Let's Talk!</a>
        </div>
      </div>
    </section>
  )
}

export default About