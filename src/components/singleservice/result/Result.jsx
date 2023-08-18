import Twocollayout from "../../twocollayout/Twocollayout";
import img from "../../../assets/img/serviceSingleResult.png";

const Result = () => {
  return (
    <Twocollayout
      title="We love design.That's how we got here."
      imgUrl={img}
      text="It is a long established fact that a reader will be distracted by the of readable content ."
      buttonText="Our Portfolio"
      imgOnLeft={true}
    />
  );
};

export default Result;
