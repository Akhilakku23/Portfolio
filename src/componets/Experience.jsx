import { SiPython, SiNumpy } from "react-icons/si";
import { FaCertificate } from "react-icons/fa";
import { motion } from "framer-motion";

const Certification = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, when: 'beforeChildren', staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const iconVariants = {
    hover: { scale: 1.2, transition: { duration: 0.3 } },
  };

  return (
    <motion.section
      id="certifications"
      className="py-20 text-white"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-8"
        variants={itemVariants}
      >
        Certifications
      </motion.h2>

      <motion.div className="max-w-5xl mx-auto" variants={itemVariants}>
        {/* NPTEL Certification */}
        <motion.div
          className="p-6 rounded-lg shadow-lg mb-8"
          whileHover={{ scale: 1.02 }}
        >
          <motion.h3 className="text-3xl font-semibold" variants={itemVariants}>
            The Joy of Computing Using Python
          </motion.h3>
          <motion.p className="text-lg mt-2" variants={itemVariants}>
            Certification by NPTEL - 2024
          </motion.p>
          <motion.ul className="list-disc pl-6 mt-4" variants={containerVariants}>
            <motion.li variants={itemVariants}>
              Learned foundational Python concepts through real-world problem-solving.
            </motion.li>
            <motion.li variants={itemVariants}>
              Worked on logic building, control statements, loops, and basic data structures.
            </motion.li>
            <motion.li variants={itemVariants}>
              Gained insight into computational thinking and basic automation tasks.
            </motion.li>
          </motion.ul>
        </motion.div>

        {/* Santhisoft Course */}
        <motion.div
          className="p-6 rounded-lg shadow-lg mb-8"
          whileHover={{ scale: 1.02 }}
        >
          <motion.h3 className="text-3xl font-semibold" variants={itemVariants}>
            Core Python with Tkinter
          </motion.h3>
          <motion.p className="text-lg mt-2" variants={itemVariants}>
            Course by Santhisoft Technologies
          </motion.p>
          <motion.ul className="list-disc pl-6 mt-4" variants={containerVariants}>
            <motion.li variants={itemVariants}>
              Built GUI applications using Tkinter.
            </motion.li>
            <motion.li variants={itemVariants}>
              Applied OOP principles and Python functions to create real-time apps.
            </motion.li>
            <motion.li variants={itemVariants}>
              Developed mini projects like calculators and login systems.
            </motion.li>
          </motion.ul>
        </motion.div>

        {/* Tech Icons */}
        <motion.div className="flex space-x-4 mt-6" variants={containerVariants}>
          <motion.div variants={iconVariants} whileHover="hover" className="text-yellow-300">
            <SiPython className="text-4xl" />
          </motion.div>
          <motion.div variants={iconVariants} whileHover="hover" className="text-indigo-400">
            <FaCertificate className="text-4xl" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Certification;
