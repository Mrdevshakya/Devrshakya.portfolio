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
                className="hidden md:flex items-center justify-center space-x-12"
              >
                <a href="#home" className="nav-link">HOME</a>
                <a href="#about" className="nav-link">ABOUT</a>
                <a href="#skills" className="nav-link">SKILLS</a>
                <a href="#experience" className="nav-link">EXPERIENCE</a>
                <a href="#projects" className="nav-link">PROJECTS</a>
                <a href="#services" className="nav-link">SERVICES</a>
                <a href="#testimonials" className="nav-link">TESTIMONIALS</a>
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
                  <a href="#skills" className="nav-link" onClick={() => setIsMenuOpen(false)}>SKILLS</a>
                  <a href="#experience" className="nav-link" onClick={() => setIsMenuOpen(false)}>EXPERIENCE</a>
                  <a href="#projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>PROJECTS</a>
                  <a href="#services" className="nav-link" onClick={() => setIsMenuOpen(false)}>SERVICES</a>
                  <a href="#testimonials" className="nav-link" onClick={() => setIsMenuOpen(false)}>TESTIMONIALS</a>
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
                <div className="glass-panel p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-secondary">Who I Am</h3>
                  <p className="text-lg text-textSecondary leading-relaxed">
                    I'm a passionate UI/UX designer and full-stack developer with over 5 years of experience in creating
                    beautiful, functional, and user-centered digital experiences. My journey in tech started with a
                    deep curiosity for creating things that make a difference in people's lives.
                  </p>
                  <p className="text-lg text-textSecondary leading-relaxed">
                    With expertise in both design and development, I bridge the gap between aesthetics and functionality
                    to deliver compelling solutions that not only look great but also perform exceptionally well.
                  </p>
                </div>

                <div className="glass-panel p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-secondary">Education & Certification</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium">Bachelor of Technology in Computer Science</h4>
                      <p className="text-textSecondary">University Name • 2018-2022</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Advanced UI/UX Design Certification</h4>
                      <p className="text-textSecondary">Design Institute • 2021</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Full Stack Development Certification</h4>
                      <p className="text-textSecondary">Tech Academy • 2020</p>
                    </div>
                  </div>
                </div>

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
                className="space-y-6"
              >
                <div className="glass-panel p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-secondary">My Expertise</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: 'UI/UX Design', level: '95%' },
                      { name: 'React Development', level: '90%' },
                      { name: 'Node.js', level: '85%' },
                      { name: 'TypeScript', level: '88%' },
                      { name: 'Three.js', level: '80%' },
                      { name: 'TailwindCSS', level: '92%' }
                    ].map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between">
                          <span>{skill.name}</span>
                          <span className="text-secondary">{skill.level}</span>
                        </div>
                        <div className="h-2 bg-primary/30 rounded-full">
                          <div
                            className="h-full bg-secondary rounded-full"
                            style={{ width: skill.level }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-panel p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-secondary">Languages</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>English</span>
                      <span>Professional</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Hindi</span>
                      <span>Native</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-primary/50">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title"
            >
              My Skills
            </motion.h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Frontend Development */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-panel p-6 space-y-4"
              >
                <h3 className="text-xl font-semibold text-secondary">Frontend Development</h3>
                <div className="space-y-3">
                  {[
                    { skill: 'React.js', level: 'Advanced' },
                    { skill: 'Next.js', level: 'Advanced' },
                    { skill: 'TypeScript', level: 'Advanced' },
                    { skill: 'TailwindCSS', level: 'Expert' },
                    { skill: 'Three.js', level: 'Intermediate' },
                    { skill: 'Framer Motion', level: 'Advanced' }
                  ].map((item) => (
                    <div key={item.skill} className="flex justify-between items-center">
                      <span className="text-textSecondary">{item.skill}</span>
                      <span className="text-secondary text-sm">{item.level}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Backend Development */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-panel p-6 space-y-4"
              >
                <h3 className="text-xl font-semibold text-secondary">Backend Development</h3>
                <div className="space-y-3">
                  {[
                    { skill: 'Node.js', level: 'Advanced' },
                    { skill: 'Express.js', level: 'Advanced' },
                    { skill: 'MongoDB', level: 'Advanced' },
                    { skill: 'PostgreSQL', level: 'Intermediate' },
                    { skill: 'GraphQL', level: 'Intermediate' },
                    { skill: 'REST APIs', level: 'Expert' }
                  ].map((item) => (
                    <div key={item.skill} className="flex justify-between items-center">
                      <span className="text-textSecondary">{item.skill}</span>
                      <span className="text-secondary text-sm">{item.level}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Design Skills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="glass-panel p-6 space-y-4"
              >
                <h3 className="text-xl font-semibold text-secondary">Design</h3>
                <div className="space-y-3">
                  {[
                    { skill: 'Figma', level: 'Expert' },
                    { skill: 'Adobe XD', level: 'Advanced' },
                    { skill: 'Photoshop', level: 'Intermediate' },
                    { skill: 'Illustrator', level: 'Intermediate' },
                    { skill: 'UI Design', level: 'Expert' },
                    { skill: 'UX Research', level: 'Advanced' }
                  ].map((item) => (
                    <div key={item.skill} className="flex justify-between items-center">
                      <span className="text-textSecondary">{item.skill}</span>
                      <span className="text-secondary text-sm">{item.level}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Additional Skills */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              {/* Tools & Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-panel p-6 space-y-4"
              >
                <h3 className="text-xl font-semibold text-secondary">Tools & Technologies</h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    'Git', 'Docker', 'AWS',
                    'Firebase', 'Vercel', 'Netlify',
                    'VS Code', 'Postman', 'Jest',
                    'Redux', 'Webpack', 'npm/yarn'
                  ].map((tool) => (
                    <div key={tool} className="skill-badge text-sm">
                      {tool}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Soft Skills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-panel p-6 space-y-4"
              >
                <h3 className="text-xl font-semibold text-secondary">Soft Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Problem Solving',
                    'Team Leadership',
                    'Communication',
                    'Time Management',
                    'Project Management',
                    'Agile Methodology'
                  ].map((skill) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <span className="text-secondary">✓</span>
                      <span className="text-textSecondary">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title"
            >
              Work Experience
            </motion.h2>

            <div className="space-y-8">
              {/* Timeline */}
              <div className="relative">
                {/* Line */}
                <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-secondary/30 transform -translate-x-1/2"></div>

                {/* Experience Items */}
                <div className="space-y-12">
                  {/* Experience 1 */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative grid md:grid-cols-2 gap-8 md:gap-0"
                  >
                    <div className="md:text-right md:pr-12">
                      <div className="glass-panel p-6 space-y-2 md:ml-auto md:mr-0">
                        <h3 className="text-xl font-semibold text-secondary">Senior Full Stack Developer</h3>
                        <p className="text-textSecondary">Tech Company Name</p>
                        <p className="text-sm text-textSecondary">2021 - Present</p>
                      </div>
                    </div>
                    <div className="md:pl-12">
                      <div className="glass-panel p-6 space-y-3">
                        <ul className="list-disc list-inside space-y-2 text-textSecondary">
                          <li>Led a team of 5 developers in building a large-scale web application</li>
                          <li>Implemented modern frontend architecture using React and Next.js</li>
                          <li>Improved application performance by 40%</li>
                          <li>Mentored junior developers and conducted code reviews</li>
                        </ul>
                      </div>
                    </div>
                    {/* Dot */}
                    <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 bg-secondary rounded-full transform -translate-x-1/2"></div>
                  </motion.div>

                  {/* Experience 2 */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative grid md:grid-cols-2 gap-8 md:gap-0"
                  >
                    <div className="md:text-right md:pr-12">
                      <div className="glass-panel p-6 space-y-2 md:ml-auto md:mr-0">
                        <h3 className="text-xl font-semibold text-secondary">UI/UX Designer & Developer</h3>
                        <p className="text-textSecondary">Design Studio Name</p>
                        <p className="text-sm text-textSecondary">2019 - 2021</p>
                      </div>
                    </div>
                    <div className="md:pl-12">
                      <div className="glass-panel p-6 space-y-3">
                        <ul className="list-disc list-inside space-y-2 text-textSecondary">
                          <li>Designed and developed user interfaces for 20+ client projects</li>
                          <li>Created responsive designs using modern CSS frameworks</li>
                          <li>Conducted user research and usability testing</li>
                          <li>Collaborated with clients to gather requirements</li>
                        </ul>
                      </div>
                    </div>
                    {/* Dot */}
                    <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 bg-secondary rounded-full transform -translate-x-1/2"></div>
                  </motion.div>

                  {/* Experience 3 */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative grid md:grid-cols-2 gap-8 md:gap-0"
                  >
                    <div className="md:text-right md:pr-12">
                      <div className="glass-panel p-6 space-y-2 md:ml-auto md:mr-0">
                        <h3 className="text-xl font-semibold text-secondary">Frontend Developer Intern</h3>
                        <p className="text-textSecondary">Startup Name</p>
                        <p className="text-sm text-textSecondary">2018 - 2019</p>
                      </div>
                    </div>
                    <div className="md:pl-12">
                      <div className="glass-panel p-6 space-y-3">
                        <ul className="list-disc list-inside space-y-2 text-textSecondary">
                          <li>Developed responsive web applications using React</li>
                          <li>Worked with senior developers to implement new features</li>
                          <li>Learned modern web development practices</li>
                          <li>Participated in daily stand-ups and sprint planning</li>
                        </ul>
                      </div>
                    </div>
                    {/* Dot */}
                    <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 bg-secondary rounded-full transform -translate-x-1/2"></div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="py-20 bg-primary/50"
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
              {/* Aren Logo Project */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="project-card group"
              >
                <div className="relative aspect-video flex items-center justify-center overflow-hidden bg-transparent">
                  <img 
                    src="/images/A.png" 
                    alt="Aren Logo" 
                    className="w-full h-full object-contain mix-blend-difference"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold mb-2 text-secondary">Aren Logo Design</h3>
                  <p className="text-textSecondary mb-4">
                    Minimalist and modern logo design for Aren brand. Created with attention to typography and clean aesthetics.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-secondary/10 rounded-full text-secondary text-sm">Logo Design</span>
                    <span className="px-3 py-1 bg-secondary/10 rounded-full text-secondary text-sm">Branding</span>
                    <span className="px-3 py-1 bg-secondary/10 rounded-full text-secondary text-sm">Typography</span>
                  </div>
                  <div className="flex space-x-4">
                    <a href="#" className="text-secondary hover:text-white transition-colors">
                      View Project
                    </a>
                    <a href="#" className="text-secondary hover:text-white transition-colors">
                      Source Files
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Other Projects */}
              <motion.div
                key="c3-project"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="project-card group"
              >
                <div className="relative aspect-video flex items-center justify-center overflow-hidden bg-transparent">
                  <img 
                    src="/images/c3.png" 
                    alt="C3 Logo" 
                    className="w-full h-full object-contain mix-blend-difference"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold mb-2 text-secondary">C3 Brand Identity</h3>
                  <p className="text-textSecondary mb-4">
                    Modern and bold logo design for C3 brand. Focused on geometric shapes and strong visual impact.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-secondary/10 rounded-full text-secondary text-sm">Logo Design</span>
                    <span className="px-3 py-1 bg-secondary/10 rounded-full text-secondary text-sm">Brand Identity</span>
                    <span className="px-3 py-1 bg-secondary/10 rounded-full text-secondary text-sm">Minimalist</span>
                  </div>
                  <div className="flex space-x-4">
                    <a href="#" className="text-secondary hover:text-white transition-colors">
                      View Project
                    </a>
                    <a href="#" className="text-secondary hover:text-white transition-colors">
                      Source Files
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Project 3 - Tarot Reading Website */}
              <motion.div
                key="tarot-project"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="project-card group"
              >
                <div className="relative aspect-video flex items-center justify-center overflow-hidden bg-transparent">
                  <img 
                    src="/images/tarot-preview.png" 
                    alt="Tarot Reading Website" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold mb-2 text-secondary">Mystictarotvision Website</h3>
                  <p className="text-textSecondary mb-4">
                    A modern and mystical website for tarot reading services. Features include horoscope readings, 
                    membership plans, and detailed astrological insights.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-secondary/10 rounded-full text-secondary text-sm">React.js</span>
                    <span className="px-3 py-1 bg-secondary/10 rounded-full text-secondary text-sm">Responsive Design</span>
                    <span className="px-3 py-1 bg-secondary/10 rounded-full text-secondary text-sm">UI/UX</span>
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href="https://mrdevshakya.github.io/Tarotreading-website/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-white transition-colors"
                    >
                      View Project
                    </a>
                    <a 
                      href="https://github.com/Mrdevshakya/Tarotreading-website" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-white transition-colors"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-primary/50">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title"
            >
              Services I Offer
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* UI/UX Design */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-panel p-8 space-y-4 hover:shadow-neon transition-all duration-300"
              >
                <div className="text-4xl text-secondary mb-4">🎨</div>
                <h3 className="text-xl font-semibold text-secondary">UI/UX Design</h3>
                <p className="text-textSecondary">
                  Creating beautiful, intuitive interfaces that users love. From wireframes to final designs.
                </p>
                <ul className="space-y-2 text-textSecondary">
                  <li>• User Interface Design</li>
                  <li>• User Experience Design</li>
                  <li>• Wireframing & Prototyping</li>
                  <li>• Design Systems</li>
                  <li>• Mobile App Design</li>
                </ul>
              </motion.div>

              {/* Web Development */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-panel p-8 space-y-4 hover:shadow-neon transition-all duration-300"
              >
                <div className="text-4xl text-secondary mb-4">💻</div>
                <h3 className="text-xl font-semibold text-secondary">Web Development</h3>
                <p className="text-textSecondary">
                  Building fast, responsive, and scalable web applications using modern technologies.
                </p>
                <ul className="space-y-2 text-textSecondary">
                  <li>• Frontend Development</li>
                  <li>• Backend Development</li>
                  <li>• API Development</li>
                  <li>• E-commerce Solutions</li>
                  <li>• CMS Development</li>
                </ul>
              </motion.div>

              {/* Mobile Development */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="glass-panel p-8 space-y-4 hover:shadow-neon transition-all duration-300"
              >
                <div className="text-4xl text-secondary mb-4">📱</div>
                <h3 className="text-xl font-semibold text-secondary">Mobile Development</h3>
                <p className="text-textSecondary">
                  Developing cross-platform mobile applications that work seamlessly on all devices.
                </p>
                <ul className="space-y-2 text-textSecondary">
                  <li>• React Native Apps</li>
                  <li>• Progressive Web Apps</li>
                  <li>• App Optimization</li>
                  <li>• App Maintenance</li>
                  <li>• App Testing</li>
                </ul>
              </motion.div>
            </div>

            {/* Additional Services */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              {/* Consultation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-panel p-8 space-y-4 hover:shadow-neon transition-all duration-300"
              >
                <div className="text-4xl text-secondary mb-4">💡</div>
                <h3 className="text-xl font-semibold text-secondary">Technical Consultation</h3>
                <p className="text-textSecondary">
                  Providing expert advice on technical decisions, architecture, and best practices.
                </p>
                <ul className="space-y-2 text-textSecondary">
                  <li>• Architecture Planning</li>
                  <li>• Technology Selection</li>
                  <li>• Code Review</li>
                  <li>• Performance Optimization</li>
                </ul>
              </motion.div>

              {/* Training */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-panel p-8 space-y-4 hover:shadow-neon transition-all duration-300"
              >
                <div className="text-4xl text-secondary mb-4">📚</div>
                <h3 className="text-xl font-semibold text-secondary">Training & Workshops</h3>
                <p className="text-textSecondary">
                  Conducting training sessions and workshops for teams and individuals.
                </p>
                <ul className="space-y-2 text-textSecondary">
                  <li>• Web Development</li>
                  <li>• UI/UX Design</li>
                  <li>• Best Practices</li>
                  <li>• Team Mentoring</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title"
            >
              Client Testimonials
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-panel p-6 space-y-4"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                    <span className="text-2xl">👨‍💼</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary">John Smith</h3>
                    <p className="text-sm text-textSecondary">CEO, Tech Corp</p>
                  </div>
                </div>
                <p className="text-textSecondary italic">
                  "Devraj delivered an exceptional website that exceeded our expectations. His attention to detail
                  and understanding of our needs was impressive."
                </p>
                <div className="flex text-secondary">
                  {'★'.repeat(5)}
                </div>
              </motion.div>

              {/* Testimonial 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-panel p-6 space-y-4"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                    <span className="text-2xl">👩‍💼</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary">Sarah Johnson</h3>
                    <p className="text-sm text-textSecondary">Design Lead, Creative Studio</p>
                  </div>
                </div>
                <p className="text-textSecondary italic">
                  "Working with Devraj was a pleasure. His UI/UX skills are top-notch, and he has a great eye
                  for design. Highly recommended!"
                </p>
                <div className="flex text-secondary">
                  {'★'.repeat(5)}
                </div>
              </motion.div>

              {/* Testimonial 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="glass-panel p-6 space-y-4"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                    <span className="text-2xl">👨‍💻</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary">Mike Brown</h3>
                    <p className="text-sm text-textSecondary">CTO, Startup Inc</p>
                  </div>
                </div>
                <p className="text-textSecondary italic">
                  "Devraj's technical expertise and problem-solving skills are remarkable. He helped us
                  build a complex web application with ease."
                </p>
                <div className="flex text-secondary">
                  {'★'.repeat(5)}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-primary/50">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title"
            >
              Get In Touch
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="glass-panel p-6 space-y-6">
                  <h3 className="text-xl font-semibold text-secondary">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                        <span className="text-xl">📧</span>
                      </div>
                      <div>
                        <p className="text-sm text-textSecondary">Email</p>
                        <a href="mailto:contact@devrajsingh.com" className="text-secondary hover:text-white transition-colors">
                          contact@devrajsingh.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                        <span className="text-xl">📱</span>
                      </div>
                      <div>
                        <p className="text-sm text-textSecondary">Phone</p>
                        <a href="tel:+1234567890" className="text-secondary hover:text-white transition-colors">
                          +1 (234) 567-890
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                        <span className="text-xl">📍</span>
                      </div>
                      <div>
                        <p className="text-sm text-textSecondary">Location</p>
                        <p className="text-secondary">New Delhi, India</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass-panel p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-secondary">Follow Me</h3>
                  <div className="flex space-x-4">
                    <a href="https://github.com/Mrdevshakya" target="_blank" rel="noopener noreferrer"
                       className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center
                                hover:bg-secondary/40 transition-colors">
                      <FiGithub className="text-xl" />
                    </a>
                    <a href="https://www.linkedin.com/in/devraj-singh-shakya-631271249/" target="_blank" rel="noopener noreferrer"
                       className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center
                                hover:bg-secondary/40 transition-colors">
                      <FiLinkedin className="text-xl" />
                    </a>
                    <a href="https://instagram.com/uxwith.dev" target="_blank" rel="noopener noreferrer"
                       className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center
                                hover:bg-secondary/40 transition-colors">
                      <FiInstagram className="text-xl" />
                    </a>
                    <a href="https://twitter.com/mr_devshakya" target="_blank" rel="noopener noreferrer"
                       className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center
                                hover:bg-secondary/40 transition-colors">
                      <FiTwitter className="text-xl" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-panel p-6 space-y-6"
              >
                <h3 className="text-xl font-semibold text-secondary">Send Me a Message</h3>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-textSecondary">First Name</label>
                      <input
                        type="text"
                        className="contact-input"
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-textSecondary">Last Name</label>
                      <input
                        type="text"
                        className="contact-input"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-textSecondary">Email</label>
                    <input
                      type="email"
                      className="contact-input"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-textSecondary">Subject</label>
                    <input
                      type="text"
                      className="contact-input"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-textSecondary">Message</label>
                    <textarea
                      className="contact-input min-h-[150px] resize-none"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full"
                  >
                    <span>Send Message</span>
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-textSecondary">
          <div className="container mx-auto px-6">
            <p>© {new Date().getFullYear()} Devraj Singh Shakya. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
