import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
import { Button } from "react-bootstrap";
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';
import {LanguageContext} from '../../App'
import { FaCloudDownloadAlt } from "react-icons/fa";


const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  const [softSkills, setSoftSkills] = useState([]);
  const [brands, setBrands] = useState([]);
  const {selectedLanguage} = useContext(LanguageContext);
  
  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';
    const softSkillsQuery = '*[_type == "softSkills"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    }, );

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });

    client.fetch(softSkillsQuery).then((data) => {
      setSoftSkills(data);
     });
    
     client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });

  }, []);

  return (
    <>
    
      <h2 className="head-text">Skills & {selectedLanguage === 'English' ? "Experiences" : "Ervaringen"}</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => {
            return (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.name}
              data-tip
              data-for={skill.name}
            >
            <ReactTooltip
                      id={skill.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                    {selectedLanguage === 'English' ? skill.descriptionEN: skill.descriptionNL}
                    </ReactTooltip>
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name} </p>
            </motion.div>
        )}
          )}
          {softSkills.map((softSkill)=> {
            return (
                    <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__skills-item app__flex"
                    key={softSkill.nameNL}
                    data-tip
                    data-for={softSkill.nameNL}
                  >
                    <ReactTooltip
                      id={softSkill.nameNL}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                    {selectedLanguage === 'English' ? softSkill.descriptionEN: softSkill.descriptionNL}
                    </ReactTooltip>
                    <div
                      className="app__flex"
                      style={{ backgroundColor: softSkill.bgColor }}
                    >
                      <img src={urlFor(softSkill.icon)} alt={softSkill.nameNL} />
                    </div>
                    <p className="p-text">{selectedLanguage === 'English' ? softSkill.nameEN.split(" ").join("\n"): softSkill.nameNL.split(" ").join("\n")} </p>
                  </motion.div>    
          )})}
        </motion.div>




        <div className="app__skills-exp" >
          {experiences.map((experience) => {
            return (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <div key={selectedLanguage === 'English' ? work.nameEN: work.nameNL}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={selectedLanguage === 'English' ? work.nameEN: work.nameNL}
                    >
                      <h4 className="bold-text">{selectedLanguage === 'English' ? work.nameEN: work.nameNL}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    {work.descEN != undefined ? 
                    <ReactTooltip
                      id={selectedLanguage === 'English' ? work.nameEN: work.nameNL}
                      effect="solid"
                      arrowColor="#fff"
                      className="works-tooltip"
                    >
                      {selectedLanguage === 'English' ? work.descEN.map: work.descNL}
                    </ReactTooltip>
                     : <></>}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          )})}
        </div>
        {/* <Button className='app__skills-button' variant="outline-info"> <FaCloudDownloadAlt className='downloadIcon' /> {selectedLanguage === 'English' ? " Download my CV" : "Download mijn CV"}</Button> */}
        <div className="app__skills-brands app__flex">
        {brands.map((brand) => (
          <motion.div
          whileInView={{opacity: [0,1]}}
          transition={{duration: 0.5, type:'tween'}}
          key={brand._id}
          >
            <a href={brand.link} target="_blank" rel="noreferrer">
            <img src={urlFor(brand.imgUrl)} alt={brand.name}/>
            </a>
          </motion.div>
        ))}
      </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__tertiarybg',
);