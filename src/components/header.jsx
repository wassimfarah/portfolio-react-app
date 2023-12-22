import React, { useState } from 'react'
import portfImg from '../pictures/example-picture-testing.jpg'
import email_icon from '../icons/email.png'
import github_icon from '../icons/github.png'
import linkedin_icon from '../icons/linkedin.png'
import youtube_icon from '../icons/youtube.png'
import instagram_icon from '../icons/instagram.png'


import Projects from './projects'
import Career from './career'
import Skills from './skills'
import Research from './research'

const Header = () => {
  const [show, setShow]=useState(false)

  const toggleButtons = (name) =>{
   
    switch(name){
      case  "projects" :
       if(show!=="projects"){
        setShow("projects")
       }else{
        setShow(null)
       }
       break

      case "career" :
        if(show!=="career"){
          setShow("career")
         }else{
          setShow(null)
         }
      break
      
      case "skills" :
        if(show!=="skills"){
          setShow("skills")
         }else{
          setShow(null)
         }
      break

      default : 
      if(show!=="research"){
        setShow("research")
       }else{
        setShow(null)
       }
    }
  }
  return (
    <>
        <h1 className='titleName'>Wassim Farah</h1>
        
        <img className='porImg'  src={portfImg} alt='x'/>

        <div className='contact-icons-p'>

          <img className='contact-icon' alt='x' src={email_icon}/>
          <img className='contact-icon' alt='x' src={github_icon}/>
          <img className='contact-icon' alt='x' src={linkedin_icon}/>
          <img className='contact-icon' alt='x' src={youtube_icon}/>
          <img className='contact-icon' alt='x' src={instagram_icon}/>

        </div>
        <hr className='firstHr'></hr>
        
        <div className='intro-p'>
          <div>
          Hi there and thanks for stopping by! My name is Wassim, i'm a passionate programmer who feels enjoyment and fulfillment from the journey of creating experiences.
          </div>
        </div>

        <hr className='secondHr'></hr>
        <div className='toggleBtnsP'>
          <button onClick={()=>toggleButtons("projects")} className='toggleBtns'>PROJECTS</button>
          <button onClick={()=>toggleButtons("career")} className='toggleBtns'>CAREER</button>
          <button onClick={()=>toggleButtons("skills")} className='toggleBtns'>SKILLS</button>
          <button onClick={()=>toggleButtons("research")} className='toggleBtns'>RESEARCH</button>
        </div>

        {
        show==="projects" ? <Projects></Projects> : 
        show==="career" ? <Career></Career> : 
        show==="skills" ? <Skills></Skills>:
        show==="research" ? <Research></Research>
        : <br></br>
        }
    </>
  )
}

export default Header