import React,{useEffect} from 'react'
import '../Css/Section.css'
import worklogo from '../İmg/home_work_logo.png';
import Aos from 'aos';


function Section() {

   useEffect(() => {
      Aos.init();
    }, []);

  return (
    <div>
       <div className='work'>
             <div className='work-l' data-aos="fade-up">
                   <div className='worklogo' data-aos="fade-up">
                      <img src={worklogo} alt="" />
                   </div>
                     <div className='card-img' data-aos="fade-up">                   
                        <img src="https://kota.co.uk/static/b901008105443735e748de547c293de3/4e70a/Image-wogan-43.webp" alt="" />
                   </div>
                   <div className='card-img 'data-aos="fade-up" >
                   <img src="https://kota.co.uk/static/05077cc2cf84c8f3bcbf1c870876165e/16643/featured-square.webp" alt="" />
                   </div>
                   <div className='card-img'data-aos="fade-up" >
                   <img src="https://kota.co.uk/static/179442862ace91d48defedb4c0606dec/16643/featured-portrait.webp" alt="" />
                   </div>
                  
                   
             </div>
             <div className='work-r' data-aos="fade-up">
                <div className='work-title' data-aos="fade-up"><h2>Shit-hot work for hot-shot brands</h2></div>
                <div className='card-img'data-aos="fade-up">
                <img src="https://kota.co.uk/static/867a4758df15b7ecb82d7fb874495f75/16643/featured-square.webp" alt="" />
                </div>
                <div className='card-img'data-aos="fade-up">
                <img src="https://kota.co.uk/static/fefab6cc8dfcb1f77ef9bce5ee94be0b/16643/featured-portrait.webp" alt="" />
                </div>
                <div className='card-img'data-aos="fade-up">
                <img src="https://kota.co.uk/static/3a631bc0d95b48893fb787175d3fa485/16643/featured-square.webp" alt="" />
                </div>
              
                   
             </div>

       </div>






    </div>
  )
}

export default Section