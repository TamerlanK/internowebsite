import "./pagetop.css";
import { Link } from "react-router-dom";

const Pagetop = ({ title, breadcrumb, imgUrl }) => {
  return (
    <div
      className="pagetop__container"
      style={{ background: `url(${imgUrl})` }}
    >
      <div className="pagetop__inner">
        <h2 className="pagetop__title">{title}</h2>
        <div className="pagetop__breadcrumb">
          <Link to="/">Home</Link> / <Link to={`.`}>{breadcrumb}</Link>
        </div>
      </div>
    </div>
  );
};

export default Pagetop;
