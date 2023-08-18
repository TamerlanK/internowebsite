import React, { useState } from "react";
import Logo from "../../assets/svg/Logo.svg";
import Search from "../../assets/svg/Search.svg";
import "./navbar.css";
import { Link } from "react-router-dom";
import Container from "../Container";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose, AiFillCaretDown } from "react-icons/ai";
import { createPortal } from "react-dom";

const navbarLinks = [
  {
    id: 1,
    text: "Home",
    to: "/",
  },
  {
    id: 2,
    text: "Pages",
    to: "pages",
    subLinks: [
      {
        id: 7,
        text: "About Us",
        to: "/about",
      },
      {
        id: 8,
        text: "Our Projects",
        to: "/project",
      },
      {
        id: 9,
        text: "Our Team",
        to: "/our-team",
      },
      {
        id: 10,
        text: "Contact Us",
        to: "/contact",
      },
      {
        id: 11,
        text: "Services",
        to: "/services",
      },
    ],
  },
  {
    id: 3,
    text: "Services",
    to: "services",
  },
  {
    id: 4,
    text: "Project",
    to: "project",
  },
  {
    id: 5,
    text: "Blog",
    to: "blog",
  },
  {
    id: 6,
    text: "Contact",
    to: "contact",
  },
];

const SearchModal = ({ isOpen, onClose }) => {
  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains("modal-background")) {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className="modal-background" onClick={handleBackgroundClick}>
      <div className="modal-box">
        <img src={Search} alt="search" />
        <input type="text" placeholder="Search..." />
        <span className="close-btn" onClick={onClose}>
          <AiOutlineClose size={25} color="#fff" />
        </span>
      </div>
    </div>,
    document.body
  );
};

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleHamburgerClick = () => {
    setIsOpen((prev) => !prev);
  };
  const openModal = () => {
    setIsSearchOpen(true);
  };
  const closeModal = () => {
    setIsSearchOpen(false);
  };
  return (
    <>
      <Container>
        <nav className="navbar">
          <div className="navbar-logo">
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="navbar-menubar">
            <ul className="navbar-menu">
              {navbarLinks.map((link) => (
                <li key={link.id}>
                  <Link to={!link.subLinks && link.to}>{link.text}</Link>
                  {link.subLinks && (
                    <AiFillCaretDown style={{ marginLeft: "5px" }} />
                  )}

                  {link.subLinks && (
                    <ul className="sublink-menu">
                      {link.subLinks?.map((sublink) => (
                        <li key={sublink.id}>
                          <Link to={sublink.to}>{sublink.text}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                  <div></div>
                </li>
              ))}
            </ul>
            <div className="navbar-search">
              <button onClick={openModal}>
                <img src={Search} alt="search" />
              </button>
            </div>
            {isSearchOpen && (
              <SearchModal isOpen={isSearchOpen} onClose={closeModal} />
            )}
            <div className="navbar-hamburger">
              <GiHamburgerMenu
                size={25}
                color="#292f36"
                onClick={handleHamburgerClick}
              />
            </div>
            <div className={`overlay ${isOpen && "clip-open"}`}>
              <ul className="overlay-menu">
                {navbarLinks.map((link) => (
                  <li key={link.id}>
                    <Link to={link.to} onClick={handleHamburgerClick}>
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
              <button onClick={handleHamburgerClick}>
                <AiOutlineClose size={25} color="#292f36" />
              </button>
            </div>
          </div>
        </nav>
      </Container>
    </>
  );
};

export default Navbar;
