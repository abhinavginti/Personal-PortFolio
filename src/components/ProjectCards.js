import React from 'react';
import { BsLink } from "react-icons/bs";
import { FaGithub } from 'react-icons/fa';
import { IconContext } from "react-icons";
import AOS from 'aos';
import 'aos/dist/aos.css';
function ProjectCards(props) {
    AOS.init({ duration: 2000 })
    return (
        <>

            <div className='card mx-auto mx-md-5 my-3'
                data-aos="fade-up"
                data-aos-duration="2000" data-aos-easing="ease-in-out"
                data-aos-delay='50'>
                <img src={props.ImgSrc} alt='Abhinav Ginti' className='img-fluid rounded-3' />
                <div className='card-info'>
                    <p>{props.Title}</p>
                    <p>{props.Description}</p>
                    <IconContext.Provider value={{ className: "links" }}>
                        <div className='project-links'>
                            <a href={props.GithubLink} target="_blank"><FaGithub /></a>
                            <a href={props.ProjectLink} target="_blank"><BsLink /></a>
                        </div>
                    </IconContext.Provider>
                </div>
            </div>

        </>
    )
}
export default ProjectCards