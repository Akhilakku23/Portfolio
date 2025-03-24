
import { FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiExpress, SiTailwindcss, SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import { motion } from "framer-motion";

// Parent container animation
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2, // Stagger effect
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

// Icon bounce effect
const iconVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  visible: {
    opacity: 1,
    y: [0, -15, 0], // Bounce effect
    scale: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const Technologies = () => {
  const techStack = [
    { Icon: SiTailwindcss, color: "text-cyan-400", name: "Tailwind CSS" },
    { Icon: SiHtml5, color: "text-orange-500", name: "HTML" },
    { Icon: SiCss3, color: "text-blue-500", name: "CSS" },
    { Icon: SiJavascript, color: "text-yellow-400", name: "JavaScript" },
    { Icon: RiReactjsLine, color: "text-cyan-400", name: "React" },
    { Icon: SiExpress, color: "text-gray-800", name: "Express.js" },
    { Icon: SiMongodb, color: "text-green-500", name: "MongoDB" },
    { Icon: FaNodeJs, color: "text-green-500", name: "Node.js" },
  ];

  return (
    <div className="pb-24">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl font-bold"
      >
        Technologies
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap items-center justify-center gap-10"
      >
        {techStack.map(({ Icon, color, name }, index) => (
          <motion.div
            key={index}
            variants={iconVariants}
            whileHover={{ scale: 1.2, rotate: 10 }} // Hover effect
            className="flex flex-col items-center cursor-pointer transition-transform duration-300"
          >
            <Icon className={`text-7xl ${color}`} />
            <p className="mt-2 text-lg font-semibold">{name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
