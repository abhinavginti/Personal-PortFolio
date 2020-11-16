import React from 'react';
import Logo from './0.jfif'
import VidBack from './Videos/video.mp4';
import AOS from 'aos';
import 'aos/dist/aos.css';
function MainPage()
{
    AOS.init({duration:2000})
    return(
        <>
            <section className='main' id='main'>
            <div className='vidback'>
                <video autoPlay loop muted src={VidBack} type='video/mp4'/>
            </div>
            <div className='left-info'  data-aos='fade-up' data-aos-delay="200" data-aos-duration='5000'  data-aos-easing="ease-in-out">
                <p>Hello, My Name is</p>
                <p>Abhinav Ginti</p>
                <p>And i'm a <span data-text='Web Developer'>Web Developer</span></p>
            </div>
            <div className='right-info'  data-aos='zoom-in' data-aos-delay="200" data-aos-duration='5000' data-aos-easing="ease-in-out">
                <img src={Logo} alt='Abhinav Ginti'/>
            </div>
            </section>
        </>
    )
}
export default MainPage