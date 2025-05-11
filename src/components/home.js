import React, { useState } from 'react';
import './home.scss';
import { motion } from 'framer-motion';
import MoonLogo from '../assets/moonliht.jpg';
import AppPreview from '../assets/AppPreview.webp';
import Hero from '../assets/hero4.png'
import Footer from './footer'

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const welcomeVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const portfolioVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.1 } },
  };

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <motion.div
        className="moon-logo"
        onClick={toggleTheme}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <img src={MoonLogo} alt="Moon Logo" />
      </motion.div>

      <div className="content">
        <motion.h1
          className="welcome-top"
          initial="hidden"
          animate="visible"
          variants={welcomeVariants}
        >
          WELCOME
        </motion.h1>
        <motion.h1
          className="welcome-bottom"
          initial="hidden"
          animate="visible"
          variants={welcomeVariants}
        >
          TO MY SPACE
        </motion.h1>

        <motion.p
          className="description"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          I’m a passionate Software Engineer with hands-on experience in building modern, responsive web and mobile applications.
My core expertise spans Java, React, React Native, Spring Boot, MongoDB, Junit, Javascript, and Git. I specialize in crafting clean, user-friendly UIs and scalable backend services.
    I’m also exploring AI and machine learning to expand my skills and eventually transition into an AI Engineering role. My long-term goal is to become a Principal Software Engineer in AI Infrastructure, and I enjoy building responsive, user-focused applications that make a real-world impact.
        </motion.p>
      </div>

      <motion.div
        className="portfolio-section"
        initial="hidden"
        animate="visible"
        variants={portfolioVariants}
      >
        <h2 className="portfolio">PORTFOLIO</h2>
        <motion.a
          href="https://clone-dispatch.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="app-link"
          variants={imageVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="app-text">
            <h3>Clone-Dispatch</h3>
            <p>
              A React application designed to streamline the dispatch process for clone operations. It provides an interface for managing clone dispatch requests, tracking status updates, and facilitating communication between clone operators and dispatch teams.
              <strong>clone-dispatch.netlify.app</strong>
            </p>
          </div>
          <img src={AppPreview} alt="App Preview" className="app-image" />
        </motion.a>
          <motion.a
          href="https://appartment-c.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="app-link"
          variants={imageVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="app-text">
            <h3>Appartment</h3>
            <p>
             Built with React and Framer Motion, the sidebar tracks active routes and user authentication states. Protected routes restrict unauthorized access, and error boundaries handle loading failures gracefully. Real-time notifications appear as badges, and a floating.
             <strong>
              appartment-c.netlify.app
             </strong>
            </p>
          </div>
          <img src={Hero} alt="App Preview" className="app-image" />
        </motion.a>
      </motion.div>
      <Footer/>
    </div>
  );
}

export default Home;