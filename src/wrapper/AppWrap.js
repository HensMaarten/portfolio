import React, { useEffect, useState } from "react";
import {NavigationDots, SocialMedia } from '../components';


const AppWrap = (Component, idName, classNames) => function HOC() {
  const [currentYear] = useState(new Date().getFullYear());

    return (
        <div id={idName} className={`app__container ${classNames}`}>
          <SocialMedia />
          <div className="app__wrapper app__flex">
            <Component />
    
            <div className="copyright">
              <p className="p-text">©{currentYear} Maarten Hens</p>
            </div>
          </div>
          <NavigationDots active={idName} />
        </div>
      );
    };

export default AppWrap