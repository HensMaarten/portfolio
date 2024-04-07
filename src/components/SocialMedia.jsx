import React from "react";
import { BsLinkedin} from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const SocialMedia = () => {
  return <div className="app__social">
            <a href="https://github.com/HensMaarten" target="_blank" rel="noreferrer">
                <div>
                    <AiFillGithub/>     
                </div>
            </a> 
            <a href="https://be.linkedin.com/in/maarten-hens" target="_blank" rel="noreferrer">
                <div>
                    <BsLinkedin/>    
                </div>
            </a> 
         </div>;
};

export default SocialMedia;
