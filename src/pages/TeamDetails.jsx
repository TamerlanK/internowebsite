import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { teamMembers } from "../components/about/team/Team";
import Container from "../components/Container";
import banner from "../assets/img/teamSingleBanner.png";
import Pagetop from "../components/pagetop/Pagetop";
import Memberdetails from "../components/teamdetails/memberdetails/Memberdetails";
import Bio from "../components/teamdetails/bio/Bio";
import { TeamCard } from "../components/about/team/Team";
import { Link } from "react-router-dom";
import Form from "../components/teamdetails/form/Form";

const TeamDetails = () => {
  const { id } = useParams();
  const member = teamMembers.find((member) => member.id === parseInt(id, 10));

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const [randomMembers, setRandomMembers] = useState([]);

  useEffect(() => {
    const shuffledMembers = shuffleArray(teamMembers.slice());
    setRandomMembers(shuffledMembers.slice(0, 4));
  }, []);

  return (
    <>
      <Pagetop imgUrl={banner} title={member.name} breadcrumb="Our Team" />
      <Container>
        <Memberdetails member={member} />
        <Bio />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "5rem 0",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {randomMembers.map((item) => (
            <Link
              key={item.id}
              to={`/our-team/${item.id}`}
              onClick={() => window.scrollTo(0, 0)}
              style={{display: "flex", justifyContent: "center"}}
            >
              <TeamCard memberData={item} />
            </Link>
          ))}
        </div>
        <Form />
      </Container>
    </>
  );
};

export default TeamDetails;
