import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../../constants";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[5vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white drop-shadow-[0_0_0.4rem_#8245ec]">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in various organizations
        </p>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full shadow-[0_0_10px_#8245ec66]"></div>

        {/* Timeline Items */}
        {experiences.map((experience, index) => {
          const isLeft = index % 2 !== 0;

          return (
            <motion.div
              key={experience.id}
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
                  src={experience.img}
                  alt={experience.company}
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
                  className="bg-gray-900 border border-white rounded-2xl shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]  hover:shadow-purple-500/20 hover:shadow-lg p-6 backdrop-blur-md transform transition-transform duration-300 hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Flex for Logo and Details */}
                  <div className="flex items-center space-x-6 mb-4">
                    <div className="w-14 h-14 bg-white rounded-md overflow-hidden">
                      <img
                        src={experience.img}
                        alt={experience.company}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white">{experience.role}</h3>
                      <h4 className="text-sm text-gray-300">{experience.company}</h4>
                      <p className="text-sm text-gray-500 mt-1">{experience.date}</p>
                    </div>
                  </div>

                  <p className="text-gray-400">{experience.desc}</p>

                  <div className="mt-4">
                    <h5 className="text-white font-medium">Skills:</h5>
                    <ul className="flex flex-wrap mt-2">
                      {experience.skills.map((skill, i) => (
                        <li
                          key={i}
                          className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
