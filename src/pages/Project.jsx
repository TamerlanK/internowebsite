import React from "react";
import Container from "../components/Container";
import Pagetop from "../components/pagetop/Pagetop";
import banner from "../assets/img/projectBanner.png";
import Filter from "../components/ourproject/filter/Filter";
import ProjectsList from "../components/ourproject/projectslist/ProjectsList";

const Project = () => {
  return (
    <>
      <Pagetop breadcrumb="Project" title="Our Project" imgUrl={banner} />
      <Container>
        <Filter />
        <ProjectsList />
      </Container>
    </>
  );
};

export default Project;
