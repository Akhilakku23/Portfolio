// import { FaReact, FaNodeJs, FaLaptopCode } from "react-icons/fa";
// import { SiMongodb } from "react-icons/si";
// import { motion } from "framer-motion";

// const Services = () => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//         duration: 1,
//       },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//     hover: { scale: 1.05 },
//   };

//   const iconVariants = {
//     hover: { scale: 1.2, rotate: 10, transition: { duration: 0.3 } },
//   };

//   return (
//     <motion.section
//       id="services"
//       className="py-20"
//       initial="hidden"
//       whileInView="visible"
//       variants={containerVariants}
//     >
//       <motion.h2
//         className="text-4xl text-center font-bold mb-8"
//         variants={cardVariants}
//       >
//         Services
//       </motion.h2>
//       <motion.div
//         className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
//         variants={containerVariants}
//       >
//         {/* Web Development Service */}
//         <motion.div
//           className="service-card bg-white p-6 rounded-lg shadow-lg"
//           variants={cardVariants}
//           whileHover="hover"
//         >
//           <motion.div
//             className="text-center"
//             variants={iconVariants}
//           >
//             <FaLaptopCode className="text-6xl text-blue-500 mx-auto mb-4" />
//           </motion.div>
//           <h3 className="text-2xl font-semibold mb-4 text-black">
//             Web Development
//           </h3>
//           <p className="text-lg text-gray-600">
//             I build modern, responsive, and scalable websites tailored to your
//             business needs using the latest technologies.
//           </p>
//           <ul className="list-disc pl-6 text-gray-600 mt-4">
//             <li>Responsive designs</li>
//             <li>SEO optimization</li>
//             <li>Web app development</li>
//           </ul>
//           <a
//             href="#contact"
//             className="mt-4 inline-block bg-blue-500 text-white p-3 rounded-full"
//           >
//             Get in Touch
//           </a>
//         </motion.div>

//         {/* Full Stack Development Service */}
//         <motion.div
//           className="service-card bg-white p-6 rounded-lg shadow-lg"
//           variants={cardVariants}
//           whileHover="hover"
//         >
//           <motion.div
//             className="text-center"
//             variants={iconVariants}
//           >
//             <FaReact className="text-6xl text-cyan-400 mx-auto mb-4" />
//           </motion.div>
//           <h3 className="text-2xl font-semibold mb-4 text-black">
//             Full Stack Development
//           </h3>
//           <p className="text-lg text-gray-600">
//             I provide end-to-end solutions for web applications, integrating
//             front-end and back-end technologies seamlessly.
//           </p>
//           <ul className="list-disc pl-6 text-gray-600 mt-4">
//             <li>React.js for dynamic UIs</li>
//             <li>Node.js and Express for back-end</li>
//             <li>MongoDB for efficient data storage</li>
//           </ul>
//           <a
//             href="#contact"
//             className="mt-4 inline-block bg-blue-500 text-white p-3 rounded-full"
//           >
//             Get in Touch
//           </a>
//         </motion.div>

//         {/* UI/UX Design Service */}
//         <motion.div
//           className="service-card bg-white p-6 rounded-lg shadow-lg"
//           variants={cardVariants}
//           whileHover="hover"
//         >
//           <motion.div
//             className="text-center"
//             variants={iconVariants}
//           >
//             <SiMongodb className="text-6xl text-green-500 mx-auto mb-4" />
//           </motion.div>
//           <h3 className="text-2xl font-semibold mb-4 text-black">UI/UX Design</h3>
//           <p className="text-lg text-gray-600">
//             I create visually stunning and user-friendly interfaces that provide
//             seamless and enjoyable user experiences.
//           </p>
//           <ul className="list-disc pl-6 text-gray-600 mt-4">
//             <li>User research and testing</li>
//             <li>Wireframing and prototyping</li>
//             <li>Responsive and mobile-first design</li>
//           </ul>
//           <a
//             href="mailto:your-email@example.com"
//             className="mt-4 inline-block bg-blue-500 text-white p-3 rounded-full"
//           >
//             Get in Touch
//           </a>
//         </motion.div>
//       </motion.div>
//     </motion.section>
//   );
// };

// export default Services;
import { FaReact, FaNodeJs, FaLaptopCode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

const Services = () => {
  // Clean, premium animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, duration: 1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
    hover: {
      scale: 1.04,
      y: -8,
      transition: { duration: 0.3 },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.25,
      rotate: 8,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.section
      id="services"
      className="py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-4xl text-center font-bold mb-12"
        variants={cardVariants}
      >
        What I Offer
      </motion.h2>

      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        variants={containerVariants}
      >
        {/* Web Development */}
        <motion.div
          className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-xl hover:shadow-blue-500/30 transition duration-300 border border-white/10"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.div className="text-center mb-4" variants={iconVariants}>
            <FaLaptopCode className="text-6xl text-blue-400 mx-auto" />
          </motion.div>

          <h3 className="text-2xl font-semibold mb-3 text-white">
            Web Development
          </h3>
          <p className="text-gray-300 leading-relaxed">
            I craft fast, responsive, and modern websites that feel smooth,
            look clean, and work flawlessly on any device.
          </p>

          <ul className="list-disc pl-6 text-gray-300 mt-4">
            <li>Responsive & mobile-first designs</li>
            <li>SEO-friendly development</li>
            <li>Custom UI components</li>
          </ul>

          <a
            href="#contact"
            className="mt-5 inline-block bg-blue-500 text-white px-5 py-2 rounded-full"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Full Stack Development */}
        <motion.div
          className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-xl hover:shadow-cyan-400/30 transition duration-300 border border-white/10"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.div className="text-center mb-4" variants={iconVariants}>
            <FaReact className="text-6xl text-cyan-400 mx-auto" />
          </motion.div>

          <h3 className="text-2xl font-semibold mb-3 text-white">
            Full Stack Development
          </h3>
          <p className="text-gray-300 leading-relaxed">
            I build complete end-to-end web applications that connect clean
            frontends with powerful, secure backends.
          </p>

          <ul className="list-disc pl-6 text-gray-300 mt-4">
            <li>React.js for dynamic interfaces</li>
            <li>Node.js + Express for backend logic</li>
            <li>MongoDB for scalable databases</li>
          </ul>

          <a
            href="#contact"
            className="mt-5 inline-block bg-blue-500 text-white px-5 py-2 rounded-full"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* UI/UX Design */}
        <motion.div
          className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-xl hover:shadow-green-400/30 transition duration-300 border border-white/10"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.div className="text-center mb-4" variants={iconVariants}>
            <SiMongodb className="text-6xl text-green-400 mx-auto" />
          </motion.div>

          <h3 className="text-2xl font-semibold mb-3 text-white">UI/UX Design</h3>
          <p className="text-gray-300 leading-relaxed">
            I design interfaces that feel natural, look clean, and give users a
            smooth and enjoyable experience.
          </p>

          <ul className="list-disc pl-6 text-gray-300 mt-4">
            <li>Wireframing & prototyping</li>
            <li>User flow optimization</li>
            <li>Modern minimal UI design</li>
          </ul>

          <a
            href="mailto:akhilsaji0031@gmail.com"
            className="mt-5 inline-block bg-blue-500 text-white px-5 py-2 rounded-full"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Services;
