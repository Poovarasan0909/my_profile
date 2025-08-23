import React from 'react';
import { portfolioData } from '@/data/portfolio';

const ResumeSidebar = () => {
  const { name, contact, socialLinks, languages, technicalSkills } = portfolioData;

  return (
    <div className="sidebar">
      <h2 className="text-center">{name}</h2>

      <div className="contact-info mb-6">
        <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" /></svg> {contact.location}</p>
        <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.46.57 3.57.12.35.03.75-.24 1.02l-2.2 2.2z" /></svg> {contact.phone}</p>
        <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg> {contact.email}</p>
        <p className="text-center text-lg mb-4 text-gray-300">Full Stack Developer</p>
      </div>

      <h2 className="mb-4">🔗 Links</h2>
      <ul className="list-none pl-0">
        <li><a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn: {socialLinks.linkedin.replace('https://', '')}</a></li>
        <li><a href={socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub: {socialLinks.github.replace('https://', '')}</a></li>
        <li><a href={socialLinks.portfolio} target="_blank" rel="noopener noreferrer">Portfolio: {socialLinks.portfolio.replace('https://', '')}</a></li>
      </ul>

      <h2 className="mb-4">🗣 Languages Known</h2>
      <ul className="list-none pl-0">
        {languages.map((lang, index) => (
          <li key={index}>{lang}</li>
        ))}
      </ul>

      <h2 className="mb-4">⚙️ Technical Skills</h2>
      <ul className="list-none pl-0">
        <li>
          <span className="tech-stack-category">💻 Backend:</span>
          <span className="tech-stack-list">
            {technicalSkills.backend.map((skill, index) => (
              <span key={index} className="tech-stack-item">{skill}</span>
            ))}
          </span>
        </li>
        <li>
          <span className="tech-stack-category">🖥 Frontend:</span>
          <span className="tech-stack-list">
            {technicalSkills.frontend.map((skill, index) => (
              <span key={index} className="tech-stack-item">{skill}</span>
            ))}
          </span>
        </li>
        <li>
          <span className="tech-stack-category">🗄 Database:</span>
          <span className="tech-stack-list">
            {technicalSkills.database.map((skill, index) => (
              <span key={index} className="tech-stack-item">{skill}</span>
            ))}
          </span>
        </li>
        <li>
          <span className="tech-stack-category">📦 Version Control:</span>
          <span className="tech-stack-list">
            {technicalSkills.versionControl.map((skill, index) => (
              <span key={index} className="tech-stack-item">{skill}</span>
            ))}
          </span>
        </li>
        <li>
          <span className="tech-stack-category">🔧 Tools & Platforms:</span>
          <span className="tech-stack-list">
            {technicalSkills.toolsAndPlatforms.map((skill, index) => (
              <span key={index} className="tech-stack-item">{skill}</span>
            ))}
          </span>
        </li>
        <li>
          <span className="tech-stack-category">📦 Frameworks & Libraries:</span>
          <span className="tech-stack-list">
            {technicalSkills.frameworksAndLibraries.map((skill, index) => (
              <span key={index} className="tech-stack-item">{skill}</span>
            ))}
          </span>
        </li>
        <li>
          <span className="tech-stack-category">🤝 Soft Skills:</span>
          <span className="tech-stack-list">
            {technicalSkills.softSkills.map((skill, index) => (
              <span key={index} className="tech-stack-item">{skill}</span>
            ))}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ResumeSidebar;
