import React from 'react';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Skills from './components/Skills'
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