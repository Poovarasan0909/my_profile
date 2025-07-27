import { Github, ExternalLink } from 'lucide-react'; // Added FileText icon

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
const ProjectCard = ({ project }: any) => (
    <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
        <div className="p-6 flex-grow">
            <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies?.map((tech: any, index: any) => (
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

export default ProjectsSection;