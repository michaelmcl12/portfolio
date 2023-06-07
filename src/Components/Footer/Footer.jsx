import React from 'react'
import './Footer.css'
import {AiFillInstagram} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'


const Footer = () => {
    return (
        <footer id='footer'>
            <a href='#' className='footer_logo'>Michael McLaughlin</a>

            <ul className='footer_section'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#education'>Education</a></li>
                <li><a href='#work'>Work</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#experience'>Experience</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
            <div className='footer_links'>
                <a href='https://www.instagram.com/'><AiFillInstagram/></a>
                <a href='https://twitter.com/'><BsTwitter/></a>
            </div>

            <div className="footer_copyright">
                <small>&copy; Michael McLaughlin</small>
            </div>
        </footer>
    )
}

export default Footer