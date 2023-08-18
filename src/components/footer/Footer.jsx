import "./footer.css"
import Container from "../../components/Container"
import Logo from "../../assets/svg/Logo.svg"
import facebook from "../../assets/svg/Facebook.svg"
import twitter from "../../assets/svg/Twitter.svg"
import linkedin from "../../assets/svg/Linkedin.svg"
import instagram from "../../assets/svg/Instagram.svg"
import { Link } from "react-router-dom"

const pagesLinks = [
  {
    id: 1,
    text: "About Us",
    to: "/about",
  },
  {
    id: 2,
    text: "Our Projects",
    to: "/project",
  },
  {
    id: 3,
    text: "Our Team",
    to: "/our-team",
  },
  {
    id: 4,
    text: "Contact Us",
    to: "/contact",
  },
  {
    id: 5,
    text: "Services",
    to: "/services",
  },
]

const servicesData = [
  {
    id: 1,
    text: "Kitchen",
    to: "project?category=kitchen&page=1",
  },
  {
    id: 2,
    text: "Living Area",
    to: "project?category=living+room&page=1",
  },
  {
    id: 3,
    text: "Bathroom",
    to: "project?category=bathroom&page=1",
  },
  {
    id: 4,
    text: "Dining Hall",
    to: "project?category=dining+hall&page=1",
  },
  {
    id: 5,
    text: "Bedroom",
    to: "project?category=bedroom&page=1",
  },
]

const contactData = {
  address: "55 East Birchwood Ave.\nBrooklyn, New York 11201",
  email: "contact@interno.com",
  phone: "(123) 456 - 7890",
}

const FooterList = ({ title, data }) => {
  return (
    <div className="footer__list">
      <p className="footer__list__title">{title}</p>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link to={item.to} onClick={() => window.scrollTo(0, 0)}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Footer = () => {
  const { address, email, phone } = contactData
  return (
    <Container>
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__interno">
            <a href="/">
              <img src={Logo} alt="logo" className="footer__interno__img" />
            </a>
            <p className="footer__interno__text">
              It is a long established fact that a reader <br /> will be
              distracted lookings.
            </p>
            <div className="footer__socials">
              <div className="footer__socials-item">
                <a href="https://www.facebook.com" target="_blank">
                  <img src={facebook} alt="facebook" />
                </a>
              </div>
              <div className="footer__socials-item">
                <a href="https://www.twitter.com" target="_blank">
                  <img src={twitter} alt="twitter" />
                </a>
              </div>
              <div className="footer__socials-item">
                <a href="https://www.linkedin.com" target="_blank">
                  <img src={linkedin} alt="linkedin" />
                </a>
              </div>
              <div className="footer__socials-item">
                <a href="https://www.instagram.com" target="_blank">
                  <img src={instagram} alt="instagram" />
                </a>
              </div>
            </div>
          </div>

          <div className="footer__lists-container">
            <FooterList title="Pages" data={pagesLinks} />
            <FooterList title="Services" data={servicesData} />
            <div className="footer__contact">
              <p className="footer__contact__title">Contact</p>
              <div className="footer__contact__lists-container">
                <p className="footer__contact__address">{address}</p>
                <p className="footer__contact__item">{email}</p>
                <p className="footer__contact__item">{phone}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          Copyright © Interno | Designed by Victorflow Templates - Powered by
          Webflow
        </div>
      </div>
    </Container>
  )
}

export default Footer
