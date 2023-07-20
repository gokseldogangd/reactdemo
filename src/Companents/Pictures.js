import React, { useEffect } from 'react'
import '../Css/pictures.css'
import images1 from '../İmg/homepage-lovebrands.jpg';
import images2 from '../İmg/homepage-tribepad.jpg';
import images3 from '../İmg/homepage-sym.jpg';
import { gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Pictures() {

  
   
  useEffect(()=> {
   
    let ctx =gsap.context(() => {
      gsap.set(".photo", {opacity:0, scale:0.5})
  
      const animation = gsap.to(".photo", {
        opacity:1, scale:1, duration:0.1 ,stagger:1
    })
    
    ScrollTrigger.create({
      trigger:".gallery",
      start:"top top",
      end:"bottom bottom",
      pin:".right",
      pinSpacing:true,
      animation: animation,
      scrub:true,
     
    
    })
   
  
    })

    return() => ctx.revert();

}, []);


  return (
    <div>
        <div className="gallery">
        <div className="left">
            <div className="detailsWrapper">
                <div className="details">
                    <div className="headline"><h4>Beauty</h4></div>
                    <div className="text">
                       <p>
                         Developing stunning one-of-a-kind digital design that catches people’s eye and brings your brand to life online.
                       </p>
            
                    </div>
                   
                </div>
    
                <div className="details">
                    <div className="headline"><h4>Thought</h4></div>
                    <div className="text">
                    <p>
                      As a web design agency, we love to deliver meaningful and intuitive user experiences that build trust with your target audience.
                      </p>
                    </div>
                  
                </div>
    
                <div className="details">
                    <div className="headline"><h4>Impact</h4></div>
                    <div className="text">
                    <p>
                       Designing tailor-made solutions that resonate with your customers and drive them to act.
                     </p>
                    </div>
                   
                </div>
    
            </div>
        </div>
    
        <div className="right">
            <div className="photos">
              
                <div className="photo ">
                <img src={images1} alt='img-1' />
                </div>
                <div className="photo ">
                <img src={images2} alt='img-2' />
                </div>
                <div className="photo ">
                    <img src={images3} alt='img-3' />
                </div>
                
            </div>
        </div>
    </div>
    
    

    </div>
  )
}

export default Pictures