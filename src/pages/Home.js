import React from 'react';
import './Home.css';
import screenshot1 from '../assets/screenshot1.png'; // Path to your screenshot images
import screenshot2 from '../assets/screenshot2.png';
import screenshot3 from '../assets/screenshot3.png';
import screenshot4 from '../assets/screenshot4.png';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section with Screenshots */}
      <section className="hero-section">
        <h1 className="hero-title">Gaming News in 60-100 words</h1>
        <div className="screenshot-gallery">
          <img src={screenshot1} alt="Screenshot 1" className="screenshot" />
          <img src={screenshot2} alt="Screenshot 2" className="screenshot" />
          <img src={screenshot3} alt="Screenshot 3" className="screenshot" />
          <img src={screenshot4} alt="Screenshot 4" className="screenshot" />
        </div>
      </section>
    </div>
  );
};

export default Home;
