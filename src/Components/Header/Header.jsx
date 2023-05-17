import React from 'react'
import './Header.css'
import CTA from './CTA'
import Headshot from '../../Assets/headshot.jpg'
import HeaderLinks from './HeaderLinks'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I am</h5>
        <h1>Michael McLaughlin</h1>
        <h5 className="text-light">Student</h5>

        <CTA />
        <HeaderLinks />

        <div className='headshot'>
          <img src={Headshot} alt="headshot" />
        </div>

        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header