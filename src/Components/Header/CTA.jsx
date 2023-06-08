import React from 'react'
import Resume from '../../Assets/Resume.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href='#contact' className='btn btn-primary'>Contact Me!</a>
        <a href={Resume} download className='btn'>Download Resume</a>
    </div>
  )
}

export default CTA