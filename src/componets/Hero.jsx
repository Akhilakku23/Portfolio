// import profilePic from '../assets/akhilprofile.webp.png';
// import { motion } from 'framer-motion';

// const containerVariants = {
//   hidden: { opacity: 0, x: -100 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.5,
//       staggerChildren: 0.5,
      
//     },
//   },
// };

// const childVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// };

// const Hero = () => {
//   return (
//     <div className="pb-4 lg:mb-36">
//       <div className="flex flex-wrap lg:flex-row-reverse">
//         {/* Image Section */}
//         <div className="w-full lg:w-1/2">
//           <div className="flex justify-center lg:p-8">
//             <motion.img
//               src={profilePic}
//               alt="Akhil Saji"
//               className="border border-stone-900 rounded-3xl"
//               width={650}
//               height={650}
//               initial={{ x: 100, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 1, delay: 1.5 }}
//             />
//           </div>
//         </div>

//         {/* Text Section */}
//         <div className="w-full lg:w-1/2">
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={containerVariants}
//             className="flex flex-col items-center lg:items-start mt-10"
//           >
//             <motion.h2
//               variants={childVariants}
//               className="pb-2 text-8xl tracking-tighter lg-text-8xl"
//             >
//               Aneena Shyjan
//             </motion.h2>

//             <motion.span
//               variants={childVariants}
//               className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
//             >
//                Software Developer
//             </motion.span>

//             <motion.p
//               variants={childVariants}
//               className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
//             >
//               I'm a dedicated and detail-oriented Software Developer with hands-on experience in building responsive web applications using technologies like Angular, PHP, HTML, CSS, JavaScript, and Bootstrap. I also have a foundational understanding of Java for object-oriented programming and backend logic.

// I enjoy crafting clean, user-friendly frontends with Angular and Bootstrap, while building secure and efficient backends using PHP. With a strong grasp of full-stack development, I’m confident in creating dynamic websites, admin panels, forms, and database-driven applications.

// Over time, I’ve built applications such as student registration systems, portfolio websites, and e-commerce layouts, always focusing on clean code, validation, and a responsive UI. I'm also comfortable working with MySQL databases and tools like Postman and GitHub for testing and version control.

// I’m passionate about learning new technologies, improving user experience, and solving real-world problems through software. I'm seeking opportunities to grow in a collaborative environment and contribute to impactful projects.
//             </motion.p>

//             <motion.a
//               variants={childVariants}
//               href="AKhil_Saji_web_developer_resume (2).pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               download
//               className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10"
//             >
//               Download Resume
//             </motion.a>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


import profilePic from '../assets/projects/Aneena_Shyjan.jpeg';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profilePic}
              alt="Aneena Shyjan"
              className="border border-stone-900 rounded-3xl"
              width={650}
              height={650}
              loading="lazy"
              aria-label="Profile picture of Aneena Shyjan"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10"
          >
            <motion.h2
              variants={childVariants}
              className="pb-2 text-6xl md:text-8xl font-bold tracking-tighter"
            >
              Aneena Shyjan
            </motion.h2>

            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-2xl md:text-3xl tracking-tight text-transparent"
            >
              Software Developer
            </motion.span>

            <motion.p
              variants={childVariants}
              className="my-4 max-w-lg py-4 text-lg md:text-xl leading-relaxed tracking-tighter text-center lg:text-left"
            >
              I'm a passionate Software Developer skilled in Angular, PHP, JavaScript, and Bootstrap. I build responsive, secure, and user-friendly web applications with clean code and strong backend logic.
              <br /><br />
              With experience in projects like student registration systems and portfolio websites, I enjoy solving real-world problems and growing in collaborative environments. I'm proficient with MySQL, Postman, and GitHub.
            </motion.p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <motion.a
                variants={childVariants}
                href="/Aneena_shyjan.pdf"
                download
                className="bg-white rounded-full px-6 py-3 text-sm font-semibold text-stone-800 shadow-md hover:shadow-lg transition"
              >
                Download Resume
              </motion.a>

            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
