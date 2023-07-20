import React,{useEffect} from 'react'
import '../Css/article.css'
import Aos from 'aos'
function Article() {
   
    useEffect(() => {
        Aos.init();
      }, []);

  return (
    <div>
      <div className='article'>
           <div className='article-title'>
              <h2>Latest Articles</h2>
           </div>
           <div className='blogs'>
              <div className='blog'>
                 <div className='blog-img'>
                    <img src="https://kota.co.uk/static/d1bffbc671b7c0931c60fe7b5801fdc2/d3cba/websites.webp" alt="" />
                 </div>
                 <div className='blog-title'>
                      <h2>10 signs you probably need a new website.</h2>
                 </div>
              </div>
              <div className='blog'>
                <div className='blog-img'>
                    <img src="https://kota.co.uk/static/f33345c4495fb33358ffaa94a076270b/d3cba/elena-koycheva-VmcIMhuWCac-unsplash-e1614091866749.webp" alt="" />
                </div>
                <div className='blog-title'>
                   <h2>How long does it take to design and build a website?</h2>
                </div>
              </div>
              <div className='blog'>
                <div className='blog-img'>
                    <img src="https://kota.co.uk/static/72ffe0f761ebafabe20183115e609cb0/d3cba/blog-header-template.webp" alt="" />
                </div>
                <div className='blog-title'>
                    <h2>7 must-have features for E-commerce websites.</h2>
                </div>
              </div>
           </div>
           <div className='center'><button className='btn-primary'>VIEW ALL BLOG POST</button></div>
      </div>
         
    </div>
  )
}

export default Article