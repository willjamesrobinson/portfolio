import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>William Robinson</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href='https://www.linkedin.com/in/william-robinson-dev/'><BsLinkedin/></a>
        <a href='https://github.com/willjamesrobinson'><BsGithub/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; William Robinson - All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer