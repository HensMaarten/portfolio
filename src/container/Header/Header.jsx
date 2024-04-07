import React, {useContext} from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap} from '../../wrapper'
import "./Header.scss";
import {LanguageContext} from '../../App'
const scaleVariants = {
  whileInView:{
    scale: [0,1],
    opacity: [0,1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    },
  },
};

const Header = () => {
  const {selectedLanguage} = useContext(LanguageContext);
return(
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>

            <p className="p-text">{selectedLanguage === 'English' ? "Hello, I am" : "Welkom, ik ben"}</p>
            <h1 className="head-text">Maarten Hens</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">{selectedLanguage === 'English' ? "I'm currently studying application development at Thomas More university in Geel. As a developer I always aim to challenge myself and make projects that are both visually appealing and user friendly." : "Ik volg momenteel de opleiding application development op de Thomas More hogeschool te Geel. Als developer wil ik mezelf altijd uitdagen om projecten te maken die zowel visueel aantrekkelijk als gebruiksvriendelijk zijn."} </p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.angular, images.java, images.react].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
)
};


export default AppWrap(Header, 'home') ;
