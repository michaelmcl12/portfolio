import React from 'react'
import './Education.css'

const Education = () => {
  return (
      <section id='education'>
        <h5>Where I studied</h5>
        <h2>Education</h2>

        <div className="container edu_container">
          <div className='school_container'>
            <h3>SUNY Oneonta</h3>
            <p>Expected graduation December 2023</p>
            <p>Located in Oneonta, New York</p>
            <p>Bachelors in Computer Science</p>
            <p>Current GPA: 4.0</p>
          </div>

          <div className='school_container'>
            <h3>SUNY Morrsiville</h3>
            <p>Graduated May 2018</p>
            <p>Located in Morrsiville, New York</p>
            <p>AAS in Business Administration	</p>
            <p>GPA: 3.8</p>
          </div>
        
        
        </div>

      </section>
  )
}

export default Education