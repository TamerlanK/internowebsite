import "./team.css";
import teamImg1 from "../../../assets/img/team1.png";
import teamImg2 from "../../../assets/img/team2.png";
import teamImg3 from "../../../assets/img/team3.png";
import teamImg4 from "../../../assets/img/team4.png";
import teamImg5 from "../../../assets/img/team5.png";
import teamImg6 from "../../../assets/img/team6.png";
import teamImg7 from "../../../assets/img/team7.png";
import teamImg8 from "../../../assets/img/team8.png";

import facebook from "../../../assets/svg/Facebook.svg";
import instagram from "../../../assets/svg/Instagram.svg";
import linkedin from "../../../assets/svg/Linkedin.svg";
import twitter from "../../../assets/svg/Twitter.svg";
import Container from "../../Container";

export const teamMembers = [
  {
    id: 1,
    name: "Charlotte Johnson",
    job: "Interior Designer",
    country: "United Kingdom",
    email: "charlotte.johnson@email.com",
    phoneNumber: "123-456-7890",
    imgUrl: teamImg1,
    website: "www.charlottejohnson.com",
  },
  {
    id: 2,
    name: "Ethan Williams",
    job: "Interior Design Consultant",
    country: "United States",
    email: "ethan.williams@email.com",
    phoneNumber: "987-654-3210",
    imgUrl: teamImg2,
    website: "www.ethanwilliamsdesigns.com",
  },
  {
    id: 3,
    name: "Amelia Smith",
    job: "Interior Decorator",
    country: "Canada",
    email: "amelia.smith@email.com",
    phoneNumber: "555-123-4567",
    imgUrl: teamImg3,
    website: "www.ameliasmithdecor.com",
  },
  {
    id: 4,
    name: "Nattasha Julie",
    job: "Designer",
    country: "Australia",
    email: "nattasha.julie@email.com",
    phoneNumber: "456-789-0123",
    imgUrl: teamImg4,
    website: "www.nattashajuliedesigns.com",
  },
  {
    id: 5,
    name: "John Doe",
    job: "Architect",
    country: "United States",
    email: "john.doe@email.com",
    phoneNumber: "111-222-3333",
    imgUrl: teamImg5,
    website: "www.johndoearchitecture.com",
  },
  {
    id: 6,
    name: "Emma Johnson",
    job: "Design Assistant",
    country: "United Kingdom",
    email: "emma.johnson@email.com",
    phoneNumber: "444-555-6666",
    imgUrl: teamImg6,
    website: "www.emmajohnson.design",
  },
  {
    id: 7,
    name: "Michael Smith",
    job: "Interior Designer",
    country: "Canada",
    email: "michael.smith@email.com",
    phoneNumber: "777-888-9999",
    imgUrl: teamImg7,
    website: "www.michaelsmithinteriors.com",
  },
  {
    id: 8,
    name: "Sophia Williams",
    job: "Interior Design Consultant",
    country: "Australia",
    email: "sophia.williams@email.com",
    phoneNumber: "000-111-2222",
    imgUrl: teamImg8,
    website: "www.sophiawilliamsconsulting.com",
  },
];

export const TeamCard = ({ memberData }) => {
  const { name, job, country, email, phoneNumber, imgUrl } = memberData;
  return (
    <div className="about__team__card">
      <div className="about__team__card-front">
        <img src={imgUrl} alt="" />
      </div>
      <div className="about__team__card-back">
        <div className="about__team__card-back__name">
          <h3>{name}</h3>
          <p>
            {job}, {country}
          </p>
        </div>
        <div className="about__team__card-socials">
          <div>
            <a href="https://www.facebook.com" target="_blank">
              <img src={facebook} alt="facebook" />
            </a>
          </div>
          <div>
            <a href="https://www.twitter.com" target="_blank">
              <img src={twitter} alt="twitter" />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com" target="_blank">
              <img src={linkedin} alt="linkedin" />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com" target="_blank">
              <img src={instagram} alt="instagram" />
            </a>
          </div>
        </div>
        <div className="about__team__card-back__contact">
          <p>{phoneNumber}</p>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <div className="about__team__section">
      <Container>
        <div className="about__team__container">
          <h2 className="about__team__title">What People Think About Us</h2>
          <div className="about__team__content">
            {teamMembers.slice(0, 4).map((member) => (
              <TeamCard key={member.id} memberData={member} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Team;
