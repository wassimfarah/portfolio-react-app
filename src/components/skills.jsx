import React from 'react'
import SkillsBar from './skillsBar'
import { progLang, tools, framew_engine, libraries,langs } from '../data/data.js'
const Skills = () => {
 
  return (
    <div>
      <h3>Programming Languages</h3>
      {
        progLang.map(item =>(
          <SkillsBar skill={item.skill} percentage={item.percentage} />
        ))
      }
      <hr></hr>

      <h3>Tools</h3>
      {
        tools.map(item =>(
          <SkillsBar skill={item.skill} percentage={item.percentage} />
        ))
      }

      <hr></hr>

      <h3>Frameworks & Engines</h3>
      {
        framew_engine.map(item =>(
          <SkillsBar skill={item.skill} percentage={item.percentage} />
        ))
      }

       <hr></hr>

      <h3>Frameworks & Engines</h3>
      {
        framew_engine.map(item =>(
          <SkillsBar skill={item.skill} percentage={item.percentage} />
        ))
      }

      <hr></hr>
      <h3>Libraries</h3>
      {
        libraries.map(item =>(
          <SkillsBar skill={item.skill} percentage={item.percentage} />
        ))
      }

      <hr></hr>
      <h3>Spoken Languages</h3>
      {
        langs.map(item =>(
          <SkillsBar skill={item.skill} percentage={item.percentage} />
        ))
      }
    </div>
  )
}

export default Skills