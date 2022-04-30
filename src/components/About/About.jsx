import React from 'react'
import './About.css'
import Images from './../../assets/images.png'
import{AiOutlineExperiment} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineProject} from 'react-icons/ai'
function About() {
  return (
    <section id='about'> 
    <h5>GET TO KHOW</h5>
    <h2>ABOUT ME</h2>
    
  <div className="container about__container">

<div className="about__me">

<div className="about__me-image">
<img src={Images} alt="About Image" />
</div>
</div>
<div className="about__content">
  <div className="about__cards">
    
    <article className='about__card'>
    <AiOutlineExperiment className='about__card'/>
<h5>Experience</h5>
<small> 1+ Years Working </small>
</article>

<article className='about__card'>
    <AiOutlineUser className='about__card'/>
<h5>Client </h5>
<small> 1+ World wide </small>
</article>
    
    <article className='about__card'>
    <AiOutlineProject className='about__card'/>
<h5>Project</h5>
<small> First Project  </small>
</article> 
</div>


<a href="contact" className='btn  btn-primary'> Lets talk</a>

</div>

  </div>    
    </section>
    )
}

export default About