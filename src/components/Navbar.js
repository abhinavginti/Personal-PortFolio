import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Offcanvas } from 'react-bootstrap'
import { BiMenuAltRight } from 'react-icons/bi'
function Navbar() {
    window.addEventListener("scroll", () => {
        let navbar = document.querySelector('header');
        navbar.classList.toggle("sticky", window.scrollY > 0);
    })

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <header className='navbar justify-content-between py-2 px-3' id='nav'>
                <div className='left-nav mx-0'>
                    <p className='mb-0'>Portfo<span>lio</span></p>
                </div>
                <div className='right-nav mx-0 d-none d-md-flex'>
                    <Link to='main' smooth={true} duration={1000} >Home</Link>
                    <Link to='p-sec' smooth={true} duration={1000}>Projects</Link>
                    <Link to='s-section' smooth={true} duration={1000}>Skills</Link>
                    <Link >Contact</Link>
                </div>
                <button className='btn pe-0 d-md-none' onClick={handleShow}><BiMenuAltRight className='fs-1 text-light' /></button>
                <Offcanvas className='w-75' placement='end' show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton className='ms-auto' />
                    <Offcanvas.Body className='d-flex flex-column align-items-center fs-1 text-uppercase fw-bold' style={{ gap: '10px' }}>
                        <Link to='main' smooth={true} duration={1000} >Home</Link>
                        <Link to='p-sec' smooth={true} duration={1000}>Projects</Link>
                        <Link to='s-section' smooth={true} duration={1000}>Skills</Link>
                        <Link>Contact</Link>
                    </Offcanvas.Body>
                </Offcanvas>
            </header>
        </>
    )
}
export default Navbar