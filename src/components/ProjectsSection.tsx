import { Github, ExternalLink } from 'lucide-react'; // Added FileText icon

const ProjectsSection = () => {
    const projects = [
        {
            title: 'MCA-Merchant Cash Advance',
            description: 'Contributed to a web application that facilitates payment processing for businesses. Ensured secure data exchange and efficient transaction processing through REST APIs. Improved user experience and backend reliability across financial workflows.',
            technologies: ['Java', 'Spring Boot', 'React.js', 'PostgreSQL'],
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
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="projects-container">
                <h2 className="projects-heading">My Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// Project Card Component
const ProjectCard = ({ project }: any) => (
    <div className="project-card">
        <img src={project.image} alt={project.title} className="project-image" />
        <div className="project-body">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech-stack">
                {project.technologies?.map((tech: any, index: any) => (
                    <span key={index} className="tech-tag">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
        {(project.githubLink || project.liveLink) &&
        <div className="project-links">
            {project.githubLink && (
                <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-button github-link"
                >
                    <Github size={18} className="link-icon" /> GitHub
                </a>
            )}
            {project.liveLink && (
                <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-button live-link"
                >
                    <ExternalLink size={18} className="link-icon" /> Live Demo
                </a>
            )}
        </div>}
    </div>
);

export default ProjectsSection;