import React from "react";
import Pagetop from "../components/pagetop/Pagetop";
import Container from "../components/Container";
import banner from "../assets/img/projectDetailsBanner.png";
import { useParams } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import ProjectInfo from "../components/projectdetails/projectInfo/projectInfo";
import ProjectImage from "../components/projectdetails/projectImage/projectImage";

const ProjectDetails = () => {
  const { id } = useParams();
  const projectId = parseInt(id, 10);
  const { title, image, category } = projectsData.find(
    (item) => item.id === projectId
  );
  return (
    <>
      <Pagetop imgUrl={banner} title={title} breadcrumb={title} />
      <Container>
        <ProjectInfo title={title} category={category} />
        <ProjectImage image={image}/>
      </Container>
    </>
  );
};

export default ProjectDetails;
