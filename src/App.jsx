import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Code, Briefcase, GraduationCap, ExternalLink, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import quicktrainImage from './assets/images/quicktrain.PNG';
import ELObot from './assets/images/elobot.PNG';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [scrolling, setScrolling] = useState(null);

  const scrollToSection = (sectionId) => {
    setScrolling(sectionId)
    setActiveSection(sectionId);

    const element = document.getElementById(sectionId);
    if(element){
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }

    setTimeout(() => {
      setScrolling(null);
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if(!scrolling){
        const sections = ['about', 'experience', 'projects', 'education', 'skills', 'extras'];
        const scrollPosition = window.scrollY + 100;

        for(let i = sections.length - 1; i >= 0; i--){
          const section = document.getElementById(sections[i]);
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolling]);

  const personalInfo = {
    firstName: "Seungwon",
    nickname: "Josh",
    lastName: "Hong",
    title: "Software Engineering",
    university: "University of Michigan",
    year: "Sophomore",
    location: "Ann Arbor, MI",
    email: "josh.seungwon.hong@gmail.com"
  };

  const skills = [
    { name: "C++"},
    { name: "Python"},
    { name: "JavaScript"},
    { name: "Java"},
    { name: "CSS"},
    { name: "React.js"},
    { name: "SQL"}
  ];

  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Klawsome",
      duration: "Fall 2025",
      description: "Designing and developing front-end web interface for improved customer interaction",
      technologies: ["React.js", "HTML", "CSS"]
    },
  ];

  const projects = [
    {
      title: "Quicktrain",
      description: "Fitness routine generator based on the user's biometrics and preferences.",
      technologies: ["React.js", "TailwindCSS", "FramerMotion", "Vite"],
      github: "https://github.com/yourlocaljosh/quicktrain",
      link: "https://www.quicktrain.fit",
      image: quicktrainImage
    },
    {
      title: "ELObot",
      description: "Competitive sports league essential: tracking, leaderboards, user statistics all in your Discord server.",
      technologies: ["Python", "Discord Bot API"],
      github: "https://github.com/yourlocaljosh/ELObot",
      image: ELObot
    },
  ];

  const education = [
    {
      degree: "Data Science + Computer Engineering",
      school: "University of Michigan | joshsw@umich.edu",
      duration: "2024 - 2028",
      gpa: "B.S.E.",
      coursework: ["Data Structures & Algorithms", "Discrete Mathematics", "Computer Organization", "Linear Algebra"]
    }
  ];

  const extrasItems = [
    {
      title: "Watch Me Code",
      description: "Watch me create the part of the website this very video is in",
      type: "video",
      media: "https://www.youtube.com/embed/",
      tags: ["Coding"]
    },
    {
      title: "Table Tennis Training",
      description: "I joined the Michigan Table Tennis Club recently, I'm really bad but I'm going to get good",
      type: "video",
      media: "https://www.youtube.com/embed/",
      tags: ["Sports"]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-sm border-b border-gray-800 z-50">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold text-blue-400"
          >
            joshsw
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {['about', 'experience', 'projects', 'education', 'skills', 'extras'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-colors ${
                  activeSection === section 
                    ? 'text-blue-400 border-b-2 border-blue-400' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-4"
          >
            <a href="https://github.com/yourlocaljosh" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/seungwon-hong-156375255/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <div className="w-px h-6 bg-gray-700"></div>
          </motion.div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-white">{personalInfo.firstName}</span>
              <span className="text-blue-400"> "{personalInfo.nickname}" </span>
              <span className="text-white">{personalInfo.lastName}</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">{personalInfo.title}</p>
            
            <div className="flex justify-center items-center space-x-6 mb-8">
              <a href="https://github.com/yourlocaljosh" target="_blank" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Github size={24} className="mr-2" />
                GitHub
              </a>
              <div className="w-px h-6 bg-gray-700"></div>
              <a href="https://www.linkedin.com/in/seungwon-hong-156375255/" target="_blank" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} className="mr-2" />
                LinkedIn
              </a>
            </div>
            
            <div className="w-32 h-px bg-gray-700 mx-auto mb-12"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-3 gap-8 mt-16"
          >
            <motion.div variants={itemVariants} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-colors">
              <Code className="text-blue-400 mb-4 mx-auto" size={32} />
              <h3 className="text-lg font-semibold mb-2">import Josh</h3>
              <p className="text-gray-400 text-sm">I'm passionate about building useful, impactful programs</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-colors">
              <Briefcase className="text-blue-400 mb-4 mx-auto" size={32} />
              <h3 className="text-lg font-semibold mb-2">Experiences</h3>
              <p className="text-gray-400 text-sm">Incoming intern at ???</p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-colors">
              <GraduationCap className="text-blue-400 mb-4 mx-auto" size={32} />
              <h3 className="text-lg font-semibold mb-2">Academics</h3>
              <p className="text-gray-400 text-sm">I know the website is empty. I just made it! Stay tuned for cool stuff.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-gray-800/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <div className="w-16 h-1 bg-blue-400 mx-auto"></div>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
                <h3 className="text-xl font-semibold mb-4">Personal Info</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">University</span>
                    <span className="text-white">{personalInfo.university}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Year</span>
                    <span className="text-white">{personalInfo.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Location</span>
                    <span className="text-white">{personalInfo.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Email</span>
                    <span className="text-white">{personalInfo.email}</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-gray-300 leading-relaxed">
                Passion, work-ethic, ambition- yeah I got what everyone else has.
                What sets me apart from others? I've run into my own issues that I took to VSCode to solve, leading to community impact and success.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Competitive sports without a proper system or juggling fitness routines: I've coded solutions to both that can easily be applied to others with the same issue. 
              </p>
              <p className="text-gray-300 leading-relaxed">
                I want to build apps that'll impact the everyday lives of people like you and I. When people check who made it, I want my name to be there.
              </p>
              <div className="flex flex-wrap gap-2">
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Experience</h2>
            <div className="w-16 h-1 bg-blue-400 mx-auto"></div>
          </motion.div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-blue-500/50 transition-colors"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                    <p className="text-blue-400">{exp.company}</p>
                  </div>
                  <div className="text-gray-400 mt-2 lg:mt-0">
                    {exp.duration}
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y:20 }}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <div className="w-16 h-1 bg-blue-400 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-colors"
              >
                <div className="h-48 flex items-center justify-center">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="bg-gradient-to-r from-gray-700 to-gray-600 w-full h-full flex items-center justify-center">
                      <div className="text-4xl font-bold text-white">
                        {project.title.split(' ').map(word => word[0]).join('')}
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a href={project.github} target="_blank" className="flex items-center text-gray-400 hover:text-white transition-colors text-sm">
                      <Github size={14} className="mr-1" />
                      Code
                    </a>
                    {project.link && project.link !== '#' && (
                      <a href={project.link} target="_blank" className="flex items-center text-gray-400 hover:text-white transition-colors text-sm">
                        <ExternalLink size={14} className="mr-1" />
                        Link
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-20 px-6 bg-gray-800/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Education</h2>
            <div className="w-16 h-1 bg-blue-400 mx-auto"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 rounded-xl p-8 border border-gray-700"
          >
            {education.map((edu, index) => (
              <div key={index}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                    <p className="text-blue-400">{edu.school}</p>
                  </div>
                  <div className="text-gray-400 mt-2 lg:mt-0">
                    {edu.duration} • {edu.gpa}
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-300 mb-3">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, courseIndex) => (
                      <span 
                        key={courseIndex}
                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="skills" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Skills</h2>
            <div className="w-16 h-1 bg-blue-400 mx-auto"></div>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors">
                <span className="text-gray-300">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="extras" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Extras</h2>
            <div className="w-16 h-1 bg-blue-400 mx-auto"></div>
          </motion.div>

          <div className="space-y-20">
            {extrasItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col lg:flex-row items-center gap-12"
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="lg:w-1/2">
                      <h3 className="text-2xl font-semibold mb-4 text-white">{item.title}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>
                      {item.tags && (
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, tagIndex) => (
                            <span 
                              key={tagIndex}
                              className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                            >{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="lg:w-1/2 w-full">
                      {item.type === 'image' ? (
                        <img 
                          src={item.media} 
                          alt={item.title}
                          className="rounded-xl shadow-lg w-full h-64 object-cover"
                        />
                      ) : item.type === 'video' ? (
                        <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                          <iframe 
                            src={item.media}
                            className="w-full h-full"
                            frameBorder="0"
                            allowFullScreen
                          ></iframe>
                        </div>
                      ) : null}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="lg:w-1/2 w-full order-2 lg:order-1">
                      {item.type === 'image' ? (
                        <img 
                          src={item.media} 
                          alt={item.title}
                          className="rounded-xl shadow-lg w-full h-64 object-cover"
                        />
                      ) : item.type === 'video' ? (
                        <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                          <iframe 
                            src={item.media}
                            className="w-full h-full"
                            frameBorder="0"
                            allowFullScreen
                          ></iframe>
                        </div>
                      ) : null}
                    </div>
                    <div className="lg:w-1/2 order-1 lg:order-2">
                      <h3 className="text-2xl font-semibold mb-4 text-white">{item.title}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>
                      {item.tags && (
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, tagIndex) => (
                            <span 
                              key={tagIndex}
                              className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                            >{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 border-t border-gray-800 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-6 lg:mb-0">
              <h3 className="text-xl font-bold text-blue-400 mb-2">
                {personalInfo.firstName} "{personalInfo.nickname}" {personalInfo.lastName}
              </h3>
              <p className="text-gray-400">{personalInfo.title} at {personalInfo.university}</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/yourlocaljosh" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/seungwon-hong-156375255/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2025 {personalInfo.firstName} {personalInfo.lastName}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
