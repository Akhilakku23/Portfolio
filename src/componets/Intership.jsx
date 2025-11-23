// // InternshipCard.jsx
// import { motion } from "framer-motion";

// const Internship = () => {
//   return (
//     <motion.div
//       className=" shadow-lg  p-6 w-full max-w-3xl mx-auto mt-6  "
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       viewport={{ once: true }}
//     >
//       <h3 className="text-xl font-bold text-blue-700 mb-1">
//         MERN Stack Development Intern
//       </h3>
//       <p className="text-sm  mb-4">
//         <span className="font-semibold">Syneefo Solutions</span> • Jan 2025 – Feb 2025
//       </p>
//       <ul className="list-disc list-inside space-y-1 text-[15px] leading-relaxed">
//         <li>
//           Developed and deployed full-stack web apps using MongoDB, Express.js, React.js, and Node.js.
//         </li>
//         <li>
//           Designed & consumed RESTful APIs for seamless frontend-backend interaction.
//         </li>
//         <li>
//           Built e-commerce & portfolio projects with features like auth, CRUD, and responsive UI.
//         </li>
//         <li>
//           Used <span className="font-semibold text-blue-600">Tailwind CSS</span> and <span className="font-semibold text-blue-600">Postman</span> for styling & backend testing.
//         </li>
//         <li>
//           Practiced Agile, used <span className="font-semibold">Git + GitHub</span>, and improved deployment/debugging skills.
//         </li>
//       </ul>

 
//     </motion.div>
//   );
// };

// export default Internship;
import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { motion } from "framer-motion";

const Internship = () => {
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
      className="py-20 text-white"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        variants={itemVariants}
      >
        Experience
      </motion.h2>

      <motion.div className="max-w-5xl mx-auto space-y-10" variants={itemVariants}>

        {/* MERN Internship */}
        <motion.div
          className="p-6 rounded-lg shadow-lg"
          whileHover={{ scale: 1.02 }}
        >
          <motion.h3 className="text-3xl font-semibold mb-2" variants={itemVariants}>
            MERN Stack Development Intern
          </motion.h3>

          <motion.p className="text-lg mb-1" variants={itemVariants}>
            Syneefo Solutions
          </motion.p>
          <motion.p className="text-sm text-gray-300 mb-4" variants={itemVariants}>
            Jan 2025 – Feb 2025
          </motion.p>

          <motion.ul className="list-disc pl-6 space-y-2 text-gray-300" variants={containerVariants}>
            <motion.li variants={itemVariants}>
              Built full-stack MERN applications and deployed live projects.
            </motion.li>
            <motion.li variants={itemVariants}>
              Developed secure RESTful APIs and integrated them with frontend apps.
            </motion.li>
            <motion.li variants={itemVariants}>
              Created e-commerce and portfolio apps with JWT auth & responsive UI.
            </motion.li>
            <motion.li variants={itemVariants}>
              Used Tailwind CSS and Postman for UI design & API testing.
            </motion.li>
           
          </motion.ul>

          <motion.div className="flex space-x-6 mt-6" variants={containerVariants}>
            <motion.div whileHover="hover" variants={techIconVariants} className="text-cyan-400">
              <FaReact className="text-4xl" />
            </motion.div>
            <motion.div whileHover="hover" variants={techIconVariants} className="text-green-600">
              <FaNodeJs className="text-4xl" />
            </motion.div>
            <motion.div whileHover="hover" variants={techIconVariants} className="text-green-500">
              <SiMongodb className="text-4xl" />
            </motion.div>
            <motion.div whileHover="hover" variants={techIconVariants} className="text-gray-400">
              <SiExpress className="text-4xl" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Programming Instructor & Project Support Intern */}
        <motion.div
          className="p-6 rounded-lg shadow-lg"
          whileHover={{ scale: 1.02 }}
        >
          <motion.h3 className="text-2xl font-semibold mb-2" variants={itemVariants}>
            Programming Instructor & Project Support Intern
          </motion.h3>

          <motion.p className="text-lg mb-1" variants={itemVariants}>
            Infonix Solutions – Thodupuzha, Idukki, Kerala
          </motion.p>
          <motion.p className="text-sm text-gray-300 mb-4" variants={itemVariants}>
            Apr 2025 – July 2025
          </motion.p>

          <motion.ul className="list-disc pl-6 space-y-2 text-gray-300" variants={containerVariants}>
            <motion.li variants={itemVariants}>
              Trained 20+ students in React and MySQL with real-world development practices.
            </motion.li>
            <motion.li variants={itemVariants}>
              Supported academic & client projects including backend integration and debugging.
            </motion.li>
            <motion.li variants={itemVariants}>
              Mentored students through UI/UX, database design, API development, and deployment.
            </motion.li>
            <motion.li variants={itemVariants}>
              Improved student readiness by teaching clean code and API workflows.
            </motion.li>
          </motion.ul>
        </motion.div>

        {/* Software Faculty */}
        <motion.div
          className="p-6 rounded-lg shadow-lg"
          whileHover={{ scale: 1.02 }}
        >
          <motion.h3 className="text-2xl font-semibold mb-2" variants={itemVariants}>
            Software Faculty
          </motion.h3>

          <motion.p className="text-lg mb-1" variants={itemVariants}>
            G-Tech Computer Education – Thodupuzha, Idukki, Kerala
          </motion.p>
          <motion.p className="text-sm text-gray-300 mb-4" variants={itemVariants}>
            July 2025 – Present
          </motion.p>

          <motion.ul className="list-disc pl-6 space-y-2 text-gray-300" variants={containerVariants}>
            <motion.li variants={itemVariants}>
              Teach MERN Stack, Python, and MS Office with a clear and practical approach.
            </motion.li>
            <motion.li variants={itemVariants}>
              Build strong fundamentals through structured lessons and simple explanations.
            </motion.li>
            <motion.li variants={itemVariants}>
              Guide students using hands-on exercises, live demos, and continuous practice.
            </motion.li>
            <motion.li variants={itemVariants}>
              Simplify complex concepts for beginners to understand easily.
            </motion.li>
            <motion.li variants={itemVariants}>
              Teach modern workflows, coding practices, and project-building methods.
            </motion.li>
            <motion.li variants={itemVariants}>
              Help students gain confidence in solving real-world problems.
            </motion.li>
          </motion.ul>
        </motion.div>

      </motion.div>
    </motion.section>
  );
};

export default Internship;
