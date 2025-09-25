import React, { useState } from 'react';
import './home.scss';
import { motion } from 'framer-motion';
import MoonLogo from '../assets/moonliht.jpg';
import Hero from '../assets/hero4.png';

import Skill from '../assets/skills.png'
import Book from '../assets/bookstore.jpg'
import Net from '../assets/pop.png'
import Cars from '../assets/cars.jpg'
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
          href="https://graceful-tartufo-94bb15.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="app-link"
          variants={imageVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
           <div className="app-text">
            <h3>Car Rentals</h3>
            <p>
              The Car Rental Management System is a full-stack web application designed to simplify the process of booking, renting, and managing cars. The project is built with a React.js frontend for an interactive user experience and a Spring Boot backend for a secure and scalable API.

The platform allows customers to browse available cars, view details, and make bookings online, while admins can manage the fleet, pricing, and reservations.
              <strong>https://graceful-tartufo-94bb15.netlify.app/</strong>
            </p>
          </div>
          <img src={Cars} alt="App Preview" className="app-image" />
        </motion.a>
          <motion.a
          href=" https://the-hive-portfolio.netlify.app" 
          target="_blank"
          rel="noopener noreferrer"
          className="app-link"
          variants={imageVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          
          <div className="app-text">
            <h3>The-hive-portfolio</h3>
            <p>
              The Hive is a modern and visually engaging portfolio designed to showcase creativity, technical skills, and personal projects in a clean, user-friendly format. Built with a focus on both aesthetics and functionality, it highlights your work across design, development, and problem-solving, making it ideal for attracting potential employers, collaborators, or clients. With dynamic sections for projects, about, contact, and possibly blogs or achievements, The Hive reflects a professional yet personal brand, emphasizing innovation, attention to detail, and a passion for digital craftsmans
              <strong>the-hive-portfilio.netlify.app</strong>
            </p>
          </div>


          <img src={Skill} alt="App Preview" className="app-image" />
        </motion.a>
          <motion.a
          href="https://book-store-v2.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="app-link"
          variants={imageVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="app-text">
            <h3>Book Store</h3>
            <p>
             The Book Service API is a RESTful backend built with Spring Boot and MySQL, forming the core of a full stack book store application. It manages all book-related data and exposes endpoints for the frontend (typically built with React using Vite) to interact with. The service allows users to retrieve all books, get details of a specific book by ID, add new books (used by admins), update existing ones, and delete books from the system. It defines a Book model containing fields such as bookId, title, author, description, price, and createdAt. These operations are exposed via HTTP methods like GET, POST, PUT, and DELETE through the /books endpoint. The backend also handles CORS configuration to allow requests from the frontend running on http://localhost:5173. This setup enables smooth integration with the frontend, where users can view book listings, search for a book, and manage inventory if they have admin privileges. The API is designed to be deployed on platforms like Render, while the frontend communicates with it using Axios or Fetch to create a seamless user experience.
              <strong>book-store-v2.vercel.app</strong>
            </p>
          </div>
          <img src={Book} alt="App Preview" className="app-image" />
        </motion.a>
        <motion.a
  href="https://github.com/RichardCypher4/Netflix-clone"
  target="_blank"
  rel="noopener noreferrer"
  className="app-link"
  variants={imageVariants}
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
>

  
  
  <div className="app-text">
    <h3>Netflix Clone (React Native)</h3>
    <p>
      The React Native Netflix Clone is a mobile streaming UI replica built using React Native and Expo. It mimics the core layout and functionality of the Netflix app, including featured banners, movie thumbnails, category browsing, and smooth horizontal carousels. The app uses dynamic navigation and scalable components with custom styling, and it's optimized for mobile responsiveness and performance. It's a UI-focused clone ideal for demonstrating React Native layout skills, state handling, and screen transitions.
      <strong> github.com/RichardCypher4/Netflix-clone </strong>
    </p>
  </div>
  <img src={Net} alt="App Preview" className="app-image" />
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