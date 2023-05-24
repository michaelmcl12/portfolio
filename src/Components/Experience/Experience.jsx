import React from 'react'
import './Experience.css'
import  LinearProgress  from  '@mui/material/LinearProgress'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    learning: {
      main: '#ffbe0b',
    },
    intermediate: {
      main: '#fb5607',
    },
    proficient: {
      main: '#ff006e',
    },
    expert: {
      main: '#8338ec',
    },
  },
});


const Experience = () => {
  return (
    <ThemeProvider theme={theme}>
      <section id='experience'>
        <h5>My Skills</h5>
        <h2>Experience</h2>

        <div className="container exp_container">
          <div className="exp_languages">
            <h3>Programming Languages</h3>
        
            <div className="exp_content">
              <article className='exp_details'>
                <h4>Python</h4>
                <LinearProgress color='proficient' variant="determinate" value={75} />
              </article>
              
              <article className='exp_details'>
                {/* logo */}
                <h4>C++</h4>
                <LinearProgress color='proficient' variant="determinate" value={75} />
              </article>

              <article className='exp_details'>
                {/* logo */}
                <h4>HTML</h4>
                <LinearProgress color='proficient' variant="determinate" value={75} />
              </article>

              <article className='exp_details'>
                {/* logo */}
                <h4>CSS</h4>
                <LinearProgress color='proficient' variant="determinate" value={75} />
              </article>

              <article className='exp_details'>
                {/* logo */}
                <h4>Javascript</h4>
                <LinearProgress color='intermediate' variant="determinate" value={50} />
              </article>      
            </div>
          </div>

          <div className="exp_frameworks">
            <h3>Other Skills</h3>
            <div className="exp_content">
              <article className='exp_details'>
                {/* logo */}
                <h4>React</h4>
                <LinearProgress color='learning' variant="determinate" value={25} />
              </article>

              <article className='exp_details'>
                {/* logo */}
                <h4>Git</h4>
                <LinearProgress color='intermediate' variant="determinate" value={50} />
              </article>

              <article className='exp_details'>
                {/* logo */}
                <h4>Django</h4>
                <LinearProgress color='learning' variant="determinate" value={25} />
              </article>
          </div>
          </div>

        </div>
      </section>
    </ThemeProvider> 
  )
}

export default Experience