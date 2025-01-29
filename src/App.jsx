import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiMenu, FiX, FiInstagram } from 'react-icons/fi'
import { useInView } from 'react-intersection-observer'
import { TypeAnimation } from 'react-type-animation'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-primary relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primaryDark via-primary to-primaryLight opacity-90" />
        
        {/* Animated blobs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] morph-blob" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] morph-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] morph-blob animation-delay-4000" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-20" />
      </div>

      {/* Content */}
      <div className="relative">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between md:justify-center relative">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-bold text-secondary md:absolute md:left-6"
              >
                <span className="hover:text-white transition-colors duration-300">DS</span>
              </motion.div>

              {/* Desktop Menu */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="hidden md:flex items-center justify-center space-x-16"
              >
                <a href="#home" className="nav-link">HOME</a>
                <a href="#about" className="nav-link">ABOUT</a>
                <a href="#projects" className="nav-link">PROJECTS</a>
                <a href="#contact" className="nav-link">CONTACT</a>
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-2xl text-secondary hover:text-white transition-colors duration-300"
              >
                {isMenuOpen ? <FiX /> : <FiMenu />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden backdrop-blur-md bg-primary/30 border-t border-white/10"
              >
                <div className="container mx-auto px-6 py-4 flex flex-col items-center space-y-4">
                  <a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>HOME</a>
                  <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>ABOUT</a>
                  <a href="#projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>PROJECTS</a>
                  <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>CONTACT</a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center pt-20">
          <div className="container mx-auto px-6">
            <div className="text-center relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-secondary mb-4 tracking-wider font-medium"
                >
                  Welcome to my portfolio
                </motion.p>
                
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-6xl md:text-7xl font-bold mb-4 relative"
                >
                  Hi, I'm{' '}
                  <TypeAnimation
                    sequence={[
                      'Devraj Singh Shakya',
                      2000,
                      '',
                      500,
                      "UI/UX Designer",
                      1500,
                      "Web Developer",
                      1500,
                      "App Developer",
                      1500,
                      '',
                      500,
                    ]}
                    wrapper="span"
                    speed={35}
                    deletionSpeed={45}
                    repeat={Infinity}
                    cursor={false}
                    className="text-secondary relative inline-block
                             after:content-[''] after:absolute after:w-full 
                             after:h-1 after:bg-secondary/20 after:-bottom-2 
                             after:left-0"
                  />
                </motion.h1>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl md:text-3xl text-textSecondary mb-12"
                >
                  Crafting Digital Experiences
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
                >
                  <a href="#projects" className="btn-primary">
                    <span>View My Work</span>
                  </a>
                  <a href="#contact" className="btn-primary">
                    <span>Contact Me</span>
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title"
            >
              About Me
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p className="text-lg text-textSecondary leading-relaxed">
                  I'm a passionate UI/UX designer and developer with a keen eye for
                  creating beautiful, functional, and user-centered digital
                  experiences.
                </p>
                <p className="text-lg text-textSecondary leading-relaxed">
                  With expertise in both design and development, I bridge the gap
                  between aesthetics and functionality to deliver compelling
                  solutions.
                </p>
                <div className="flex space-x-6">
                  <motion.a
                    whileHover={{ y: -3 }}
                    href="https://github.com/Mrdevshakya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl hover:text-secondary transition-colors"
                  >
                    <FiGithub />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -3 }}
                    href="https://www.linkedin.com/in/devraj-singh-shakya-631271249/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl hover:text-secondary transition-colors"
                  >
                    <FiLinkedin />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -3 }}
                    href="https://instagram.com/uxwith.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl hover:text-secondary transition-colors"
                  >
                    <FiInstagram />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -3 }}
                    href="https://twitter.com/mr_devshakya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl hover:text-secondary transition-colors"
                  >
                    <FiTwitter />
                  </motion.a>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {['React', 'TypeScript', 'Figma', 'UI/UX', 'Node.js', 'TailwindCSS'].map(
                  (skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="skill-badge"
                    >
                      {skill}
                    </motion.div>
                  )
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="min-h-screen flex items-center relative"
        >
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title"
            >
              My Projects
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((project) => (
                <motion.div
                  key={project}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="project-card"
                >
                  <h3 className="text-xl font-bold mb-2">Project {project}</h3>
                  <p className="text-textSecondary mb-4">
                    Description of project {project}. Add your project details here.
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-secondary hover:underline">
                      View Project
                    </a>
                    <a href="#" className="text-secondary hover:underline">
                      Source Code
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen flex items-center relative"
        >
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title"
            >
              Get in Touch
            </motion.h2>
            <div className="max-w-2xl mx-auto">
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-textSecondary mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full bg-primary/30 border border-textSecondary/20 rounded p-3 focus:border-secondary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-textSecondary mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-primary/30 border border-textSecondary/20 rounded p-3 focus:border-secondary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-textSecondary mb-2">Message</label>
                  <textarea
                    rows="4"
                    className="w-full bg-primary/30 border border-textSecondary/20 rounded p-3 focus:border-secondary focus:outline-none"
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </motion.form>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
