import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Testimonial.scss";
import {LanguageContext} from '../../App'

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);
  const {selectedLanguage} = useContext(LanguageContext);

  const handleClick = (index) => {
    setCurrentIndex(index);
  }

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  const test = testimonials[currentIndex];
  return (
    <>
      {testimonials.length !== 0 ? testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img
              src={urlFor(test.imgurl)}
              alt={test.name}
            />
            <div className="app__testimonial-content">
            <p className="p.text">{selectedLanguage === 'English' ? test.feedbackEN : test.feedbackNL}</p>
            <div>
              <h4 className="bold.text">{test.name} </h4>
              <h5 className="p-text">{test.company} </h5>
            </div>
            </div>
          </div>
          {testimonials.length > 1 ? (
            <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
          ) : <></>}
        </>
      ) : <></>}
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonials",
  "app__tertiarybg"
);
