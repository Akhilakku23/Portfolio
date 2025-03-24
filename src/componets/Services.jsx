import { FaReact, FaNodeJs, FaLaptopCode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05 },
  };

  const iconVariants = {
    hover: { scale: 1.2, rotate: 10, transition: { duration: 0.3 } },
  };

  return (
    <motion.section
      id="services"
      className="py-20"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
    >
      <motion.h2
        className="text-4xl text-center font-bold mb-8"
        variants={cardVariants}
      >
        Services
      </motion.h2>
      <motion.div
        className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        {/* Web Development Service */}
        <motion.div
          className="service-card bg-white p-6 rounded-lg shadow-lg"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.div
            className="text-center"
            variants={iconVariants}
          >
            <FaLaptopCode className="text-6xl text-blue-500 mx-auto mb-4" />
          </motion.div>
          <h3 className="text-2xl font-semibold mb-4 text-black">
            Web Development
          </h3>
          <p className="text-lg text-gray-600">
            I build modern, responsive, and scalable websites tailored to your
            business needs using the latest technologies.
          </p>
          <ul className="list-disc pl-6 text-gray-600 mt-4">
            <li>Responsive designs</li>
            <li>SEO optimization</li>
            <li>Web app development</li>
          </ul>
          <a
            href="#contact"
            className="mt-4 inline-block bg-blue-500 text-white p-3 rounded-full"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Full Stack Development Service */}
        <motion.div
          className="service-card bg-white p-6 rounded-lg shadow-lg"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.div
            className="text-center"
            variants={iconVariants}
          >
            <FaReact className="text-6xl text-cyan-400 mx-auto mb-4" />
          </motion.div>
          <h3 className="text-2xl font-semibold mb-4 text-black">
            Full Stack Development
          </h3>
          <p className="text-lg text-gray-600">
            I provide end-to-end solutions for web applications, integrating
            front-end and back-end technologies seamlessly.
          </p>
          <ul className="list-disc pl-6 text-gray-600 mt-4">
            <li>React.js for dynamic UIs</li>
            <li>Node.js and Express for back-end</li>
            <li>MongoDB for efficient data storage</li>
          </ul>
          <a
            href="#contact"
            className="mt-4 inline-block bg-blue-500 text-white p-3 rounded-full"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* UI/UX Design Service */}
        <motion.div
          className="service-card bg-white p-6 rounded-lg shadow-lg"
          variants={cardVariants}
          whileHover="hover"
        >
          <motion.div
            className="text-center"
            variants={iconVariants}
          >
            <SiMongodb className="text-6xl text-green-500 mx-auto mb-4" />
          </motion.div>
          <h3 className="text-2xl font-semibold mb-4 text-black">UI/UX Design</h3>
          <p className="text-lg text-gray-600">
            I create visually stunning and user-friendly interfaces that provide
            seamless and enjoyable user experiences.
          </p>
          <ul className="list-disc pl-6 text-gray-600 mt-4">
            <li>User research and testing</li>
            <li>Wireframing and prototyping</li>
            <li>Responsive and mobile-first design</li>
          </ul>
          <a
            href="mailto:your-email@example.com"
            className="mt-4 inline-block bg-blue-500 text-white p-3 rounded-full"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Services;
