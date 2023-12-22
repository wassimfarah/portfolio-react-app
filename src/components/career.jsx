import React, { useState } from 'react'

import Education from './education'
import Work from './work'
const Career = () => {

  const [show, setShow] = useState(null)

  const toggleHandler = (name) => {
    switch(name){
      case  "education" :
       if(show!=="education"){
        setShow("education")
       }else{
        setShow(null)
       }
       break

      case "work" :
        if(show!=="work"){
          setShow("work")
         }else{
          setShow(null)
         }
      break

      default : 
         setShow(null)
  }
}
  return (
    <div>
      <hr></hr>
      <h4>Browse my education and work experience below!</h4>

      <button onClick={()=>{toggleHandler("education")}} className="toggleBtns">EDUCATION</button>
      <button onClick={()=>{toggleHandler("work")}} className="toggleBtns">WORK</button>

      {
        
        show === "education" ? 
        <Education /> : 

        show === "work" ?

        <Work />

        : <br/>


      }
    </div>
  )
}

export default Career