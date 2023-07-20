import React from 'react'
import '../Css/header.css';
import images1 from '../İmg/dan_grey.png';
import images2 from '../İmg/the-drum-logo.png';
import images3 from '../İmg/Clutch_grey.png';
import images4 from '../İmg/awward_grey.png';
import images5 from '../İmg/css-design-awards.png';
import { Helmet } from 'react-helmet'
import { HelmetProvider } from 'react-helmet-async';


function Header() {
  return (
   
    <div className='header container'>
   
    <div className='picture' >
       <div className="pictures">
          <img src={images1} alt="" />
          <img src={images2} alt="" />
          <img src={images3} alt="" />
          <img src={images4} alt="" />
          <img src={images5} alt="" />
       </div>
    </div>
    <div className="title-header"  >
      <h1>Rebel against boring</h1>
      <h2>
      <p>We’re a creative web design agency based in London that crafts beautiful and original websites for brands who <strong>refuse to blend in.</strong></p></h2>
    </div>
    <HelmetProvider>
      <Helmet defer={true}>
      <script src='/js/bg.js' async></script>
      </Helmet>

    </HelmetProvider>
  
      </div> 
      
     
     
 
  )
}

export default Header