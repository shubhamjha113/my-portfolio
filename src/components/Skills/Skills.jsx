// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
  })
};

const flipCard = {
  hidden: { opacity: 0, rotateY: -90 },
  visible: (i = 1) => ({
    opacity: 1,
    rotateY: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
};

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="text-center mb-8"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-[0_0_0.4rem_#8245ec]">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </motion.div>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-5 py-10 justify-between">
      {SkillsInfo.map((category, index) => (
        <motion.div
          key={category.title}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={index}
          className="glass-card w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_2px_rgba(130,69,236,0.3)] hover:shadow-[0_0_30px_5px_rgba(130,69,236,0.6)] transition-all duration-300"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-4 text-center pt-6">
            {category.title}
          </h3>

          <Tilt
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 px-6 pb-8">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  variants={flipCard}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="flex items-center justify-center space-x-2 backdrop-blur-md border-2 border-gray-700 bg-white/5 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center hover:bg-[#8245ec33] hover:scale-105 transition-all duration-300"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-8 sm:h-8"
                  />
                  <span className="text-xs sm:text-sm text-gray-300 font-medium">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </Tilt>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;
