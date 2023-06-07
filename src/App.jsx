import React from 'react'

//Import components
import Header from './Components/Header/Header.jsx'
import Nav from './Components/Nav/Nav.jsx'
import About from './Components/About/About.jsx'
import Experience from './Components/Experience/Experience.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Education from './Components/Education/Education.jsx'
import Portfolio from './Components/Portfolio/Portfolio.jsx'
import Work from './Components/Work/Work.jsx'
import Footer from './Components/Footer/Footer.jsx'

const App = () => {
    return (
        <>
         <Header />
         <Nav />
         <About />
         <Education />
         <Work />
         <Portfolio />
         <Experience />
         <Contact />
         <Footer />
        </>
    )
}

export default App;