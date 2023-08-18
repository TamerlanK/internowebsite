import ContactCard from '../../contactcard/ContactCard'
import "./memberdetails.css"

const Memberdetails = ({ member }) => {
  return (
    <div className="member_details">
      <div className="member_img">
        <img src={member.imgUrl} alt="memberimg" />
      </div>
      <div className="member_info">
        <h1>{member.name}</h1>
        <p>{member.job}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          necessitatibus ut illum quos recusandae voluptatibus minus, libero
          asperiores sed alias.
        </p>
        <ContactCard mail={member.email} number={member.phoneNumber} website={member.website}/>
      </div>
    </div>
  );
};

export default Memberdetails;
