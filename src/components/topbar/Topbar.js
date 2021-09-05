import React from 'react';
import './topbar.css';

export default function Topbar() {
  return (
    <header className="topBarContainer">
      <div className="logoContainer">
        <div className="logo">NEWS READER</div>
      </div>
      <div className="iconsContainer">
        <div className="icon">Register</div>
        <div className="icon">Sign In</div>
      </div>
    </header>
  );
}
