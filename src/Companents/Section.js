import React from 'react'
import '../Css/Section.css'
import worklogo from '../İmg/home_work_logo.png';

function Section() {
  return (
    <div>
       <div className='work'>
             <div className='work-l'>
                   <div className='worklogo'>
                      <img src={worklogo} alt="" />
                   </div>
                   <div>
                     <img src="https://kota.co.uk/static/b901008105443735e748de547c293de3/4e70a/Image-wogan-43.webp" alt="" />
                   </div>
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
                   
             </div>
             <div className='work-r'>
                <div className='work-title'><h2>Shit-hot work for hot-shot brands</h2></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                   
             </div>

       </div>






    </div>
  )
}

export default Section