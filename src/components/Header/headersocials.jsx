import React from 'react'
import {BsLinkedin}from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const headersocials = () => {
    return (
    <div className='header__socials'>
  <a href="https://www.instagram.com"  target='_blank' rel="noreferrer"> <BsInstagram />  </a>
  <a href="https://github.com" target='_blank' rel="noreferrer"> < BsGithub/></a>
  <a href="https://www.linkedin.com" target='_blank' rel="noreferrer"><BsLinkedin/> </a>
  
  
  </div>
    )
}

export default headersocials