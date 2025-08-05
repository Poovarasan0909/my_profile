import { Mail, Linkedin, Github } from 'lucide-react'; // Added FileText icon



const ContactSection = () => (
    <section id="contact" className="contact-section">
        <div className="contact-container">
            <h2 className="contact-heading">Get In Touch</h2>
            <p className="contact-intro">
                I'm always open to new opportunities, collaborations, or just a friendly chat.
            </p>
            <div className="contact-info-list">
                <ContactInfoItem icon={<Mail size={24} />} text="poovarasanm0909@gmail.com" link="mailto:poovarasanm0909@gmail.com" />
                <ContactInfoItem icon={<Linkedin size={24} />} text="linkedin.com/in/poovarasan-m-50341b20b" link="https://linkedin.com/in/poovarasan-m-50341b20b" />
                <ContactInfoItem icon={<Github size={24} />} text="github.com/Poovarasan0909" link="https://github.com/Poovarasan0909" />
            </div>
            <div className="contact-footer">
                <p className="contact-footer-text">
                    Designed and built with ❤️ by Poovarasan
                </p>
            </div>
        </div>
    </section>
);

// Contact Info Item Component
const ContactInfoItem = ({ icon, text, link }: any) => (
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-info-item"
    >
        <div className="contact-icon-wrapper">
            {icon}
        </div>
        <span className="contact-info-text">{text}</span>
    </a>
);

export default ContactSection;