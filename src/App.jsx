import React from 'react';

//Import components
import Header from './Components/Header/Header.jsx';
import Nav from './Components/Nav/Nav.jsx';
import About from './Components/About/About.jsx';
import Experience from './Components/Experience/Experience.jsx';
import Contact from './Components/Contact/Contact.jsx';


const App = () => {
    return (
        <>
         <Header />
         <Nav />
         <About />
         <Experience />
         <Contact />
        </>
    )
}

export default App;