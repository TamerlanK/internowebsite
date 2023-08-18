import Button from "../button/Button";
import "./twocollayout.css";

const Twocollayout = ({
  title,
  text,
  buttonText,
  imgUrl,
  imgOnLeft = false,
}) => {
  return (
    <div className={`two-col__container ${imgOnLeft && "two-col__image-left"}`}>
      <div className="two-col__left">
        <h2 className="two-col__title">{title}</h2>
        <p className="two-col__text">{text}</p>
        <Button text={buttonText} />
      </div>
      <div className="whatwedo__right">
        <img src={imgUrl} alt={title} className="two-col__img" />
      </div>
    </div>
  );
};

export default Twocollayout;
