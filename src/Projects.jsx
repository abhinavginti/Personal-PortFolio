import React from 'react';
import PData from './PData';
import ProjectCards from './ProjectCards';
import Particles from 'react-particles-js';
function Projects() {
    return (
        <>
            <div className='project-section' id='p-sec'>
                <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": 50,
                                "density": {
                                    "enable": true,
                                    "value_area": 800
                                }
                            },
                            "color": {
                                "value": "#000000"
                            },
                            "shape": {
                                "type": "circle",
                                "stroke": {
                                    "width": 0,
                                    "color": "#000000"
                                },
                                "polygon": {
                                    "nb_sides": 5
                                },
                                "image": {
                                    "src": "img/github.svg",
                                    "width": 10,
                                    "height": 10
                                }
                            },
                            "opacity": {
                                "value": 0.1,
                                "random": false,
                                "anim": {
                                    "enable": false,
                                    "speed": 1,
                                    "opacity_min": 0.1,
                                    "sync": false
                                }
                            },
                            "size": {
                                "value": 10,
                                "random": true,
                                "anim": {
                                    "enable": false,
                                    "speed": 80,
                                    "size_min": 0.1,
                                    "sync": false
                                }
                            },
                            "line_linked": {
                                "enable": true,
                                "distance": 200,
                                "color": "#000000",
                                "opacity": 0.2,
                                "width": 2
                            },
                            "move": {
                                "enable": true,
                                "speed": 8,
                                "direction": "none",
                                "random": false,
                                "straight": false,
                                "out_mode": "out",
                                "bounce": false,
                                "attract": {
                                    "enable": false,
                                    "rotateX": 600,
                                    "rotateY": 1200
                                }
                            }
                        },
                        "interactivity": {
                            "detect_on": "canvas",
                            "events": {
                                "onhover": {
                                    "enable": false,
                                    "mode": "repulse"
                                },
                                "onclick": {
                                    "enable": false,
                                    "mode": "push"
                                },
                                "resize": true
                            },
                            "modes": {
                                "grab": {
                                    "distance": 800,
                                    "line_linked": {
                                        "opacity": 1
                                    }
                                },
                                "bubble": {
                                    "distance": 800,
                                    "size": 80,
                                    "duration": 2,
                                    "opacity": 0.8,
                                    "speed": 3
                                },
                                "repulse": {
                                    "distance": 80,
                                    "duration": 0.4
                                },
                                "push": {
                                    "particles_nb": 4
                                },
                                "remove": {
                                    "particles_nb": 2
                                }
                            }
                        },
                        "retina_detect": true
                    }} className='particles' />
                <p className='p-head'>Projects</p>
                <div className='cards'>
                    {PData.map((val) => (<ProjectCards
                        Key={val.Key}
                        ImgSrc={val.ImgSrc}
                        Title={val.Title}
                        Description={val.Description}
                        GithubLink={val.GithubLink}
                        ProjectLink={val.ProjectLink}
                    />))}
                </div>
            </div>
        </>
    )
}
export default Projects