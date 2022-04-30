import React from 'react'
import Header from './components/Header/header';
import NAv from './components/nav/Nav'
import About from './components/About/About'
import Experience from './components/experience/Experience'
import Contect from './components/Contect/contect';
import Footer from './components/footer/Footer'
import Portfolio from './components/portfolio/portfolio'
import Testimonials from './components/testimonials/testimonials'
import Services from './components/services/services'
const App = ()=> {

    return(
        <div> 
<Header/>
<NAv/>
   <About/>
<Experience/>
<Services/>
<Portfolio/>
 <Testimonials/>
<Contect/>
<Footer/>
 
 

 </div>
    
    )
}



export default App


































