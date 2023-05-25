import React from 'react'
import './Experience.css'
import  LinearProgress  from  '@mui/material/LinearProgress'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    learning: {
      main: '#ff595e',
    },
    intermediate: {
      main: '#ffca3a',
    },
    proficient: {
      main: '#1982c4',
    },
    expert: {
      main: '#6a4c93',
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
                <h4>Python - Proficient</h4>
                <LinearProgress color='proficient' variant="determinate" value={75} />
              </article>
              
              <article className='exp_details'>
                {/* logo */}
                <h4>C++ - Proficient</h4>
                <LinearProgress color='proficient' variant="determinate" value={75} />
              </article>

              <article className='exp_details'>
                {/* logo */}
                <h4>HTML - Proficient</h4>
                <LinearProgress color='proficient' variant="determinate" value={75} />
              </article>

              <article className='exp_details'>
                {/* logo */}
                <h4>CSS - Proficient</h4>
                <LinearProgress color='proficient' variant="determinate" value={75} />
              </article>

              <article className='exp_details'>
                {/* logo */}
                <h4>Javascript - Intermediate</h4>
                <LinearProgress color='intermediate' variant="determinate" value={50} />
              </article>  

              <article className='exp_details'>
                {/* logo */}
                <h4>Swift - Learning</h4>
                <LinearProgress color='learning' variant="determinate" value={25} />
              </article>       
            </div>
          </div>

          <div className="exp_frameworks">
            <h3>Frameworks and Libraries</h3>
            <div className="exp_content">

              <article className='exp_details'>
                {/* logo */}
                <h4>React</h4>
              </article>

              <article className='exp_details'>
                {/* logo */}
                <h4>Material UI</h4>
              </article>

              <article className='exp_details'>
                {/* logo */}
                <h4>Django</h4>
              </article>

            </div>
          </div>

          <div className="exp_tools">
            <h3>Developer Tools</h3>
            <div className="exp_content">

              <article className='exp_details'>
                {/* logo */}
                <h4>Git</h4>
              </article>

              <article className='exp_details'>
                {/* logo */}
                <h4>Visual studio Code</h4>
              </article>

              <article className='exp_details'>
                {/* logo */}
                <h4>Xcode</h4>
              </article>
            </div>
          </div>

        </div>
      </section>
    </ThemeProvider> 
  )
}

export default Experience