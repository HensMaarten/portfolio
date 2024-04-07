import React, { useState, useContext } from "react";
import { Dropdown } from "react-bootstrap";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { languages, menuItems } from "../../constants";
import "./Navbar.scss";
import { LanguageContext } from "../../App";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { selectedLanguage, i18nChangeHandler } = useContext(LanguageContext);

  const menuArray = [

  ]
  return (
    <nav className="app__navbar">
      <ul className="app__navbar-links">

        {menuItems.map((item) => (
          <li className="app__flex p-text" key={`link-${item.EN}`}>
            <div />
            {selectedLanguage === 'English' ?  (
              <a href={`#${item.EN}`}>{item.EN}</a>
            ): <a href={`#${item.EN}`}>{item.NL}</a>}
            
          </li>
        ))}
      </ul>

      <Dropdown className="app__navbar-dropdown">
        <Dropdown.Toggle variant="info" id="dropdown-basic">
          {selectedLanguage}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {languages.map((l) => (
            <Dropdown.Item
              value={l.name}
              key={l.name}
              onClick={() => i18nChangeHandler(l.name)}
            >
              {l.flag} {l.name}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {menuItems.map((item) => (
                <li key={item.EN}>
                  <a href={`#${item.EN}`} onClick={() => setToggle(false)}>
                  {selectedLanguage === 'English' ? (item.EN) :
                    item.NL}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
