import './Style/style.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import StudentEdition from './Pages/StudentEdition';
import Form from './Pages/Form';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import { useState, useEffect } from 'react';
import Splash from './Components/Splash';
import LocalStorage from './Storage/LocalStorage';
import StudentForm from './Pages/StudentForm';
import RegisterSuccessful from './Pages/RegisterSuccessful';
import Eventregister from './Pages/Eventregister';

import CampaignSuccess from './Pages/CampaignSuccess';
import PageNotFound from './Pages/PageNotFound';
import TagManager from 'react-gtm-module'
import SupportCampaign from './Pages/SupportCampaign';

import ReactPixel from 'react-facebook-pixel';
import Winner from './Pages/Winner';




function App() {
  const [splashFlag, setSplashFlag] = useState(true);

  // Tag Manager
  const tagManagerArgs = {
    gtmId: 'G-43WM7MLFYL'
  }

  TagManager.initialize(tagManagerArgs)

  // Pixel
  const advancedMatching = { em: 'some@email.com' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
  const options = {
    autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
    debug: false, // enable logs
  };
  ReactPixel.init('1414749362676227', advancedMatching, options);

  ReactPixel.pageView(); // For tracking page view


  const SplashTiming = () => {
    const splashTime = LocalStorage.LocalGetItem('splash');

    if (splashTime === 'true') {
      setSplashFlag(false)
    } else {
      setSplashFlag(true)
    }

  }

  const SetFlagSplash = () => {
    LocalStorage.LocalSetItem('splash', true);
    setSplashFlag(false)
  }

  useEffect(() => {
    // SplashTiming();

  }, [])



  return (
    // Without Header 
    <Router>
      <Routes>
        <Route path='/success' element={<RegisterSuccessful />} />
        <Route path='/camp' element={<CampaignSuccess />} />
        <Route path='/support-campaign' element={<SupportCampaign />} />

        <Route path="/*" element={<WithHeader />} />
      </Routes>
      {/* <Splash active={splashFlag} Handler={SetFlagSplash} EndHangler = {SetFlagSplash} /> */}
    </Router>
  );
}

export default App;


const WithHeader = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/campaign" element={<Blog />} />
        <Route path="/register" element={<Form />} />
        <Route path="/student" element={<StudentEdition />} />
        <Route path="/studentform" element={<StudentForm />} />
        {/* <Route path="/event-register" element={<Eventregister />} /> */}
        <Route path="/winner" element={<Winner />} />


        <Route path="/*" element={<PageNotFound />} />


      </Routes>
      <Footer />

    </>
  )
}

