import Skills from "../components/Skills";

const About = () => (
  <section id="about" className="min-h-[calc(100vh-5.5rem)] pt-28 px-8 dark:text-white">
    <h2 className="text-3xl font-bold mb-4">About Me</h2>
    <p className="text-lg text-gray-700 dark:text-stone-100">
      Full-stack developer with hands-on experience in building web applications using React and proficient in backend technologies including Node.js, Express, Python for functional programming and SQL, NoSQL, and graph databases. Strong ability to collaborate in Agile environments, with experience in AWS cloud services and a solid foundation in data analysis/engineering. Passionate about learning and can adopt new technologies in hours.
    </p>
    <Skills />
  </section>
);

export default About;
