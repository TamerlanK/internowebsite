import "./contactform.css";

import Button from "../../button/Button";
import ContactCard from "../../contactcard/ContactCard";

const internoContactData = {
  mail: "interno@interno.com",
  number: "+1 (378) 400-1234",
  website: "interno.com",
};

const Contactform = () => {
  const { mail, number, website } = internoContactData;
  return (
    <div className="contact__form__container">
      <h2 className="contact__form__title">
        We love meeting new people <br /> and helping them.
      </h2>
      <div className="contact__main">
        <ContactCard mail={mail} number={number} website={website} />
        <form className="contact__form">
          <div className="contact__form__row">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="contact__form__row">
            <input type="text" placeholder="Subject" />
            <input type="tel" placeholder="Phone" />
          </div>
          <div className="contact__form__row">
            <textarea placeholder="Your Message"></textarea>
          </div>
          <Button text="Send Now" />
        </form>
      </div>
    </div>
  );
};

export default Contactform;
