import React from "react";
import { motion } from "framer-motion";
import { education } from "../../constants";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[5vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white drop-shadow-[0_0_0.4rem_#8245ec] animate-pulse">
          EDUCATION
        </h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 animate-pulse" />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full shadow-[0_0_10px_#8245ec66]"></div>

        {/* Timeline Items */}
        {education.map((edu, index) => {
          const isLeft = index % 2 !== 0;

          return (
            <motion.div
              key={edu.id}
              className="mb-20 flex flex-col sm:flex-row items-center relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={index}
            >
              {/* Timeline Circle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10 bg-white border-4 border-[#8245ec] w-14 h-14 rounded-full flex items-center justify-center shadow-xl animate-pulse hover:animate-none">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Card Content */}
              <div
                className={`relative w-full sm:w-1/2 mt-12 sm:mt-0 ${
                  isLeft ? "sm:pl-20 sm:ml-0 sm:mr-auto" : "sm:pr-20 sm:mr-0 sm:ml-auto"
                }`}
              >
                <motion.div
                  className="bg-gray-900 border border-white rounded-2xl shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] hover:shadow-purple-500/20 hover:shadow-lg p-6 backdrop-blur-md transform transition-transform duration-300 hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Flex for Logo and Details */}
                  <div className="flex items-center space-x-6 mb-4">
                    <div className="w-14 h-14 bg-white rounded-md overflow-hidden">
                      <img
                        src={edu.img}
                        alt={edu.school}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                      <h4 className="text-sm text-gray-300">{edu.school}</h4>
                      <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
                    </div>
                  </div>

                  <p className="text-gray-400 font-bold mb-2">Grade: {edu.grade}</p>
                  <p className="text-gray-400">{edu.desc}</p>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
