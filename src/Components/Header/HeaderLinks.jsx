import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderLinks = () => {
  return (
    <div className='header_links'>
        <a href='https://linkedin.com' target='_blank'><BsLinkedin /></a>
        <a href='https://github.com' target='_blank'><BsGithub /></a>
    </div>
  )
}

export default HeaderLinks