import React from 'react';
import { IconContext } from "react-icons";
import AOS from 'aos';
import 'aos/dist/aos.css';
function SkillsProgress(props) {
    AOS.init({ duration: 2000 })
    return (
        <>
            <IconContext.Provider value={{ className: "s-links" }}>
                <div className='skills-card row px-1 mx-1'
                    data-aos="zoom-in"
                    data-aos-duration="1000" data-aos-easing="ease-in-out"
                    data-aos-delay='0'>
                    <span className='col-2 mx-0'>{props.LogoSrc}</span>
                    <span className='col-3 mx-0'>{props.Max}</span>
                    <div className='percent col-5 px-3 mx-0'>
                        <div className='progress' style={{ width: `${props.Value}`, background: `${props.BG}` }}></div>
                    </div>
                    <span className='col-2 mx-0'>{props.Value}</span>
                </div>
            </IconContext.Provider>
        </>
    )
}
export default SkillsProgress