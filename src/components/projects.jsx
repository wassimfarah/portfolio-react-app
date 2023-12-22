import React, { useState } from 'react';

import Project from './project.jsx';
import ProjectDet from './projectDet.jsx';

import img_test from '../pictures/test-img.png';
import img_test2 from '../pictures/test-img2.png';


const Projects = () => {
  const arr = [
    {
      id: 1,
      title: 'Project 1',
      img: img_test,
    },
    {
      id: 2,
      title: 'Project 2',
      img: img_test2,
    },
   
  ];

  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const toggleProjectDetails = (projectId) => {
    setSelectedProjectId((prevId) => (prevId === projectId ? null : projectId));
  };

  return (
    <div>
      <hr />
      <h5>Browse through a selection of my projects with the buttons below!</h5>
      {arr.map((project) => (
        
        <Project
          key={project.id}
          id={project.id}
          img={project.img}
          toggleProjectDetails={toggleProjectDetails}
          
        />
       
        
      ))}
     
       {
        selectedProjectId != null ? 
        <ProjectDet title={arr[selectedProjectId-1].title} />
        : null
       }
    </div>

 
  );
};

export default Projects;
