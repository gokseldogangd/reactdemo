import React from 'react'

import Main from '../Companents/Main'
import Pictures from '../Companents/Pictures'
import Services from '../Companents/Services'
import Section from '../Companents/Section'
import HeaderWrapper from '../Companents/HeaderWrapper'


function Home() {
  return (
    <div>
      <HeaderWrapper/>
      <Main/>
      <Pictures/>
      <Services/>
      <Section/>
    </div>
  )
}

export default Home