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
                <h2 className="text-4xl font-bold mb-12 text-blue-600 dark:text-blue-400">My Skills</h2>
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
const SkillCard = ({ skill }: any) => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center">
        <img width="15%" src={skill.icon} alt={skill.name} className="max-w-[15%] mb-4" />
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{skill.name}</h3>
        <p className="text-md text-gray-600 dark:text-gray-400">{skill.level}</p>
    </div>
);

export default SkillsSection;