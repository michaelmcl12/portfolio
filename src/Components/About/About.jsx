import React from 'react'
import './About.css'
import Headshot from '../../Assets/headshot.jpg'
import {TbAwardFilled} from 'react-icons/tb'

const about = () => {
    return (
        <section id='about'>
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className='container about_container'>
                <div className="about_me">
                    <div className="about_me_image">
                        <img src={Headshot} alt='headshot' />
                    </div>
                </div>

                <div className="about_content">
                    <div className="about_cards">
                        <article className='about_card'>
                            <TbAwardFilled className='about_icon' />
                            <h5>Experience</h5>
                            <small>3 years </small>
                        </article>

                        <article className='about_card'>
                            <TbAwardFilled className='about_icon' />
                            <h5>clients</h5>
                            <small> a lot </small>
                        </article>

                        <article className='about_card'>
                            <TbAwardFilled className='about_icon' />
                            <h5>projects </h5>
                            <small>55</small>
                        </article>
                    </div>

                    <p>
                        asdfodsjf
                    </p>

                    <a href='#contact' className='btn btn-primary'>Contact Me!</a>

                </div>
            </div>
            
        </section>
    )
}

export default about