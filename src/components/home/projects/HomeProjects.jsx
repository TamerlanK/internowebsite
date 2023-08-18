import "./homeprojects.css";
import Container from "../../Container";
import homeProjectImg1 from "../../../assets/img/homeProject1.png";
import homeProjectImg2 from "../../../assets/img/homeProject2.png";
import homeProjectImg3 from "../../../assets/img/homeProject3.png";
import homeProjectImg4 from "../../../assets/img/homeProject4.png";
import Arrowlink from "../../arrowlink/Arrowlink";

const homeProjectsData = [
  {
    id: 1,
    projectName: "Modern Kitchen",
    type: "Decor / Architecture",
    imgUrl: homeProjectImg1,
  },
  {
    id: 2,
    projectName: "Modern Kitchen",
    type: "Decor / Architecture",
    imgUrl: homeProjectImg2,
  },
  {
    id: 3,
    projectName: "Modern Kitchen",
    type: "Decor / Architecture",
    imgUrl: homeProjectImg3,
  },
  {
    id: 4,
    projectName: "Modern Kitchen",
    type: "Decor / Architecture",
    imgUrl: homeProjectImg4,
  },
];

const SingleHomeProject = ({ projectName, type, imgUrl }) => {
  return (
    <div className="home__single-project">
      <div className="home__single-project__top">
        <img src={imgUrl} alt="" />
      </div>
      <div className="home__single-project__bottom">
        <div className="home__single-project__info">
          <h4>{projectName}</h4>
          <p>{type}</p>
        </div>
        <Arrowlink />
      </div>
    </div>
  );
};

const HomeProjects = () => {
  return (
    <Container>
      <div className="home__projects">
        <div className="home__projects__title">
          <h2>Follow Our Projects</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the of readable <br /> content of page lookings at its layouts
            points.
          </p>
        </div>
        <div className="home__projects__content">
          {homeProjectsData.map(({ id, projectName, type, imgUrl }) => (
            <SingleHomeProject
              key={id}
              projectName={projectName}
              type={type}
              imgUrl={imgUrl}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default HomeProjects;
