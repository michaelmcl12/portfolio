import React from 'react'
import './Nav.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUser} from 'react-icons/fa'
import {FaBook} from 'react-icons/fa'
import {MdSchool} from 'react-icons/md'
import {TbMessageCircle2Filled} from 'react-icons/tb'
import {useState} from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href='#' onClick = {() => setActiveNav('#')} className= {activeNav === '#' ? 'active' : ''} ><AiFillHome /></a>
      <a href='#about' onClick = {() => setActiveNav('#about')} className= {activeNav === '#about' ? 'active' : ''}><FaUser /></a>
      <a href='#education' onClick = {() => setActiveNav('#education')} className= {activeNav === '#education' ? 'active' : ''}>< MdSchool/></a>
      <a href='#experience' onClick = {() => setActiveNav('#experience')} className= {activeNav === '#experience' ? 'active' : ''}><FaBook /></a>
      <a href='#contact' onClick = {() => setActiveNav('#contact')} className= {activeNav === '#contact' ? 'active' : ''}><TbMessageCircle2Filled /></a>
    </nav>
  )
}

export default Nav