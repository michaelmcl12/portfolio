import React from 'react'
import './Portfolio.css'
import IMG1 from '../../Assets/portfoliio.jpg'
import IMG2 from '../../Assets/portfoliio.jpg'
import {BsGithub} from 'react-icons/bs'

const portfolio_data = [
    {
        id: 1,
        image: IMG1,
        title: 'Personal Website',
        github: 'https://github.com/michaelmcl12/portfolio',
        description: 'This project was created as my personal site to showcase my work experience and education. It was also created to learn react and gain a better understanding of Javascript.'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Test site',
        github: 'fsd',
        description: 'This is a placeholder'
    }
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>Recent Projects</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio_container">
                {
                    portfolio_data.map(({id,image, title, github, description}) => {
                        return(
                            <article key= {id} className='portfolio_card'>
                            <h3>{title}</h3>
                            <div className='portfolio_card_image'>
                                <img src={image} alt={title}></img>
                            </div>
        
                            <p>{description}</p>
                            <div className='icon'><a href={github} target='_blank'><BsGithub /></a></div>
                        </article>
                        ) 
                    })
                }
            </div>

        </section>
    )
}

export default Portfolio