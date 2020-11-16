import React from 'react';
import { IconContext } from "react-icons";
import AOS from 'aos';
import 'aos/dist/aos.css';
function SkillsProgress(props) {
    AOS.init({ duration: 2000 })
    return (
        <>
            <IconContext.Provider value={{ className: "s-links" }}>
                <div className='skills-card'
                    data-aos="zoom-in"
                    data-aos-duration="1000" data-aos-easing="ease-in-out"
                    data-aos-delay='0'>
                    <span className='logo'>{props.LogoSrc}</span>
                    <span className='name'>{props.Max}</span>
                    <div className='percent'>
                        <div className='progress' style={{ width: `${props.Value}`, background: `${props.BG}` }}></div>
                    </div>
                    <span className='value'>{props.Value}</span>
                </div>
            </IconContext.Provider>
        </>
    )
}
export default SkillsProgress