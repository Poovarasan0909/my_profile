"use client"

import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';

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
        <div className={`main-container`}>
            {/* Dark Mode Toggle */}
            <button
                onClick={toggleDarkMode}
                className="dark-mode-toggle"
                aria-label="Toggle dark mode"
            >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Sidebar Navigation */}
            <nav className="sidebar">
                <div className="sidebar-items">
                    <NavItem icon={<Home size={24} />} label="Home" sectionId="home" activeSection={activeSection} onClick={scrollToSection} />
                    <NavItem icon={<User size={24} />} label="About" sectionId="about" activeSection={activeSection} onClick={scrollToSection} />
                    <NavItem icon={<Code size={24} />} label="Skills" sectionId="skills" activeSection={activeSection} onClick={scrollToSection} />
                    <NavItem icon={<Folder size={24} />} label="Projects" sectionId="projects" activeSection={activeSection} onClick={scrollToSection} />
                    <NavItem icon={<Mail size={24} />} label="Contact" sectionId="contact" activeSection={activeSection} onClick={scrollToSection} />
                </div>
            </nav>

            {/* Main Content Area */}
            <main className="content-area">
                <HeroSection/>
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
        className={`nav-button ${activeSection === sectionId ? 'active' : 'inactive'}`}
        aria-label={label}
    >
        {icon}
        <span className="nav-button-label">
            {label}
        </span>
    </button>
);

export default App;
