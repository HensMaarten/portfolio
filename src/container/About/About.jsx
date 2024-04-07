import React, {useState, useEffect, useContext} from 'react'
import {motion } from 'framer-motion';
import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import {LanguageContext} from '../../App'

const About = () => {
  const [abouts, setAbouts] = useState([]);
  const {selectedLanguage} = useContext(LanguageContext);
  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);
  return (
    
    <>


      
    {selectedLanguage === 'English' ?
        <div><h2 className="head-text size-two">About <span> Me </span></h2><p> From a young age, I was very quick in learning everything related to computers. I was also fascinated about how certain programs worked. Despite the interest in IT, I decided to pursue an economics degree initially. But after 2 years I ended up in an IT education. After successfully obtaining a graduate's degree in programming, I decided to persue a bachelor's degree at the IT Factory of Thomas More in Geel, specializing in application development, to broaden my knowledge even further and be better prepared for a future job as a software developer.</p><h3 className="head-text">Hobby’s<span> And </span>Personal Interests</h3></div>
    :     <div><h2 className="head-text size-two">Over <span> Mij </span></h2><p>Al vanaf jonge leeftijd was ik erg snel op weg met alles wat met computers te maken had. Tevens was ik gefascineerd over hoe bepaalde programma’s werkten. Ondanks de interesse in IT besloot ik om eerst voor een economische opleiding te kiezen. Maar na 2 jaar vond ik de weg naar een IT opleiding. Nadat ik succesvol een diploma graduaat programmeren behaalde, besloot ik een bacheloropleiding met als afstudeerrichting application development te volgen aan de IT Factory van Thomas More te Geel, om mijn kennis nog verder te verbreden en zo nog beter voorbereid te zijn op een toekomstige job als software ontwikkelaar. </p>
          <h3 className="head-text"> <span> Hobby’s </span> En <span>Interesses</span></h3></div>}


    <div className="app__profiles">
      {abouts.map((about, index) => (
        <motion.div
        whileInView={{opacity: 1}}
        whileHover={{scale: 1.1}}
        transation={{duration: 0.5, type: 'tween'}}
        className="app__profile-item"
        key={ selectedLanguage === 'English' ? about.titleEN+index : about.titleNL+index}
        >
          <img src={urlFor(about.imgUrl)} alt={ selectedLanguage === 'English' ? about.titleEN : about.titleNL}/>
          <h2 className="bold-text" style={{marginTop: 20}}>{ selectedLanguage === 'English' ? about.titleEN : about.titleNL}</h2>
          <p style={{marginTop: 10}}>{selectedLanguage === 'English' ? about.descriptionEN : about.descriptionNL}</p>
        </motion.div>
      ))}
    </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'), 
  'about',
  "app__primarybg"
  );