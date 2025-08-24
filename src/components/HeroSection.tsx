
import { easeInOut, motion } from 'framer-motion';
import { Linkedin, Github, FileText } from 'lucide-react'; // Added FileText icon
import { portfolioData } from '@/data/portfolio';

const HeroSection = () => {
    const { name, title, summary, resumeLink, socialLinks } = portfolioData;

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
        <section id="home" className="home-section">
            <motion.div
                style={{ textAlign: 'left', width: '100%', display: 'flex' }}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                id="test1234"
            >

                <motion.div style={{width: '60%'}}>
                    <motion.h1
                        className="hero-heading"
                        variants={itemVariants}
                    >
                        Hi, I'm <span className="hero-name-highlight">{name}</span>
                    </motion.h1>
                    <motion.p
                        className={`hero-text hero-text-large`}
                        variants={itemVariants}
                    >
                        A passionate <span className="text-highlight">{title}</span> building modern and responsive web applications with a focus on user experience.
                    </motion.p>
                    <motion.p
                        className={`hero-text hero-text-small`}
                        variants={itemVariants}
                    >
                        {summary}
                    </motion.p>
                    <motion.div
                        className="hero-social-links"
                        variants={itemVariants}
                    >
                        <SocialLink icon={<Linkedin size={24} />} href="https://linkedin.com/in/poovarasan-m-50341b20b" label="LinkedIn" />
                        <SocialLink icon={<Github size={24} />} href="https://github.com/Poovarasan0909" label="GitHub" />
                        {/* Removed Twitter as it wasn't in the provided resume */}
                        <motion.a
                            href={resumeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="resume-button"
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <FileText size={20} className="resume-button-icon" /> View Resume
                        </motion.a>
                    </motion.div>
                </motion.div>
                <motion.div style={{ alignContent: 'center', width: '40%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <motion.img
                        src="/profile-image.jpg"
                        alt="Profile"
                        id="profile-picture-logo"
                        className="profile-image"
                        variants={itemVariants}
                    />
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
        className="social-link-button"
        aria-label={label}
    >
        {icon}
    </a>
);

export default HeroSection