import "./hero.css";
import Button from "../../button/Button";

const Hero = () => {
  return (
    <section className="home-hero-section">
      <div className="home-hero-inner">
        <h1>
          Let Your Home <br /> Be Unique
        </h1>
        <p>
          There are many variations of the passages of lorem Ipsum <br />
          from available,variations of the passages.
        </p>
        <Button text="Get Started" to="./pricing" />
      </div>
    </section>
  );
};

export default Hero;

{
  /* <section className="hero">
      <img src={heroBg} alt="hero" />
      <div className="hero-inner">
        <h1>Let Your Home Be Unique</h1>
        <p>
          There are many variations of the passages of lorem Ipsum
          fromavailable,variations of the passages.
        </p>
        <button>
          Get Started{" "}
          <span>
            <img src={rightArrow} alt="arrow" />
          </span>
        </button>
      </div>
    </section> */
}
