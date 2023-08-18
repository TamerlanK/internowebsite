import notFound from "../../assets/img/notfound.png";
import Button from "../../components/button/Button";
import Container from "../../components/Container";
import "./notfound.css";

const NotFound = () => {

  return (
    <Container>
      
      <div className="home__notfound">
        <div className="home__notfound__left">
          <h2>404</h2>
          <p>We are sorry, but the page you requested was not found</p>
          <Button text="Back To Home"/>
        </div>
        <div className="home__notfound__right">
          <img src={notFound} alt="not found" />
        </div>
      </div>
    </Container>
  );
};

export default NotFound;
