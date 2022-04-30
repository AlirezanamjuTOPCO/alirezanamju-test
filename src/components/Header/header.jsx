import React from 'react'
import './header.css'
import CTA from './CTA'
import PROFILE from './../../assets/profile.png'
import Headersocials from './headersocials'

const header = () => {
  return (
    <header>
<div className="container  header__container">
  <h5>HELLO  I am</h5>
<h1>ALIREZANAMJU</h1>
<h5 className="text-light">test for become fullstack Developer </h5>
<Headersocials/>
<CTA />
<div className='me'> 

<img src={PROFILE} alt=""  className='Test'/>

<a href="#contact" className="scroll__down">scroll down</a>

</div>



</div>
    </header>
  )
}

export default header