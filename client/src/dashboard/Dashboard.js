import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPalette, FaBox, FaBolt, FaGem, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaSun, FaMoon, FaPlay } from 'react-icons/fa';
import { IoMdBusiness } from 'react-icons/io';
import { GiGreekTemple, GiModernCity, GiCastle, GiTargeting } from 'react-icons/gi';
import { MdMovie } from 'react-icons/md';
import './Dashboard.css';
import { useTheme } from '../context/ThemeContext';
import ModelViewer from '../components/3D/ModelViewer';
import sofaModel from '../assets/3D/4-pink sofa.glb';
import lanternModel from '../assets/3D/CMD.glb';
import burgerModel from '../assets/3D/burger.glb';
import lampModel from '../assets/3D/lamp.glb';
import carModel from '../assets/3D/r35.glb';
import gameBg from '../assets/images/game_bg.png';

const Dashboard = () => {
  const { theme, toggleTheme } = useTheme();
  const featuredAssets = [
    { id: 1, name: 'Star', price: 'CHF 200', category: 'Architecture', image: <GiGreekTemple /> },
    { id: 2, name: 'Alevary', price: 'CHF 350', category: 'Sci-Fi', image: <GiModernCity /> },
    { id: 3, name: 'Charmer', price: 'CHF 220', category: 'Fantasy', image: <GiCastle /> },
    { id: 4, name: 'Itraeliors', price: 'CHF 180', category: 'Interior', image: <IoMdBusiness /> },
  ];

  const models = [lanternModel, sofaModel, burgerModel, lampModel, carModel];

  // Countdown Logic
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setFullYear(targetDate.getFullYear() + 1); // 1 year from now

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ months, days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <h2><MdMovie style={{ verticalAlign: 'middle', marginRight: '8px' }} /> Dymount Studios</h2>
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/assets">Assets</Link></li>
            <li><a href="#collections">Collections</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="nav-actions">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
            <Link to="/assets">
              <button className="cta-button">Explore Assets</button>
            </Link>
          </div>
        </div>
      </nav>
{/* Latest News Section */}
      <section className="latest-news" style={{ backgroundImage: `url(${gameBg})` }}>
        <div className="news-overlay">
          <div className="news-content">
            <h3 className="news-subtitle">Latest News</h3>
            <h2 className="news-title">Obsidian Shadow is coming soon!</h2>
            <p className="news-description">
              Prepare yourself for an epic journey into the unknown. The darkness is rising, and only the brave will survive.
            </p>

            <div className="countdown-container">
              <div className="countdown-item">
                <span className="countdown-value">{timeLeft.months}</span>
                <span className="countdown-label">Months</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-value">{timeLeft.days}</span>
                <span className="countdown-label">Days</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-value">{timeLeft.hours}</span>
                <span className="countdown-label">Hours</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-value">{timeLeft.minutes}</span>
                <span className="countdown-label">Minutes</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-value">{timeLeft.seconds}</span>
                <span className="countdown-label">Seconds</span>
              </div>
            </div>

            <div className="news-actions">
              <button className="play-button">
                <FaPlay />
              </button>
              <span className="watch-trailer">Watch the trailer</span>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>We are Dymount Studios</h2>
          
          <p>
            We are a team of passionate 3D artists and designers who create high-quality 3D models,<br /> textures, and animations for your next project.

            Ready to use in your favorite 3D software.
          </p>
          <div className="hero-buttons">
            <Link to="/assets">
              <button className="btn-primary">Browse Assets ➜</button>
            </Link>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-placeholder" style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}>
            <ModelViewer models={models} />
          </div>
          
        </div>
      </section>
    

      

      

      

      

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3><MdMovie style={{ verticalAlign: 'middle', marginRight: '8px' }} /> Dymount Studios</h3>
            <p>Premium 3D assets for creative professionals</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#support">Support</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#license">License</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="#facebook"><FaFacebookF /></a>
              <a href="#twitter"><FaTwitter /></a>
              <a href="#instagram"><FaInstagram /></a>
              <a href="#linkedin"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Dymount Studios. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;