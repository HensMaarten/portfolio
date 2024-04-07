import React, { useState, useEffect, useContext } from "react";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import "reactjs-popup/dist/index.css";
import { Accordion, Badge } from "react-bootstrap";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Work.scss";
import { LanguageContext } from "../../App";

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const { selectedLanguage } = useContext(LanguageContext);

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  const flickityOptions = {
    initialIndex: 2,
  };

  return (
    <>
      {selectedLanguage === "English" ? (
        <h2 className="head-text">
          My <span>Portfolio</span>
        </h2>
      ) : (
        <h2 className="head-text">
          Mijn <span>Portfolio</span>
        </h2>
      )}

      <motion.div animate={animateCard} className="app__work-portfolio">
        {filterWork.map((work, index) => {
          const projectLinkExists =
            work.projectLink != undefined ? true : false;
          const codeLinkExists = work.codeLink != undefined ? true : false;

          return (
            <div key={index}>
              <Accordion className="accordion">
                <Accordion.Item className="accordion__item" eventKey="0">
                  <Accordion.Header>
                    <div className="accordion__header__start">
                      {selectedLanguage === "English"
                        ? work.titleEN
                        : work.titleNL}
                    </div>
                    <div>
                      {work.tags.map((tag, i) => (
                        <Badge className="badge" key={i} pill text="black">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    {projectLinkExists ? (
                      <div className="youtube-container">
                        <iframe
                          width="560"
                          height="315"
                          src={work.projectLink}
                          title="YouTube video player"
                          allow="fullscreen;accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                        ></iframe>
                      </div>
                    ) : (
                      <></>
                    )}

                    <div>
                      {selectedLanguage === "English"
                        ? work.descriptionEN
                        : work.descriptionNL}
                    </div>
                    <div className="accordion__body__end">
                      {codeLinkExists ? (
                        <a
                          href={work.codeLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <div>
                            <AiFillGithub size={45} />
                          </div>
                        </a>
                      ) : (
                        <></>
                      )}
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          );
        })}
      </motion.div>
      <div></div>
    </>
  );
};

export default AppWrap(MotionWrap(Work, "app__work"), "work", "app__primarybg");
