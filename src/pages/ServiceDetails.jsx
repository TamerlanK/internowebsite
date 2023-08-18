import React from "react";
import { useParams } from "react-router-dom";
import { servicesListData } from "../components/services/servicesList/servicesList";
import Container from "../components/Container";
import Pagetop from "../components/pagetop/Pagetop";
import banner from "../assets/img/serviceSingleBanner.png";
import { Clients, Counter } from "../components/home";
import {
  Details,
  Video,
  Points,
  Result,
} from "../components/singleservice/index";

const ServiceDetails = () => {
  const { id } = useParams();
  const serviceId = parseInt(id, 10);
  const { title, description } = servicesListData.find(
    (item) => item.id === serviceId
  );
  return (
    <>
      <Pagetop title={title} breadcrumb={title} imgUrl={banner} />
      <Container>
        <Details title={title} desc={description} />
        <Clients />
        <Video />
        <Points />
        <Result />
      </Container>
      <Counter />
    </>
  );
};

export default ServiceDetails;
