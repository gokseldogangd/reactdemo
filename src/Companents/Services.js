import React, { useState} from 'react'
import '../Css/services.css'





function Services() {

   const data = [

    {
        id:"development",
        title:"Website Design & Development",
        img: "/img/web-development-4.png",
        text:"Crafting responsive, search engine-friendly websites with instant impact, impressing users and effectively positioning your brand.",

    },
    
    {
        id:"branding",
        title:"Branding",
        img:"/img/branding-wogan-web.png",
        text:"Using strategic thinking to develop your brand positioning and identity, from logo and visuals, to engaging tone of voice.",

    },

    {
        id:"marketing",
        title:"Digital Marketing",
        img:"/img/marketing.png",
        text:"Delivering effective digital strategies & eye-catching online marketing campaigns that earn attention, spark emotion & increase conversions.",

    },

   ];

   const [toggled,setToggled] = useState('development') 

   const handleButtonClick = (e, id) => {
    e.preventDefault(); 
    setToggled(id);
  };
    
   


  return (
    <div>
        <div className='services'>
               <div className="wrapper">
                <div className='services-title'><h4>OUR SERVICES</h4></div>
                   {
                    data.map(({title ,id})=> {

                        return(
                            <button
                key={id}
                className={`button ${toggled === id ? 'focus' : ''}`}
                onClick={(e) => handleButtonClick(e, id)}
              >{title}
                                </button>
                        )
                    }) 
                   }
                   <div><button className='btn'>VIEW ALL SERVICES</button></div>
               </div>
           <div className='rightpage'>
          {
                 data.map(({img ,text,id})=> {
                    
                    return(
                            <>
                            {toggled === id ? (
                                <div className="toggleContent">
                             
                                <div className="content">
                                   <img src={img} alt="" className='images'/>
                                   <p className="text">{text} </p>
                                </div>

                           </div>
                            ): null }
                             
                            
                            </>

                    )
                 })
               }

          </div>
              
        </div>



    </div>
  )
}

export default Services