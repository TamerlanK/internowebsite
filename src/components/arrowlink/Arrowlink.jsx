import { Link } from "react-router-dom";
import "./arrowlink.css";
import { AiOutlineRight } from "react-icons/ai";


const Arrowlink = ({to}) => {
  return (
    <div className="arrowlink-component">
      <Link to={to}>
        <AiOutlineRight color="#292F36" size={25} />
      </Link>
    </div>
  );
};

export default Arrowlink;
