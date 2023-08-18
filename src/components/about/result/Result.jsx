import Twocollayout from "../../twocollayout/Twocollayout";
import img from "../../../assets/img/aboutResult.png";

import "./result.css";

const Result = () => {
  return (
    <Twocollayout
      title="The End Result"
      text="It is a long established fact that a reader will be distracted by the of readable content of a page 
  when lookings at its layouts the points of using 
  that it has a more-or-less normal."
      buttonText="Our Portfolio"
      imgUrl={img}
      imgOnLeft={true}
    />
  );
};

export default Result;
