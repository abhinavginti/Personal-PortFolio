import React from 'react';
import Navbar from './Navbar';
import MainPage from './MainPage';
import Footer from './Footer';
import Projects from './Projects';
import Skills from './Skills'
function App()
{
    return(
        <>
            <Navbar/>
            <MainPage/>
            <Projects/>
            <Skills/>
            <Footer/>
        </>
    )
}
export default App