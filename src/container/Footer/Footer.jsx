import React, { useContext } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
// import { client } from "../../client";
import "./Footer.scss";
import {LanguageContext} from '../../App'
import { BsLinkedin } from "react-icons/bs";
const Footer = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });
  // const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  // const [loading, setLoading] = useState(false);
  const {selectedLanguage} = useContext(LanguageContext);
  // const { name, email, message } = formData;

  // const handleChangeInput = (e) => {
  //   const { name, value } = e.target;

  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = () => {
  //   setLoading(true);

  //   const contact = {
  //     _type: "contact",
  //     name: name,
  //     email: email,
  //     message: message,
  //   };

  //   client.create(contact).then(() => {
  //     setLoading(false);
  //     setIsFormSubmitted(true);
  //   });
  // };
  return (
    <>
    {selectedLanguage === 'English' ?
              <h2 className="head-text">Questions Or Interested?</h2>
    :           <h2 className="head-text">Vragen Of Interesse?</h2>}

      <div className="app__footer-cards">
        <div className="app__footer-card">
        <a href="https://be.linkedin.com/in/maarten-hens" className="p-text">
        <img src={images.linkedin} alt="linkedin" />
          {selectedLanguage === 'English' ?
              "Connect with me on Linkedin!" : "Contacteer me op Linkedin!"}
        </a>
        </div>
        <div className="app__footer-card">
        <a href="https://www.google.be/maps/place/2400+Mol/" target="_blank" rel="noreferrer" className="p-text">
          <img src={images.location} alt="location" />
              2400 Mol
        </a>
        </div>
      </div>
      {/* {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              className="p-txt"
              type="text"
              placeholder={selectedLanguage === 'English' ?"Your Name" : "Uw naam"}
              value={name}
              name="name"
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              className="p-txt"
              type="email"
              placeholder={selectedLanguage === 'English' ?"Your Email" : "Uw email"}
              value={email}
              name="email"
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder={selectedLanguage === 'English' ?"Your Message" : "Uw bericht"}
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>
            { 
            selectedLanguage === 'English' ? loading ? "Sending" : "Send Message" : loading ? "Verzenden" : "Verzend Bericht"
            }
          </button>
        </div>
      ) : (
        <div>
         <h3 className="head-text">{selectedLanguage === 'English' ? "Thank you for getting in touch!" : "Bedankt voor je bericht!"}</h3> 
        </div>
      )} */}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
