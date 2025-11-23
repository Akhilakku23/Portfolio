// import React from "react";
// import { motion } from "framer-motion";


// const Education = () => {
//   const cardVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.2, duration: 0.6 },
//     }),
//   };
//  const educationList = [
//     {
//       title: "Diploma in Computer Engineering",
//       college: "Govt. Polytechnic College, Muttom",
//       years: "2021 – 2024",
//       grade: "First Class",
//       description:
// "Completed a 3-year Diploma in Computer Engineering with First Class distinction. Gained a strong foundation in programming, hardware fundamentals, networking, operating systems, and database concepts. Built multiple hands-on projects using C and web technologies, which helped me understand problem-solving, algorithmic thinking, and real-world application development. The course included practical lab sessions, circuit design, system troubleshooting, and collaborative project work, all of which strengthened my technical mindset and confidence in building complete software solutions."},
//   ];


//   return (
//     <section className="bg-gradient-to-r  via-black  py-16 text-white">
//       <div className="max-w-5xl mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
//           Education
//         </h2>

//         <div className="space-y-8">
//           {educationList.map((edu, i) => (
//             <motion.div
//               key={i}
//               className=" rounded-3xl p-6 shadow-xl hover:shadow-blue-500/30 transition duration-300"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               custom={i}
//               variants={cardVariants}
//             >
//               <h3 className="text-2xl font-semibold text-white-300">
//                 {edu.title}
//               </h3>
//               <p className="text-lg text-gray-300 mt-1">{edu.college}</p>
//               <p className="text-sm text-gray-400 mb-4">{edu.years}</p>
//               <p className="text-base text-gray-200">{edu.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;
import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  // New animation: smooth fade, scale, gentle float
  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9, rotateX: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        delay: i * 0.25,
        duration: 0.9,
        ease: "easeOut",
      },
    }),
  };

  const educationList = [
    {
      title: "Diploma in Computer Engineering",
      college: "Govt. Polytechnic College, Muttom",
      years: "2021 – 2024",
      grade: "First Class",
      description:
        "Completed a 3-year Diploma in Computer Engineering with First Class distinction. Gained a strong foundation in programming, hardware fundamentals, networking, operating systems, and database concepts. Built multiple hands-on projects using C and web technologies, which helped me understand problem-solving, algorithmic thinking, and real-world application development. The course included practical lab sessions, circuit design, system troubleshooting, and collaborative project work, all of which strengthened my technical mindset and confidence in building complete software solutions.",
    },
  ];

  return (
    <section className="bg-gradient-to-r via-black py-16 text-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
          Education
        </h2>

        <div className="space-y-10">
          {educationList.map((edu, i) => (
            <motion.div
              key={i}
              className="rounded-3xl p-8 shadow-xl bg-opacity-20 backdrop-blur-lg bg-white/5 transition duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={i}
              variants={cardVariants}
            >
              <h3 className="text-2xl font-semibold">{edu.title}</h3>
              <p className="text-lg text-gray-300 mt-1">{edu.college}</p>
              <p className="text-sm text-gray-400 mb-4">{edu.years}</p>
              <p className="text-base text-gray-200 leading-relaxed">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

