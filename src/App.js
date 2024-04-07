import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";

import { languages } from "./constants";
import './App.scss';

export const LanguageContext = React.createContext({selectedLanguage: undefined, i18nChangeHandler: () => undefined});
const chosenLanguage = JSON.parse(localStorage.selectedLanguage || null) || languages[0].name
const App = () => {
    const [selectedLanguage, setSelectedLanguage] = useState(chosenLanguage);
    const i18nChangeHandler = (newSelectedLanguage) => {
        setSelectedLanguage(newSelectedLanguage);
        localStorage.selectedLanguage = JSON.stringify(newSelectedLanguage);
    }

    return (
       <div className="app">
           <LanguageContext.Provider 
                value={{selectedLanguage: selectedLanguage, i18nChangeHandler}}>
           <Navbar />
           <Header />
           <About />
           <Skills />
           <Work />
           <Testimonial />
           <Footer />
           </LanguageContext.Provider>
       </div>
    );
}

export default App;