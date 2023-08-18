import Button from "../button/Button";
import "./simplecard.css";

const SimpleCard = ({ title, description, to }) => (
  <div className="simple_card">
    <h2>{title}</h2>
    <p>{description}</p>
    <Button text="Read More" mode="light" to={to}/>
  </div>
);

export default SimpleCard;
