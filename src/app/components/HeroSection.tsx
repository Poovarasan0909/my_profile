
import { easeInOut, motion } from 'framer-motion';
import { Linkedin, Github, FileText } from 'lucide-react'; // Added FileText icon

const HeroSection = ({darkMode }) => {
    // Data extracted from Poovarasan's resume
    const name = "Poovarasan";
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
                ease: easeInOut
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
                id="test1234"
            >
                <motion.img
                    src="/profile-image.jpg" // Placeholder for your profile picture
                    alt="Profile"
                    id="profile-picture-logo"
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
                    className={`text-xl ${darkMode ?'text-gray-300' :'text-gray-700'} mb-8 max-w-2xl mx-auto`}
                    variants={itemVariants}
                >
                    A passionate <span className="font-semibold">{title}</span> building modern and responsive web applications with a focus on user experience.
                </motion.p>
                <motion.p
                    className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-8 max-w-2xl mx-auto`}
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
const SocialLink = ({ icon, href, label }: any) => (
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

export default HeroSection