import React from 'react';
import { portfolioData } from '@/data/portfolio';

const ResumeMainContent = () => {
  const { summary, experience, projects, achievements, education } = portfolioData;

  return (
    <div className="main-content">
      <h2 className="mb-4">📄 Summary</h2>
      <p className="description">{summary}</p>

      <h2 className="mb-2">💼 Experience</h2>
      {experience.map((exp, index) => (
        <div key={index} className="experience-item mb-6">
          <h3>{exp.company}</h3>
          <h4>{exp.role} | {exp.period}</h4>
          <p className="text-gray-600 mb-2">{exp.description}</p>
          <ul className="list-disc ml-5">
            {exp.responsibilities.map((resp, i) => (
              <li key={i}>{resp}</li>
            ))}
          </ul>
        </div>
      ))}

      <h2 className="mb-4">🛠 Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-item mb-6">
          <h3>{project.name}</h3>
          <ul className="list-disc ml-5">
            {project.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
            <li>Tech stack: {project.stack}</li>
          </ul>
        </div>
      ))}

      <h2 className="mb-4">🏆 Achievements</h2>
      <ul className="list-disc ml-5">
        {achievements.map((achievement, index) => (
          <li key={index} className="achievement-item">{achievement}</li>
        ))}
      </ul>

      <h2 className="mb-4">🎓 Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="education-item mb-6">
          <h3>{edu.degree}</h3>
          <h4>{edu.institution} | {edu.period}</h4>
        </div>
      ))}
    </div>
  );
};

export default ResumeMainContent;
