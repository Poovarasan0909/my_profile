"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import motion for animations

// Lucide React icons
import { Home, User, Code, Folder, Mail, Linkedin, Github, Twitter, ExternalLink, Sun, Moon, FileText } from 'lucide-react'; // Added FileText icon

// Main App Component
const App = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [darkMode, setDarkMode] = useState(false);

    // Smooth scroll to section
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
        }
    };

    // Handle scroll to update active section in nav
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'skills', 'projects', 'contact'];
            for (const sectionId of sections) {
                const section = document.getElementById(sectionId);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark');
    };

    return (
        <div className={`min-h-screen font-inter ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'}`}>
            {/* Dark Mode Toggle */}
            <button
                onClick={toggleDarkMode}
                className="fixed top-4 right-4 p-3 rounded-full shadow-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 z-50 transition-all duration-300 hover:scale-105"
                aria-label="Toggle dark mode"
            >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Sidebar Navigation */}
            <nav className="fixed left-0 top-0 h-full w-20 bg-white dark:bg-gray-800 shadow-lg flex flex-col items-center justify-center py-8 z-40 rounded-r-2xl">
                <div className="flex flex-col space-y-8">
                    <NavItem icon={<Home size={24} />} label="Home" sectionId="home" activeSection={activeSection} onClick={scrollToSection} />
                    <NavItem icon={<User size={24} />} label="About" sectionId="about" activeSection={activeSection} onClick={scrollToSection} />
                    <NavItem icon={<Code size={24} />} label="Skills" sectionId="skills" activeSection={activeSection} onClick={scrollToSection} />
                    <NavItem icon={<Folder size={24} />} label="Projects" sectionId="projects" activeSection={activeSection} onClick={scrollToSection} />
                    <NavItem icon={<Mail size={24} />} label="Contact" sectionId="contact" activeSection={activeSection} onClick={scrollToSection} />
                </div>
            </nav>

            {/* Main Content Area */}
            <main className="ml-20 p-8">
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </main>
        </div>
    );
};

// Navigation Item Component
const NavItem = ({ icon, label, sectionId, activeSection, onClick }) => (
    <button
        onClick={() => onClick(sectionId)}
        className={`relative flex items-center justify-center p-3 rounded-full transition-all duration-300 group
      ${activeSection === sectionId ? 'bg-blue-600 text-white shadow-md' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'}
      hover:scale-110`}
        aria-label={label}
    >
        {icon}
        <span className="absolute left-full ml-4 px-3 py-1 bg-gray-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            {label}
        </span>
    </button>
);

// Hero Section
const HeroSection = () => {
    // Data extracted from Poovarasan's resume
    const name = "Poovarasan M";
    const title = "Full Stack Developer | Java | Spring Boot | React.js | TypeScript | PostgreSQL";
    const summary = "Full Stack Developer with 2.6 years of experience in developing, designing and deploying scalable web applications. Proficient in frontend and backend technologies including Java, Spring Boot, React.js, TypeScript, and PostgreSQL. Skilled in building robust admin interfaces using React-Admin. Contributed to fintech and AI-based projects, particularly in the Merchant Cash Advance (MCA) domain, improving financial workflows and overall system performance. Passionate about clean code, performance optimization, and business-driven development.";
    const resumeLink = "/Poovarasan_Resume_cv.pdf"; // Placeholder: Replace with the actual path to your resume PDF

    // Framer Motion variants for animations
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.2, // Delay between child animations
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const buttonVariants = {
        hover: {
            scale: 1.05,
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
            transition: { duration: 0.3 }
        },
        tap: { scale: 0.95 }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center p-8 overflow-hidden">
            <motion.div
                className="text-center max-w-4xl"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.img
                    src="https://placehold.co/150x150/000000/FFFFFF?text=PM" // Placeholder for your profile picture
                    alt="Profile"
                    className="w-36 h-36 rounded-full mx-auto mb-6 shadow-xl border-4 border-blue-500 dark:border-blue-400"
                    variants={itemVariants}
                />
                <motion.h1
                    className="text-5xl font-extrabold mb-4 leading-tight"
                    variants={itemVariants}
                >
                    Hi, I'm <span className="text-blue-600 dark:text-blue-400">{name}</span>
                </motion.h1>
                <motion.p
                    className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
                    variants={itemVariants}
                >
                    A passionate <span className="font-semibold">{title}</span> building modern and responsive web applications with a focus on user experience.
                </motion.p>
                <motion.p
                    className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
                    variants={itemVariants}
                >
                    {summary}
                </motion.p>
                <motion.div
                    className="flex justify-center space-x-6 flex-wrap gap-4"
                    variants={itemVariants}
                >
                    <SocialLink icon={<Linkedin size={24} />} href="https://linkedin.com/in/poovarasan-m-50341b20b" label="LinkedIn" />
                    <SocialLink icon={<Github size={24} />} href="https://github.com/Poovarasan0909" label="GitHub" />
                    {/* Removed Twitter as it wasn't in the provided resume */}
                    <motion.a
                        href={resumeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 font-semibold text-lg"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <FileText size={20} className="mr-2" /> View Resume
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
};

// Social Link Component
const SocialLink = ({ icon, href, label }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 shadow-md hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 hover:scale-110"
        aria-label={label}
    >
        {icon}
    </a>
);

// About Section
const AboutSection = () => (
    <section id="about" className="min-h-screen flex items-center p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-xl my-16">
        <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center md:space-x-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
                <img
                    src="https://placehold.co/400x300/000000/FFFFFF?text=About+Me" // Placeholder for an about image
                    alt="About Me"
                    className="rounded-2xl shadow-lg w-full h-auto object-cover"
                />
            </div>
            <div className="md:w-1/2">
                <h2 className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-400">About Me</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Hello! I'm Poovarasan M, a dedicated software developer with a passion for creating impactful and user-friendly web experiences. I specialize in building robust full-stack applications, from crafting elegant front-ends to designing efficient back-end systems.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    My journey in tech began with a curiosity for how things work, which quickly evolved into a love for problem-solving through code. I thrive in dynamic environments and continuously seek to learn new technologies and best practices to deliver high-quality solutions.
                </p>
            </div>
        </div>
    </section>
);

// Skills Section
const SkillsSection = () => {
    const skills = [
        { name: 'Java', level: 'Advanced', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'Spring Boot', level: 'Advanced', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
        { name: 'React.js', level: 'Advanced', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'TypeScript', level: 'Intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'PostgreSQL', level: 'Intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'Node.js', level: 'Intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Tailwind CSS', level: 'Advanced', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'Git', level: 'Advanced', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'Docker', level: 'Basic', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'HTML5', level: 'Advanced', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', level: 'Advanced', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'MongoDB', level: 'Basic', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'Redux', level: 'Intermediate', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
    ];

    return (
        <section id="skills" className="min-h-screen flex items-center p-8 bg-gray-100 dark:bg-gray-900 rounded-3xl shadow-xl my-16">
            <div className="container mx-auto max-w-6xl text-center">
                <h2 className="font-bold mb-12 text-blue-600 dark:text-blue-400">My Skills</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <SkillCard key={index} skill={skill} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// Skill Card Component
const SkillCard = ({ skill }) => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center">
        <img src={skill.icon} alt={skill.name} className="w-1 mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{skill.name}</h3>
        <p className="text-md text-gray-600 dark:text-gray-400">{skill.level}</p>
    </div>
);

// Projects Section
const ProjectsSection = () => {
    const projects = [
        {
            title: 'MCA-Merchant Cash Advance',
            description: 'Contributed to a web application that facilitates payment processing for businesses. Ensured secure data exchange and efficient transaction processing through REST APIs. Improved user experience and backend reliability across financial workflows.',
            technologies: ['Java', 'Spring Boot', 'React.js', 'PostgreSQL'],
            // Assuming no public links for these projects, so leaving them empty.
            githubLink: '',
            liveLink: '',
            image: 'https://placehold.co/600x400/000000/FFFFFF?text=MCA+App'
        },
        {
            title: 'Coach Chess AI',
            description: 'An AI-powered coaching platform to enhance chess learning and analysis. Built admin dashboards and user interfaces using React.js and React-Admin. Integrated AI features to analyze games and suggest optimal moves for students.',
            technologies: ['React.js', 'React-admin', 'TypeScript', 'JavaScript', 'Spring Boot'],
            githubLink: '',
            liveLink: '',
            image: 'https://placehold.co/600x400/000000/FFFFFF?text=Chess+AI+App'
        },
        // You can add more projects here based on your resume or other work
    ];

    return (
        <section id="projects" className="min-h-screen flex items-center p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-xl my-16">
            <div className="container mx-auto max-w-6xl text-center">
                <h2 className="text-4xl font-bold mb-12 text-blue-600 dark:text-blue-400">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// Project Card Component
const ProjectCard = ({ project }) => (
    <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
        <div className="p-6 flex-grow">
            <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 text-sm font-medium rounded-full">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
        <div className="p-6 border-t border-gray-200 dark:border-gray-700 flex justify-end space-x-4">
            {project.githubLink && (
                <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 group"
                >
                    <Github size={18} className="mr-2 group-hover:scale-110 transition-transform" /> GitHub
                </a>
            )}
            {project.liveLink && (
                <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 group"
                >
                    <ExternalLink size={18} className="mr-2 group-hover:scale-110 transition-transform" /> Live Demo
                </a>
            )}
        </div>
    </div>
);

// Contact Section
const ContactSection = () => (
    <section id="contact" className="min-h-screen flex items-center p-8 bg-gray-100 dark:bg-gray-900 rounded-3xl shadow-xl my-16">
        <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold mb-8 text-blue-600 dark:text-blue-400">Get In Touch</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
                I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out!
            </p>
            <div className="flex flex-col items-center space-y-6">
                <ContactInfoItem icon={<Mail size={24} />} text="poovarasanm0909@gmail.com" link="mailto:poovarasanm0909@gmail.com" />
                <ContactInfoItem icon={<Linkedin size={24} />} text="linkedin.com/in/poovarasan-m-50341b20b" link="https://linkedin.com/in/poovarasan-m-50341b20b" />
                <ContactInfoItem icon={<Github size={24} />} text="github.com/Poovarasan0909" link="https://github.com/Poovarasan0909" />
            </div>
            <div className="mt-12">
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Designed and built with ❤️ by Poovarasan M
                </p>
            </div>
        </div>
    </section>
);

// Contact Info Item Component
const ContactInfoItem = ({ icon, text, link }) => (
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md w-full max-w-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
    >
        <div className="p-3 bg-blue-100 dark:bg-blue-700 rounded-full text-blue-600 dark:text-blue-200">
            {icon}
        </div>
        <span className="text-lg text-gray-800 dark:text-gray-200">{text}</span>
    </a>
);

export default App;
