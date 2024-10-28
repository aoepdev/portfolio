import skills from "../data/skillsData.ts";

const Skills = () => (
  <section id="skills" className="pt-16 px-4">
    <h2 className="text-3xl font-bold mb-8">Skills</h2>
    <div className="grid grid-cols-2 gap-12 md:grid-cols-3 md:gap-6">
      {Object.keys(skills).map((category) => (
        <div key={category} className="justify-items-center">
          <h3 className="text-xl font-semibold mb-4">{category}</h3>
          <ul className="space-y-2">
            {skills[category as keyof typeof skills].map((skill, idx) => (
              <li key={idx} className="flex items-center space-x-2 text-gray-800 dark:text-gray-200">
                <img src={skill.logo} alt={skill.name} className="w-12 h-12" />
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
