import img from "../../../assets/img/aboutWhatwedo.png";
import Button from "../../button/Button";
import Twocollayout from "../../twocollayout/Twocollayout";

const Whatwedo = () => {
  /* TODO: */
  /* Twocollayout Komponente cevir */
  return (
    <Twocollayout
      title="What We Do"
      text="It is a long established fact that a reader will be distracted by the
  of readable content of a page when lookings at its layouts the points
  of using that it has a more-or-less normal."
      buttonText="Our Concept"
      imgUrl={img}
    />
  );
};

export default Whatwedo;

{
  /* <div className="whatwedo-container">
      <div className="whatwedo__left">
        <h2 className="whatwedo__title">What We Do</h2>
        <p className="whatwedo__text">
          It is a long established fact that a reader will be distracted by the
          of readable content of a page when lookings at its layouts the points
          of using that it has a more-or-less normal.
        </p>
        <Button text="Our Concept" />
      </div>
      <div className="whatwedo__right">
        <img src={img} alt="whatwedo" className="whatwedo__img" />
      </div>
    </div> */
}
