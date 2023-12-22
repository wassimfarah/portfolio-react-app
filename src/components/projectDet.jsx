import React from 'react';

const ProjectDet = (props) => {
  const { id, title, img } = props;

  

  return (
    <span>
      
        <div>
          <hr />
          <h4>{title}</h4>
        </div>
     
    </span>
  );
};

export default ProjectDet;
