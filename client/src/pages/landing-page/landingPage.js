import React, { useEffect, useState } from 'react';
import './landingPage.css';
import Header from '../../components/sections/Header/Header';
import Hero from '../../components/sections/Hero/Hero';
import WelcomeContent from '../../components/sections/Content/WelcomeContent';
import Steps from '../../components/sections/Steps/Steps';
import Contact from '../../components/sections/Contact/Contact';
import Footer from '../../components/sections/Footer/Footer';

const LandingPage = (props) => {
    return (
        <div>
          <Header />
          <Hero />
          <WelcomeContent />
          <Steps />
          <Contact />
          <Footer />
        </div>
    );
}

export default LandingPage;