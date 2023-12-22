import React from 'react';

const Project = (props) => {
  const { id, title, img, showDet, toggleProjectDetails } = props;

  const toggleDetailsHandler = () => {
    toggleProjectDetails(id);
   // console.log(id)
  };

  return (
    <span>
      <img className='img-proj' onClick={toggleDetailsHandler} alt={title} src={img} />
    
    </span>
  );
};

export default Project;
