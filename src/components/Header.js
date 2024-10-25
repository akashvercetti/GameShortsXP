import React from 'react';
import './Header.css';
import logo from '../assets/icon.png'; // Adjust this path to your logo image
import googlePlayBadge from '../assets/google-play-badge.png'; // Path to your Google Play badge

const Header = () => {
  return (
    <header className="header">
      <a href="/home">
      <img src={logo} alt="App Logo" className="logo" />
      </a>
      <a href="https://play.google.com/store/apps/details?id=com.akashvercetti.gameshortsxp">
        <img
          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
          alt="Get it on Google Play"
          className="google-play-badge"
        />
      </a>
    </header>
  );
};

export default Header;
