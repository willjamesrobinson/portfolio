import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href='https://www.linkedin.com/in/william-robinson-dev/' target='_blank' rel="noreferrer"> <BsLinkedin/> </a>
        <a href='https://github.com/willjamesrobinson' target='_blank' rel="noreferrer"> <BsGithub /> </a>
    </div>
  )
}

export default HeaderSocials