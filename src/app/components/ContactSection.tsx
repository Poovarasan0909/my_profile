import { Mail, Linkedin, Github } from 'lucide-react'; // Added FileText icon



const ContactSection = () => (
    <section id="contact" className="min-h-screen flex items-center p-8 bg-gray-100 dark:bg-gray-900 rounded-3xl shadow-xl my-16">
        <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold mb-8 text-blue-600 dark:text-blue-400">Get In Touch</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-10">
                I'm always open to new opportunities, collaborations, or just a friendly chat.
            </p>
            <div className="flex flex-col items-center space-y-6">
                <ContactInfoItem icon={<Mail size={24} />} text="poovarasanm0909@gmail.com" link="mailto:poovarasanm0909@gmail.com" />
                <ContactInfoItem icon={<Linkedin size={24} />} text="linkedin.com/in/poovarasan-m-50341b20b" link="https://linkedin.com/in/poovarasan-m-50341b20b" />
                <ContactInfoItem icon={<Github size={24} />} text="github.com/Poovarasan0909" link="https://github.com/Poovarasan0909" />
            </div>
            <div className="mt-12">
                <p className="text-gray-600 dark:text-gray-400 text-sm">
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
        className="flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md w-full max-w-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
    >
        <div className="p-3 bg-blue-100 dark:bg-blue-700 rounded-full text-blue-600 dark:text-blue-200">
            {icon}
        </div>
        <span className="text-lg text-gray-800 dark:text-gray-200">{text}</span>
    </a>
);

export default ContactSection;