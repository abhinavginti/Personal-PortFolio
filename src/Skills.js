import React from 'react'
import { SData } from './PData';
import SkillsProgress from './SkillsProgress';
function Skills() {
    return (<>
        <div className='s-section'>
            <p className='p-head'>Skills</p>
            <div className='skills'>
                {SData.map((val) => (
                    <SkillsProgress
                        LogoSrc={val.LogoSrc}
                        Max={`${val.Max}`}
                        Value={`${val.Value}`}/>
                ))}
            </div>
        </div>
    </>
    )
}
export default Skills