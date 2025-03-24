import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { motion } from 'framer-motion';
import { SiExpress } from 'react-icons/si';

const Experience = () => {
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

  const techIconVariants = {
    hover: { scale: 1.2, transition: { duration: 0.3 } },
  };

  return (
    <motion.section
      id="internships"
      className="py-20 text-white"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-8"
        variants={itemVariants}
      >
        Internship Experience
      </motion.h2>
      <motion.div className="max-w-5xl mx-auto" variants={itemVariants}>
        <motion.div
          className="p-6 rounded-lg shadow-lg mb-8"
          whileHover={{ scale: 1.02 }}
        >
          <motion.h3 className="text-3xl font-semibold" variants={itemVariants}>
            MERN Stack Developer Intern
          </motion.h3>
          <motion.p className="text-lg mt-2" variants={itemVariants}>
            Company Name - Synnefo Solution
          </motion.p>
          <motion.p className="text-sm mb-4" variants={itemVariants}>
            Aug 2024 - February 2025
          </motion.p>

          <motion.ul
            className="list-disc pl-6 mt-4"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {[
              'Developed and maintained web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).',
              'Collaborated with the team to design responsive and user-friendly UI components in React.js.',
              'Implemented RESTful APIs using Express.js and Node.js, ensuring smooth data integration and communication.',
              'Worked with MongoDB to store and retrieve data efficiently.',
              'Participated in code reviews, learning from senior developers, and improved the quality of the codebase.',
              'Optimized application performance by identifying and fixing bottlenecks in front-end and back-end components.',
            ].map((text, index) => (
              <motion.li key={index} variants={itemVariants}>
                {text}
              </motion.li>
            ))}
          </motion.ul>

          <div className="mt-6">
            <motion.p className="font-semibold" variants={itemVariants}>
              Key Achievements:
            </motion.p>
            <motion.ul
              className="list-inside list-disc mt-2"
              variants={containerVariants}
            >
              {[
                'Successfully built and deployed an e-commerce website prototype using MERN stack.',
                'Gained proficiency in Git, GitHub, and agile workflows.',
                'Enhanced problem-solving and debugging skills by working on real-world challenges.',
              ].map((text, index) => (
                <motion.li key={index} variants={itemVariants}>
                  {text}
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Optional: Add tech icons with hover effects */}
          <motion.div className="flex space-x-4 mt-6" variants={containerVariants}>
            <motion.div
              variants={techIconVariants}
              whileHover="hover"
              className="text-cyan-400"
            >
              <FaReact className="text-4xl" />
            </motion.div>
            <motion.div
              variants={techIconVariants}
              whileHover="hover"
              className="text-green-600"
            >
              <FaNodeJs className="text-4xl" />
            </motion.div>
            <motion.div
              variants={techIconVariants}
              whileHover="hover"
              className="text-green-500"
            >
              <SiMongodb className="text-4xl" />
            </motion.div>

            <motion.div
              variants={techIconVariants}
              whileHover="hover"
              className="text-green-500"
            >
            < SiExpress className="text-4xl" />
            </motion.div>

          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Experience;
