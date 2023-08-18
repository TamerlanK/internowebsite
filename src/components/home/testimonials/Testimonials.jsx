import "./testimonials.css"
import Container from "../../Container"
import testimonialImg1 from "../../../assets/img/homeTestimonial1.png"
import testimonialImg2 from "../../../assets/img/homeTestimonial2.png"
import testimonialImg3 from "../../../assets/img/homeTestimonial3.png"

const testimonialData = [
  {
    id: 1,
    name: "Nattasha Mith",
    location: "Sydney, USA",
    imgUrl: testimonialImg1,
    text: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
  },
  {
    id: 2,
    name: "Raymond Galario",
    location: "Sydney, Australia",
    imgUrl: testimonialImg2,
    text: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled it to make a type book.",
  },
  {
    id: 3,
    name: "Benny Roll",
    location: "Sydney, New York",
    imgUrl: testimonialImg3,
    text: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled.",
  },
]

const SingleTestimonial = ({ name, location, imgUrl, text }) => {
  return (
    <div className="singe-testimonial">
      <div className="single-testimonial-top">
        <img src={imgUrl} alt="user image" />
        <div className="single-testimonial-info">
          <h3>{name}</h3>
          <p>{location}</p>
        </div>
      </div>
      <div className="single-testimonial-bottom">{text}</div>
    </div>
  )
}

const Testimonials = () => {
  return (
    <Container>
      <div className="home__testimonials">
        <h2>
          What People Think <br /> About Us
        </h2>
        <div className="home__testimonials__content">
          {testimonialData.map((item) => (
            <SingleTestimonial
              key={item.id}
              name={item.name}
              location={item.location}
              imgUrl={item.imgUrl}
              text={item.text}
            />
          ))}
        </div>
      </div>
    </Container>
  )
}

export default Testimonials
