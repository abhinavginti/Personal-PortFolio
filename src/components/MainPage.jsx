import React from 'react';
import Logo from './0.jfif'
// import VidBack from './Videos/video.mp4';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { cdnURL } from '../Utils/constants'
function MainPage() {
    AOS.init({ duration: 2000 })
    return (
        <>
            <section className='main' id='main'>
                <div className='vidback'>
                    <video autoPlay loop muted src={cdnURL + 'Videos/video.mp4'} type='video/mp4' />
                </div>
                <div className='d-flex justify-content-between align-items-center flex-column-reverse flex-md-row text-light' style={{ gap: '7rem' }}>
                    <div className='text-center' data-aos='fade-up' data-aos-delay="200" data-aos-duration='5000' data-aos-easing="ease-in-out">
                        <p className='fs-3'>Hello, My Name is</p>
                        <p className='fw-bold display-3 font-goldman'>Abhinav Ginti</p>
                        <p className='fs-2 animation-v1'>and i'm a <span data-text='Web Developer'>Web Developer</span></p>
                    </div>
                    <div className='' data-aos='zoom-in' data-aos-delay="200" data-aos-duration='5000' data-aos-easing="ease-in-out">
                        <img src={Logo} className='img-fluid rounded-circle' alt='Abhinav Ginti' />
                    </div>
                </div>
            </section>
        </>
    )
}
export default MainPage