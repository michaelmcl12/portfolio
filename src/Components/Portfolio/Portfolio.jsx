import React from 'react'
import './Portfolio.css'
import IMG1 from '../../Assets/portfoliio.jpg'
import {BsGithub} from 'react-icons/bs'

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>Recent Projects</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio_container">
                <article className='portfolio_card'>
                    <h3>Portfolio Project</h3>
                    <div className='portfolio_card_image'>
                        <img src={IMG1} alt='portfolio image'></img>
                    </div>

                    <p>smalll descriptions sdjfhsdkjfh ds afhdsi hfishfioasd </p>
                    <div className='icon'><a href='https://github.com' target='_blank'><BsGithub /></a></div>
                </article>
            </div>

        </section>
    )
}

export default Portfolio