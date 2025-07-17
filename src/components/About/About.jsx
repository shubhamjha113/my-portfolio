import { Typewriter } from 'react-simple-typewriter'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import profileImage from '../../assets/profile.png'

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center md:gap-x-12 lg:gap-x-20">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="md:w-1/2 text-center md:text-left mt-8 md:mt-0"
        >
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight drop-shadow-[0_0_0.4rem_#8245ec]">
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className="text-3xl sm:text-4xl md:text-[2.8rem] lg:text-[3.5rem] xl:text-[2.8rem] font-bold text-white mb-4 leading-tight whitespace-nowrap drop-shadow-[0_0_0.4rem_#8245ec]">
            Shubham Kumar Jha
          </h2>

          {/* Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white drop-shadow-[0_0_0.4rem_#8245ec]">I am a </span>
            <Typewriter
              words={[
                'Fullstack Developer',
                'React.Js Developer',
                'UI/UX Designer',
                'DSA Practitioner',
                'Frontend Developer',
                'Problem Solver',
                'Passionate Coder',
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={2000}
            />
          </h3>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
          I’m a frontend developer with strong expertise in React.js, Tailwind CSS, and modern UI design.
          I’ve built intelligent, real-world projects like an AI-powered Trip Planner, YouTube Clone, and NetflixGPT – an AI-based movie suggestion app.
          I love creating responsive, user-friendly interfaces that combine performance, design, and smart AI integrations using APIs and Firebase. Currently focused on building projects that stand out in both innovation and user experience.
          </p>

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/15fpwYFraskm9K9N09b8CeRTWTVetceys/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105 animate-bounce hover:animate-pulse"
            style={{
            background: 'linear-gradient(90deg, #8245ec, #a855f7)',
            boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
          DOWNLOAD CV
          </a>
        </motion.div>

        {/* Right */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
       <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full transition-transform duration-500 hover:-translate-y-2"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Shubham Kumar Jha"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
          </motion.div>      
        </div>
      </div>
    </section>
  )
}

export default About
