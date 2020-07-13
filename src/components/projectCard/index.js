import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="content">
        <ul>
          <li>
            <strong><a href={props.github}>{props.name}</a></strong>
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
          <li>
            <strong>Deploy:</strong> <a href={props.deploy}>{props.deploy}</a>
          </li>
        </ul>
      </div>
      {/*
      <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span>*/}
    </div>
  );
}

export default ProjectCard;
