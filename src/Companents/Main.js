
import React , { useEffect } from 'react'
import '../Css/main.css'
import videobg from '../video/Animation-v3.mp4';
import Aos from 'aos';


function Main() {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className='main'>
      
    <div className='section'>
     <div className='video-animation' data-aos='fade-down-left'>
       <video src={videobg} autoPlay loop muted  />
     </div>
     <div className='text'>
       <h1>Making brands a damn site better</h1>
       <h2>
         Let’s face it, first impressions matter. Your website’s an
         opportunity to wow your audience, so why waste it with bad design?
         Because brands win new fans when they’re brave enough to go beyond
         their creative comfort zone.
       </h2>
     </div>
   </div>
   <div className='section-text' data-aos='zoom-in'>
     <div className='text-two'>
       <p>
         Our creative digital agency designs and develops bespoke websites
         with <strong>three things in mind;</strong>
       </p>
     </div>
   </div>
     

    </div>
  )
}

export default Main