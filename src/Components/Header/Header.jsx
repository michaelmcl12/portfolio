import React from 'react'
import './Header.css'
import Carousel from './Carousel.jsx'
import {TbAwardFilled} from 'react-icons/tb'
import {FaHome} from 'react-icons/fa'
import {FaRunning} from 'react-icons/fa'
import CTA from './CTA.jsx'

const about = () => {
    return (
        <header>
            <section>
                <h2>About Me</h2>

                <div className='container about_container'>
                    <div className="about_me_carousel">
                    <Carousel />
                    </div>

                    <div className="about_content">
                        <div className="about_cards">
                            <article className='about_card'>
                                <TbAwardFilled className='about_icon' />
                                <h5>Experience</h5>
                                <small>2 years</small>
                            </article>

                            <article className='about_card'>
                                <FaHome className='about_icon' />
                                <h5>Where I am from</h5>
                                <small> I am a from a small town in upstate New York </small>
                            </article>

                            <article className='about_card'>
                                <FaRunning className='about_icon' />
                                <h5>Hobbies</h5>
                                <small>My hobbies include running, hiking, and playing video games</small>
                            </article>
                        </div>

                        <p>
                            I am a skilled developer with a passion for creating innovative and efficient solutions. 
                            With the experience I gained throughout my studies I have learned various programming languages and frameworks that excel at turning my ideas into applications. 
                            My goal is to deliver high-quality code and collaborate effectively with teams to meet project goals and exceed expectations.
                        </p>

                        <CTA />
                    </div>
                </div>
            
            </section>    
        </header>
    )
}

export default about