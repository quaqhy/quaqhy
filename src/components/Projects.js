import React from "react";
import PropTypes from "prop-types";
import { Button, Card, CardContent, CardActions, Grid } from "@mui/material";
import Project from "./Project";

Projects.propTypes = {
  projects: PropTypes.array,
};

Projects.defaultProps = {
  projects: [],
};

function Projects(props) {
  const { projects } = { ...props };
  return (
    <section className="projects link-to-nav" id="project">
      <h2 className="title">There are some of my projects</h2>
      <Grid container spacing={2}>
        {projects.map((project, index) => (
          <Project
            url={project.url}
            srcImg={project.srcImg}
            name={project.name}
            index={index}
          />
        ))}
      </Grid>

      <a
        href="#"
        className="show-all"
        onClick={(e) => {
          // console.log("hi");
          e.preventDefault();
        }}
      >
        <span>Show All</span>
        <i className="bx bx-chevron-right"></i>
      </a>
    </section>
  );
}

Projects.propTypes = {};

export default Projects;
