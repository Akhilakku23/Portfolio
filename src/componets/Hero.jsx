import profilePic from '../assets/akhilprofile.webp.png';
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
              alt="Akhil Saji"
              className="border border-stone-900 rounded-3xl"
              width={650}
              height={650}
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
              className="pb-2 text-8xl tracking-tighter lg-text-8xl"
            >
              Akhil Saji
            </motion.h2>

            <motion.span
              variants={childVariants}
              className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              MERN Stack Developer
            </motion.span>

            <motion.p
              variants={childVariants}
              className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter"
            >
              I am a passionate and dedicated MERN stack web developer with
              expertise in building dynamic, scalable, and responsive web
              applications. Proficient in MongoDB, Express.js, React, and
              Node.js, I specialize in creating full-stack solutions that
              deliver seamless user experiences. I have a strong foundation in
              front-end and back-end development, enabling me to design
              intuitive interfaces while ensuring robust server-side
              functionality. With a keen eye for detail and a problem-solving
              mindset, I thrive on turning ideas into reality through clean,
              efficient, and maintainable code. My goal is to leverage
              technology to develop impactful and innovative solutions that
              meet user needs and exceed expectations.
            </motion.p>

            <motion.a
              variants={childVariants}
              href="AKhil_Saji_web_developer_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
