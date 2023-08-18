import "./contactcard.css";
import mailIcon from "../../assets/svg/Contactmail.svg";
import callIcon from "../../assets/svg/Contactcall.svg";
import siteIcon from "../../assets/svg/Contactsite.svg";
import facebook from "../../assets/svg/Facebook.svg";
import twitter from "../../assets/svg/Twitter.svg";
import linkedin from "../../assets/svg/Linkedin.svg";
import instagram from "../../assets/svg/Instagram.svg";

const ContactCard = ({mail, number, website}) => {
  return (
    <div className="contact__info">
      <div className="contact__info__row">
        <img src={mailIcon} alt="mail" />
        <p>{mail}</p>
      </div>
      <div className="contact__info__row">
        <img src={callIcon} alt="mail" />
        <p>{number}</p>
      </div>
      <div className="contact__info__row">
        <img src={siteIcon} alt="mail" />
        <p>{website}</p>
      </div>

      <div className="contact__info__socials">
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
        <img src={linkedin} alt="linkedin" />
        <img src={instagram} alt="instagram" />
      </div>
    </div>
  );
};

export default ContactCard;
