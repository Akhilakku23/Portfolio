import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="education"
      className="py-20 bg-black text-white"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        variants={itemVariants}
      >
        Education
      </motion.h2>

      <motion.div className="max-w-4xl mx-auto px-6" variants={itemVariants}>
        <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300">
          <div className="flex items-center gap-4 mb-4">
            <FaGraduationCap className="text-3xl text-yellow-400" />
            <h3 className="text-2xl font-semibold">
              MCA - Master of Computer Applications
            </h3>
          </div>
          <p className="text-lg text-white">Your College Name, Your City</p>
          <p className="text-sm text-gray-400">2023 – 2025</p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Education;
