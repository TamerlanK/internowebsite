import { TeamCard } from "../components/about/team/Team";
import Container from "../components/Container";
import { teamMembers } from "../components/about/team/Team";
import "./ourteam.css";
import Pagetop from "../components/pagetop/Pagetop";
import banner from "../assets/img/ourteamBanner.png";
import { Link } from "react-router-dom";

const OurTeam = () => {
  return (
    <>
      <Pagetop breadcrumb="Team" title="Our Team" imgUrl={banner} />
      <Container>
        <div className="our-team_container">
          {teamMembers.map((member) => (
            <Link to={`./${member.id}`} onClick={() => window.scrollTo(0, 0)}>
              <TeamCard key={member.id} memberData={member} />
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
};

export default OurTeam;
