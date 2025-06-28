// InternshipCard.jsx
import { motion } from "framer-motion";

const Internship = () => {
  return (
    <motion.div
      className=" shadow-lg  p-6 w-full max-w-3xl mx-auto mt-6  "
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-bold text-blue-700 mb-1">
        MERN Stack Development Intern
      </h3>
      <p className="text-sm  mb-4">
        <span className="font-semibold">Syneefo Solutions</span> • Jan 2025 – Feb 2025
      </p>
      <ul className="list-disc list-inside space-y-1 text-[15px] leading-relaxed">
        <li>
          Developed and deployed full-stack web apps using MongoDB, Express.js, React.js, and Node.js.
        </li>
        <li>
          Designed & consumed RESTful APIs for seamless frontend-backend interaction.
        </li>
        <li>
          Built e-commerce & portfolio projects with features like auth, CRUD, and responsive UI.
        </li>
        <li>
          Used <span className="font-semibold text-blue-600">Tailwind CSS</span> and <span className="font-semibold text-blue-600">Postman</span> for styling & backend testing.
        </li>
        <li>
          Practiced Agile, used <span className="font-semibold">Git + GitHub</span>, and improved deployment/debugging skills.
        </li>
      </ul>

 
    </motion.div>
  );
};

export default Internship;
