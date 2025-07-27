 const AboutSection = () => (
    <section id="about" className="w-[50vh] flex items-center p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-xl my-16">
        <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center md:space-x-12">
            {/*<div className="md:w-1/2 mb-8 md:mb-0">*/}
            {/*    <img*/}
            {/*        src="https://placehold.co/400x300/000000/FFFFFF?text=About+Me" // Placeholder for an about image*/}
            {/*        alt="About Me"*/}
            {/*        className="rounded-2xl shadow-lg w-full h-auto object-cover"*/}
            {/*    />*/}
            {/*</div>*/}
            <div className="sm:w-1/2">
                <h2 className="text-4xl font-bold mb-6 text-blue-600 dark:text-blue-400">About Me</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    Hello! I'm Poovarasan, a dedicated software developer with a passion for creating impactful and user-friendly web experiences. I specialize in building robust full-stack applications, from crafting elegant front-ends to designing efficient back-end systems.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    My journey in tech began with a curiosity for how things work, which quickly evolved into a love for problem-solving through code. I thrive in dynamic environments and continuously seek to learn new technologies and best practices to deliver high-quality solutions.
                </p>
            </div>
        </div>
    </section>
);

export default AboutSection;