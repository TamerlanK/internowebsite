import "./details.css";

const Details = ({ title, desc }) => {
  return (
    <div className="service-dts__container">
      <div className="service-dts__left">
        <h1>{title}</h1>
      </div>
      <div className="service-dts__right">
        <p className="service-dts__desc-header">{desc}</p>
        <p className="service-dts__desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          quae, ab qui earum sequi tempora facere nisi voluptas? Deserunt
          obcaecati asperiores, id voluptas placeat ut odio quos consequuntur
          tempora recusandae, magnam repellendus laborum iste nam doloremque,
          cupiditate saepe necessitatibus non eveniet dicta rerum! Eaque
          voluptatibus consequatur eos unde obcaecati maiores.
        </p>
      </div>
    </div>
  );
};

export default Details;
