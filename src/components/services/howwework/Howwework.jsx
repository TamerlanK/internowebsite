import "./howwework.css";
import img1 from "../../../assets/img/servicesHWW1.png";
import img2 from "../../../assets/img/servicesHWW2.png";
import img3 from "../../../assets/img/servicesHWW3.png";
import img4 from "../../../assets/img/servicesHWW4.png";
import icon1 from "../../../assets/svg/serviceIcon1.svg";
import icon2 from "../../../assets/svg/serviceIcon2.svg";
import icon3 from "../../../assets/svg/serviceIcon3.svg";
import icon4 from "../../../assets/svg/serviceIcon4.svg";

const data = [
  {
    id: 1,
    imgUrl: img1,
    icon: icon1,
    title: "Concept & Details",
    text: "It is a long established fact will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting industry.",
  },
  {
    id: 2,
    imgUrl: img2,
    icon: icon2,
    title: "Idea for Work",
    text: "It is a long established fact will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting industry.",
  },
  {
    id: 3,
    imgUrl: img3,
    icon: icon3,
    title: "Design",
    text: "It is a long established fact will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting industry.",
  },
  {
    id: 4,
    imgUrl: img4,
    icon: icon4,
    title: "Perfection",
    text: "It is a long established fact will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting industry.",
  },
];

const HowWeWorkStep = ({ stepData, imgOnLeft }) => {
  const { id, imgUrl, icon, title, text } = stepData;

  return (
    <div className={`hww__step ${!imgOnLeft && "imageOnRight"}`}>
      {imgOnLeft ? (
        <>
          <div className="hww__image">
            <img src={imgUrl} alt="" />
          </div>
          <div className="hww__info">
            <div className="hww__info__top">
              <img src={icon} alt="icon" />
              <p>0{id}</p>
            </div>
            <div className="hww__info__bottom">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="hww__info">
            <div className="hww__info__top">
              <img src={icon} alt="icon" />
              <p>0{id}</p>
            </div>
            <div className="hww__info__bottom">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </div>
          <div className="hww__image">
            <img src={imgUrl} alt={title} />
          </div>
        </>
      )}
    </div>
  );
};

const Howwework = () => {
  return (
    <div className="howwework__container">
      <div className="howwework__header">
        <h2>How We Work</h2>
        <p>
          It is a long established fact will be distracted.Lorem Ipsum is simply
          dummy text of <br /> the printing and typesetting industry.
        </p>
      </div>
      <div className="howwework__content">
        {data.map((item, index) => (
          <HowWeWorkStep
            key={index}
            stepData={item}
            imgOnLeft={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default Howwework;
