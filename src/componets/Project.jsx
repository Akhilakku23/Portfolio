import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariants = {
  hover: { scale: 1.05 },
};

const textVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 0.3, duration: 0.5 },
  },
};

const Project = () => {
  return (
    <div className="pb-24">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="my-20 text-center text-4xl font-bold"
      >
        Projects
      </motion.h2>
      <div className="flex flex-wrap gap-8 justify-center">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center lg:items-start"
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
          >
            {/* Project Image */}
            <motion.div
              className="w-full lg:w-1/4 lg:pr-8"
              whileHover="hover"
              variants={imageVariants}
            >
              <motion.img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="mb-6 rounded shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Project Details */}
            <motion.div
              className="w-full max-w-xl lg:w-3/4"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              <motion.h3
                className="mb-2 font-semibold text-2xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {project.title}
              </motion.h3>
              <motion.p
                className="mb-4 text-stone-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {project.description}
              </motion.p>
              <div>
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    className="mr-2 rounded bg-stone-900 px-3 py-1 text-sm font-medium text-stone-300"
                    key={techIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: techIndex * 0.1, duration: 0.3 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
