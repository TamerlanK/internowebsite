import Pagetop from "../components/pagetop/Pagetop";
import Container from "../components/Container";
import ServicesList from "../components/services/servicesList/servicesList";
import Howwework from "../components/services/howwework/Howwework";
import Contact from "../components/home/contact/Contact";
import banner from "../assets/img/servicesBanner.png";

const Services = () => {
  return (
    <>
      <Pagetop title="Services" breadcrumb="Services" imgUrl={banner} />
      <Container>
        <ServicesList />
        <Howwework />
        <Contact />
      </Container>
    </>
  );
};

export default Services;
