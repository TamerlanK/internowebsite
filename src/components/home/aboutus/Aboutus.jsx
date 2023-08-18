import Container from "../../Container"
import Button from "../../button/Button"
import callIcon from "../../../assets/svg/Call.svg"
import homeAboutUsImg from "../../../assets/img/homeAboutUs.png"
import "./aboutus.css"

const Aboutus = () => {
  return (
    <Container>
      <div className="home__about-us">
        <div className="home__about-us__content">
          <h2 className="home__about-us__content__title">
            We Create The Art <br /> Of Stylish Living <br /> Stylishly
          </h2>
          <p className="home__about-us__content__description">
            It is a long established fact that a reader will be distracted by
            the of readable content of a page when lookings at its layouts the
            points of using that it has a more-or-less normal.
          </p>
          <div className="home__about-us__content__call">
            <img src={callIcon} alt="call" />
            <div>
              <h4>012345678</h4>
              <p>Call Us Anytime</p>
            </div>
          </div>
          <Button text="Get Free Estimate" />
        </div>
        <div className="home__about-us__image">
          <img src={homeAboutUsImg} alt="" />
        </div>
      </div>
    </Container>
  )
}

export default Aboutus
