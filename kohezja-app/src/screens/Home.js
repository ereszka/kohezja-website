import React from 'react';
import Footer from '../components/Footer';
import MissionSection from '../components/MissionSection';
import PartnersSection from '../components/PartnersSection';
import ProjectsSection from '../components/ProjectsSection';
import DonateSection from '../components/DonateSection';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="main-title">
          <h1>Fundacja Kohezja</h1>
          Wspieramy osoby aktywistyczne od 2022
      </div>
      <MissionSection/>
      <ProjectsSection/>
      <DonateSection/>
      <PartnersSection/>
      <footer className="footer-component">
      <Footer/>
      </footer>
    </div>
  );
}

export default Home;