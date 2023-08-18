import "./form.css";
import Button from "../../button/Button";

const Form = () => {
  return (
    <div className="member_form">
      <h2>Contact Me</h2>
      <form>
        <div className="member_form_row">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="member_form_row">
          <textarea placeholder="Send your message"></textarea>
        </div>
        <div className="member_form_row">
          <label htmlFor="saveme">
            <input type="checkbox" id="saveme" />
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>
        <Button text="Send Now" />
      </form>
    </div>
  );
};

export default Form;
