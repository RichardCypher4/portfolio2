import AppPreview from '../assets/AppPreview.webp';


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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={AppPreview} alt="App Preview" className="app-image" />
            <div className="app-text">
              <h3>Delink</h3>
              <p>
                Delink is a cutting-edge platform designed to empower Base Name holders by enabling them to create personalized and custom links, blending innovation with simplicity. The platform ensures every Base Name is not just a static identifier but a dynamic and customizable link that reflects the owner's identity. With Delink, users can connect their Base Name with their personal or professional links, generating custom URLs like: nuelyoungtech.base.eth.delink.click
              </p>
            </div>
          </motion.a>
        </motion.div>