import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "./ProjectList";
import ExitIcon from "@material-ui/icons/ExitToApp";
import "./prodisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt={project.image}/>
      <p>
        <b>Description:</b> {project.skills}
      </p>
      <ExitIcon onClick={() => window.open(project.link)}/>
    </div>
  );
}

export default ProjectDisplay;