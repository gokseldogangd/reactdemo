import React from 'react'
import '../Css/footer.css'
import images1 from '../İmg/dan_grey.png';
import images2 from '../İmg/the-drum-logo.png';
import images3 from '../İmg/Clutch_grey.png';
import images4 from '../İmg/awward_grey.png';
import images5 from '../İmg/css-design-awards.png';
import {AiOutlineInstagram ,AiFillTwitterCircle ,AiFillFacebook,AiFillLinkedin} from "react-icons/ai";



function Footer() {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='footer-nav'>
             <div className='ft-nav'>
                <ul>
                  <li>Home</li>
                  <li>Work</li>
                  <li>Services </li>
                  <li>Agency </li>
                  <li>Blog </li>
                  <li> Contact</li>
                  <li>FAQs</li>
                  <li>Privacy Policy</li>

                </ul>
             </div>
             <div className='ft-ex'>
                <ul>
                  <li className='ft-t'>EXPERTS IN</li>
                  <li>Hospitality</li>
                  <li>Property and Architecture</li>
                  <li>Film and Television</li>
                  <li>Business to Business</li>
                </ul>
             </div>
             <div className='ft-of'>
               <ul>
                <li className='ft-t'>OFFICES</li>
                <li>London</li>
                <li>New York</li>
               </ul>
             </div>
             <div className='follow'>
                <div className='follow-t'>
                     <h2>FOLLOW</h2>
                </div>
               <div className='social'>
                 <AiFillTwitterCircle/>
                  <AiOutlineInstagram/>  
                  <AiFillFacebook/>
                  <AiFillLinkedin/>
               </div>
               <div>
                 <ul>
                  <li>Sign up to our newsletter</li>
                 </ul>
               </div>
               <div className='mail'>
                  <ul>
                    <li>hello@kota.co.uk</li>
                  </ul>
               </div>
             </div>
        </div>
       <div className='ft-pc'>
         <div className="pictures-ft">
          <img src={images1} alt="" />
          <img src={images2} alt="" />
          <img src={images3} alt="" />
          <img src={images4} alt="" />
          <img src={images5} alt="" />
       </div></div> 
       
      </div>



    </div>
    
  )
}

export default Footer