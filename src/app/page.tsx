"use client"

import React, { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import NavItem from '../components/NavItem';
import { useTheme } from "@/components/ThemeProvider";


// Lucide React icons
import { Home, User, Code, Folder, Mail, Sun, Moon } from 'lucide-react'; 
import AnimatedSection from '@/components/AnimationSection';
import Magnetic from '@/components/Magnetic';
import AIChatBot from '@/components/AIChatbot';
import { v4 as uuidv4 } from "uuid";

// Main App Component
const App = () => {
    const [activeSection, setActiveSection] = useState('home'); 

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
        if (!sessionStorage.getItem("sessionID")) {
            sessionStorage.setItem("sessionID", uuidv4());
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`main-container`}>
            {/* Dark Mode Toggle */}
            <button
                onClick={toggleTheme}
                className="dark-mode-toggle"
                aria-label="Toggle dark mode"
            >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <AIChatBot/>

            {/* Sidebar Navigation */}
            <nav className="sidebar">
                <div className="sidebar-items">
                    <Magnetic>
                        <NavItem icon={<Home size={24} />} label="Home" sectionId="home" activeSection={activeSection} onClick={scrollToSection} />
                    </Magnetic>
                    <Magnetic>
                        <NavItem icon={<User size={24} />} label="About" sectionId="about" activeSection={activeSection} onClick={scrollToSection} />
                    </Magnetic>
                    <Magnetic>
                        <NavItem icon={<Code size={24} />} label="Skills" sectionId="skills" activeSection={activeSection} onClick={scrollToSection} />
                    </Magnetic>
                    <Magnetic>
                        <NavItem icon={<Folder size={24} />} label="Projects" sectionId="projects" activeSection={activeSection} onClick={scrollToSection} />
                    </Magnetic>
                    <Magnetic>
                        <NavItem icon={<Mail size={24} />} label="Contact" sectionId="contact" activeSection={activeSection} onClick={scrollToSection} />
                    </Magnetic>
                </div>
            </nav>

            {/* Main Content Area */}
            <main className="content-area">
                <HeroSection/>
                <AnimatedSection>
                <AboutSection />
                </AnimatedSection>
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </main>
        </div>
    );
};

export default App;
