"use client"

import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

// Lucide React icons
import { Home, User, Code, Folder, Mail, Sun, Moon } from 'lucide-react'; 

// Main App Component
const App = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [darkMode, setDarkMode] = useState(true);

    // Smooth scroll to section
    const scrollToSection = (sectionId: any) => {
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
        }

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
                <HeroSection darkMode={darkMode} />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </main>
        </div>
    );
};

interface NavItemProps {
    icon: React.ReactNode;
    label: string;
    sectionId: string;
    activeSection: string;
    onClick: (id: string) => void;
}
// Navigation Item Component
const NavItem = ({ icon, label, sectionId, activeSection, onClick }: NavItemProps) => (
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

export default App;
