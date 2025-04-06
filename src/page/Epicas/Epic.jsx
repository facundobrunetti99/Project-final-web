import React from 'react'
import "../Epicas/Epic.css"
import { useParams } from 'react-router-dom';
const epicsData = {
  1: ["Epic 1.1", "Epic 1.2"],
  2: ["Epic 2.1"],
  3: ["Epic 3.1", "Epic 3.2", "Epic 3.3"],
  
};



const Epic = () => {
  const { projectId } = useParams();
  const epics = epicsData[projectId] || [];

  return (
    <div>
      <h2>Épicas del Proyecto {projectId}</h2>
      <ul>
        {epics.map((epic, index) => (
          <li key={index}>{epic} </li>
        ))}
      </ul>
    </div>
  );
};

export default Epic;