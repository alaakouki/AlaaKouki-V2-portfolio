import React from "react";

const styles ={

  titleStyle: {
    color: "black",
    margin: "5px",
  },
};

function Projects (props) {
    return (
        <div  className="accordionItem">
        <h5 style={styles.titleStyle}>{props.title}</h5>
        <a href={props.deployedLink} target="_blank" rel="noopener noreferrer">
          <img src={props.projectImage} className="card-img-top" alt={props.imgAlt} />
        </a>
        <div>
          <a
            href={props.deployedLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-deployed"
          >
            Deployed Link
          </a>
          <a
            href={props.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-repo"
          >
            GitHub Repo.
          </a>
        </div>
      </div>
    );
}

export default Projects;