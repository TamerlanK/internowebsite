import "./clients.css"
import Container from "../../Container"
import homeClient1 from "../../../assets/svg/HomeClient1.svg"
import homeClient2 from "../../../assets/svg/HomeClient2.svg"
import homeClient3 from "../../../assets/svg/HomeClient3.svg"
import homeClient4 from "../../../assets/svg/HomeClient4.svg"
import homeClient5 from "../../../assets/svg/HomeClient5.svg"

const Clients = () => {
  return (
    <Container>
      <div className="home__clients">
        <div className="home__single-client">
          <img src={homeClient1} alt="client1" />
        </div>
        <div className="home__single-client">
          <img src={homeClient2} alt="client2" />
        </div>
        <div className="home__single-client">
          <img src={homeClient3} alt="client3" />
        </div>
        <div className="home__single-client">
          <img src={homeClient4} alt="client4" />
        </div>
        <div className="home__single-client">
          <img src={homeClient5} alt="client5" />
        </div>
      </div>
    </Container>
  )
}

export default Clients
