import React from 'react'
import './Work.css'
import WorkTimeline from './WorkTimeLine'

const Work = () => {
  return (
    <section id='work'>
      <h5>Where I worked</h5>
      <h2>Work Experience</h2>

      <div className='container timeline_container'>
        <WorkTimeline />
      </div>

    </section>
  )
}

export default Work