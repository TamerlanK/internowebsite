import Pagetop from "../components/pagetop/Pagetop";
import Container from "../components/Container";
import banner from "../assets/img/contactBanner.png";
import Contactform from "../components/contact/contactform/Contactform";
import Map from "../components/contact/map/Map";

const Contact = () => {
  return (
    <>
      <Pagetop title="Contact Us" breadcrumb="Contact" imgUrl={banner} />
      <Container>
        <Contactform />
        <Map />
      </Container>
    </>
  );
};

export default Contact;
