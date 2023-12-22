import React from 'react'

const SkillsBar = (props) => {
  return (
    <div>
        <div style={{width:props.percentage + '%'}}  className='skills-prog-bar'>
            <span className='skill-bar'>{props.skill}</span>
            <span className='percentage-bar'>{props.percentage}</span>
        </div>
    </div>
  )
}

export default SkillsBar