import { FaHtml5, FaCss3Alt, FaReact, FaPython } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import React from 'react';
const PData = [
    {
        ImgSrc: require('./Images/Project/1.png'),
        Title: 'TechnoForum',
        Description: 'This Project is a Complete Website for College Students to get all the Updates related to Jobs, Internships and Future Events in One Place.',
        GithubLink: 'https://github.com/BIAStechnoforum/technoforumweb.git',
        ProjectLink: 'https://techno.birlainstitute.co.in/',
    },
    {
        ImgSrc: require('./Images/Project/2.png'),
        Title: 'MedCharge',
        Description: 'This Project is a Basic Homepage for an Online Medicine Store. ',
        GithubLink: 'https://github.com/abhinavginti/MedCharge2.0.git',
        ProjectLink: 'https://abhinavginti.github.io/MedCharge2.0/'
    },
    {
        ImgSrc: require('./Images/Project/3.png'),
        Title: 'Lycan Hunt Game',
        Description: 'This Project is Inspired by the Popular Chrome Dinosaur Game. Some Changes are Made.',
        GithubLink: 'https://github.com/abhinavginti/LycanHunt-Game.git',
        ProjectLink: 'https://abhinavginti.github.io/LycanHunt-Game/'
    }
]
const SData = [
    {
        LogoSrc: <FaHtml5 />,
        Max: 'HTML5',
        Value: '70%',
    },
    {
        LogoSrc: <FaCss3Alt />,
        Max: 'CSS3',
        Value: '75%'
    },
    {
        LogoSrc: <IoLogoJavascript />,
        Max: 'JS',
        Value: '50%'
    },
    {
        LogoSrc: <FaReact />,
        Max: 'React',
        Value: '50%'
    },
    {
        LogoSrc: <FaPython />,
        Max: 'Python',
        Value: '40%'
    }
]
export default PData;
export { SData };