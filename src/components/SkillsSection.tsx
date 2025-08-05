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
        <section id="skills" className="skill-section">
            <div className="skills-container">
                <h2 className="skills-heading">My Skills</h2>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <SkillCard key={index} skill={skill} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// Skill Card Component
const SkillCard = ({ skill }: any) => (
    <div className="skill-card">
        <img width="20%" src={skill.icon} alt={skill.name} className="skill-icon" />
        <h3 className="skill-name">{skill.name}</h3>
        <p className="skill-level">{skill.level}</p>
    </div>
);

export default SkillsSection;