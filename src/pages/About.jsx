import Pagetop from "../components/pagetop/Pagetop";
import aboutHeadImg from "../assets/img/aboutHead.png";
import {
  Quote,
  Whatwedo,
  Result,
  Team,
  Mailbox,
} from "../components/about/index";

import Container from "../components/Container";

const About = () => {
  return (
    <>
      <Pagetop title="About" breadcrumb="About" imgUrl={aboutHeadImg} />
      <Container>
        <Quote />
        <Whatwedo />
        <Result />
      </Container>
      <Team />
      <Container>
        <Mailbox />
      </Container>
    </>
  );
};

export default About;
