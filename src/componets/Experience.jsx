
import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { motion } from "framer-motion";

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, when: "beforeChildren", staggerChildren: 0.3 },
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
      id="mern-course"
      className="py-20 text-white"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-8"
        variants={itemVariants}
      >
        MERN Stack Course Completed
      </motion.h2>

      <motion.div className="max-w-5xl mx-auto" variants={itemVariants}>
        <motion.div
          className=" p-6 rounded-lg shadow-lg mb-8"
          whileHover={{ scale: 1.02 }}
        >
          <motion.h3 className="text-3xl font-semibold mb-2" variants={itemVariants}>
            MERN Stack Web Development
          </motion.h3>

          <motion.p className="text-lg mb-1" variants={itemVariants}>
          Synnefo Solutions
          </motion.p>
          <motion.p className="text-sm text-gray-300 mb-4" variants={itemVariants}>
            Duration: August 2024 – February 2025
          </motion.p>

          <motion.p className="text-base text-gray-200 mb-4" variants={itemVariants}>
            I successfully completed an intensive MERN Stack Web Development course where I built full-stack applications from scratch using modern JavaScript technologies. This hands-on experience solidified my skills in both frontend and backend development.
          </motion.p>

          <motion.ul
            className="list-disc pl-6 mb-6 space-y-2 text-gray-300"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {[
              "Built several projects using MongoDB, Express.js, React.js, and Node.js.",
              "Designed dynamic and responsive UI components in React.",
              "Created secure REST APIs using Node and Express.",
              "Worked with MongoDB for data modeling and CRUD operations.",
              "Version-controlled projects using Git and collaborated via GitHub.",
            ].map((text, index) => (
              <motion.li key={index} variants={itemVariants}>
                {text}
              </motion.li>
            ))}
          </motion.ul>

          <motion.p className="font-semibold text-white mb-2" variants={itemVariants}>
            Key Highlights:
          </motion.p>
          <motion.ul className="list-inside list-disc text-gray-300 space-y-2" variants={containerVariants}>
            {[
              "Completed and deployed a fully functional e-commerce web app.",
              "Gained confidence in full-stack workflows and deployment.",
              "Mastered React Hooks, JWT auth, and integration with MongoDB Atlas.",
            ].map((text, index) => (
              <motion.li key={index} variants={itemVariants}>
                {text}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div className="flex space-x-6 mt-8" variants={containerVariants}>
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
              className="text-gray-400"
            >
              <SiExpress className="text-4xl" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Experience;
