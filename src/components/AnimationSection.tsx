
import { motion } from "framer-motion";

const AnimatedSection = ({ children }) => {
  return (
    <motion.section
    //   initial={{ opacity: 0, y: 75 }}
    //   whileInView={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 0.5, delay: 0.1 }}
    //   viewport={{ once: true }} 
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;