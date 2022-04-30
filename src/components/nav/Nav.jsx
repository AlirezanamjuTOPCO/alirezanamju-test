import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {MdMiscellaneousServices} from 'react-icons/md'
import {AiOutlineContacts} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
const [Activenav, setActivenav] = useState('#')
  return (

<nav>

<a href="#"  onClick={()=> {setActivenav('#')}}  className={Activenav === '#' ? 'active' : ''}> <AiOutlineHome/></a>
<a href=" #about" onClick={()=> {setActivenav('#about')}}  className={Activenav === '#about' ? 'active' : ''}>  <AiOutlineUser/>  </a>
<a href="#experience" onClick={()=> {setActivenav('#experience')}}  className={Activenav === '#experience' ? 'active' : ''}> <BiBookAlt/></a>
<a href="#services"  onClick={()=> {setActivenav('#services')}}  className={Activenav === '#services' ? 'active' : ''}> <MdMiscellaneousServices/></a>
<a href="#contect"  onClick={()=> {setActivenav('#contect')}}  className={Activenav === '#contect' ? 'active' : ''}> <AiOutlineContacts/></a>
</nav>


  )
}

export default Nav






































