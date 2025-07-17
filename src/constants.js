 // Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
 import netlifyLogo from './assets/tech_logo/netlify.png';
 import vercelLogo from './assets/tech_logo/vercel.png';

 // Experience Section Logo's
import internProLogo from './assets/company_logo/internpro_logo.jpeg';
import vocLogo from './assets/company_logo/VOC_logo.png';

 // Education Section Logo's
import hitLogo from './assets/education_logo/HIT_Logo.jpg';
import rkLogo from './assets/education_logo/rk_college_logo.jpeg';
import bsebLogo from './assets/education_Logo/bseb.jpeg'

 // Project Section Logo's
import aitripLogo from './assets/work_logo/Ai-trip.png';
import diceLogo from './assets/work_logo/diceGame.png';
import movieLogo from './assets/work_logo/movieGPT.png';
import recipeLogo from './assets/work_logo/RecipeFinder.png';
import t2speechLogo from './assets/work_logo/t2speech.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      //{ name: 'Springboot', logo: springbootLogo },
      //{ name: 'Node JS', logo: nodejsLogo },
      //{ name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      //{ name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      //{ name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      //{ name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      //{ name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      //{ name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      //{ name: 'Postman', logo: postmanLogo },
      //{ name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      //{ name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: internProLogo,
      role: "Web Developer",
      company: "Intern Pro ",
      date: "june 2025 - july 2025",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling  frontend  development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Tailwind CSS",
      ],
    },
    {
      id: 1,
      img: vocLogo,
      role: "Frontend Developer",
      company: "vault of codes ",
      date: "July 2025 - August 2025",
      desc: "Contributed to innovative projects as a frontend Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, SQL, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
 
  ];
  
   export const education = [
     {
        id: 0,
        img: hitLogo,
        school: "Heritage Institute of Technology, Kolkata",
        date: "Aug 2022 - June 2026",
        grade: "8.21 CGPA (till 6th Semester)",
        desc: "I am pursuing a Bachelor's degree in Electronics and Communication Engineering, which has equipped me with strong analytical and problem-solving skills. My real passion, however, lies in the IT sector, particularly in software development. I have actively cultivated my skills in frontend technologies, dedicating significant time to building responsive and user-friendly web applications through various projects. I am keen to leverage my technical foundation and hands-on experience in a dynamic role within the IT industry.",
        degree: "Bachelor of Technology - B.Tech, Electronics and Communication Engineering",
      },
      {
        id: 1,
        img: rkLogo, 
        school: "Ram Krishna College, Madhubani",
        date: "May 2019 - March 2021",
        grade: "82.6%",
        desc: "I completed my Higher Secondary education with a focus on Physics, Chemistry, and Mathematics (PCM). This curriculum was instrumental in developing my analytical abilities and a logical approach to problem-solving, building a strong foundation that sparked my interest in pursuing a career in technology and engineering.",
        degree: "Higher Secondary (Class 12th) - Science Stream",
      },
      {
        id: 2,
        img: bsebLogo, 
        school: "B.S. High School, Madhubani",
        date: "2018 - 2019",
        grade: "86.8%",
        desc: "I completed my Class 10th education from the Bihar School Examination Board (BSEB). This foundational stage provided me with a comprehensive knowledge base and my strong academic performance here motivated me to pursue the science stream in my higher secondary education.",
        degree: "Secondary School (Class 10th) - BSEB",
        }  
  ];
  
  export const projects = [
    {
      id: 0,
      title: " MovieGPT ",
      description:
        "MovieGPT is a Netflix-style web app that delivers personalized movie recommendations using Google's Gemini AI. Users can explore trending, top-rated, and upcoming movies, watch trailers, and get AI-based suggestions based on natural language prompts.",
      image: movieLogo,
      tags: ["HTML", "Tailwind", "JavaScript", "React JS", "Redux Toolkit", "Firebase Auth",  "API", "Vite"],
      github: "https://github.com/shubhamjha113/movieGPT",
      webapp: "https://movie-gpt-roan.vercel.app/",
    },
    {
      id: 1,
      title: "AI Trip Planner ",
      description:
        "AI Trip Planner creates custom travel itineraries based on user inputs like destination, duration, budget, and travel group. Powered by Gemini AI, it generates detailed day-wise plans with visuals, voice input, wishlist, and map-based route suggestions.",
      image: aitripLogo,
      tags: ["React JS", "HTML", "JavaScript","Tailwind CSS", "Firebase Realtime Database", "Google OAuth", "API"],
      github: "https://github.com/shubhamjha113/Ai-Trip-Planner",
      webapp: "https://ai-trip-planner-topaz-eight.vercel.app/",
    },
    {
      id: 2,
      title: "Recipe Finder",
      description:
        "Recipe Finder helps users search and discover recipes based on ingredients or cuisine. It fetches recipe details like ingredients, steps, and images using an external API. Ideal for quick and smart cooking ideas",
      image: recipeLogo,
      tags: ["React JS", "HTML", "CSS", "JavaScript"," Spoonacular API"],
      github: "https://github.com/shubhamjha113/Recipe-Finder",
      webapp: "https://recipe-finder-eight-rosy.vercel.app/",
    },
    {
      id: 3,
      title: "Dice-Game",
      description:
        "A fun browser-based dice game where two players roll the dice, and the higher number wins. It includes animations, scoring logic, and a reset mechanism for replay.",
      image: diceLogo,
      tags: ["React JS","HTML" , "Tailwind","Javascript","DOM manipulation"],
      github: "https://github.com/shubhamjha113/DICE-GAME",
      webapp: "https://dice-game-swart-one.vercel.app/",
    },
    {
      id: 4,
      title: "Text-to-Speech-converter Tool",
      description:
        "A web app that converts typed text into speech using multiple voice and language options. Features include real-time voice playback and a clean, user-friendly UI.",
      image: t2speechLogo,
      tags: ["JavaScript", "Web speech API", "HTML", "CSS"],
      github: "https://github.com/shubhamjha113/Text-to-Speech-converter",
      webapp: "https://shubhamjha113.github.io/Text-to-Speech-converter/",
    },
    
  ];  