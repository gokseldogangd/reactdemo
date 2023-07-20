import React from 'react'

import Main from '../Companents/Main'
import Pictures from '../Companents/Pictures'
import Services from '../Companents/Services'
import Section from '../Companents/Section'
import HeaderWrapper from '../Companents/HeaderWrapper'
import Article from '../Companents/Article'
import Footer from '../Companents/Footer'


function Home() {
  return (
    <div>
      <HeaderWrapper/>
      <Main/>
      <Pictures/>
      <Services/>
      <Section/>
      <Article/>
      <Footer/>
    </div>
  )
}

export default Home