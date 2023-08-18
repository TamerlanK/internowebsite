import "./mailbox.css";
import Button from "../../button/Button";

const Mailbox = () => {
  return (
    <div className="about__mailbox__container">
      <div className="about__mailbox__inner">
        <h2 className="about__mailbox__title">
          Creative project? Let's have <br /> a productive talk.
        </h2>
        <form className="about__mailbox__form">
          <div className="about__mailbox__form__row">
            <input type="text" id="name" placeholder="Name" />
            <input type="email" id="email" placeholder="Email" />
          </div>
          <div className="about__mailbox__form__row">
            <textarea type="text" id="interestedIn" placeholder="Hello " />
          </div>
          <Button text="Send Now" />
        </form>
      </div>
    </div>
  );
};

export default Mailbox;
