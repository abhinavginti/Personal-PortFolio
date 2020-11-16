import React from 'react';
import {Link} from 'react-scroll';
function Navbar()
{
    window.addEventListener("scroll",()=>{
        let navbar= document.querySelector('header');
        navbar.classList.toggle("sticky",window.scrollY>0);
    })
    return(
        <>
            <header className='navbar' id='nav'>
                <div className='left-nav'>
                    <p>Portfo<span>lio</span></p>
                </div>
                <div className='right-nav'>
                    <Link to='main' smooth={true} duration={1500}  >Home</Link>
                    <Link to='p-sec' smooth={true} duration={1500}>Projects</Link>
                    <Link to='s-section' smooth={true} duration={1500}>Skills</Link>
                    <Link >Contact</Link>
                </div>
            </header>
        </>
    )
}
export default Navbar