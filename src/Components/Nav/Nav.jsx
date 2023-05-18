import React from 'react'
import './Nav.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUser} from 'react-icons/fa'
import {FaBook} from 'react-icons/fa'
import {MdSchool} from 'react-icons/md'
import {TbMessageCircle2Filled} from 'react-icons/tb'


const Nav = () => {
  return (
    <nav>
      <a href='#'><AiFillHome /></a>
      <a href='#about'><FaUser /></a>
      <a href='#education'>< MdSchool/></a>
      <a href='#experience'><FaBook /></a>
      <a href='#contact'><TbMessageCircle2Filled /></a>
    </nav>
  )
}

export default Nav