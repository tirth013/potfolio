
import { useState, useEffect, useRef } from "react";
import { Code, Database, Server, Terminal } from "lucide-react";

const skills = {
  programmingLanguages: [
    { name: "JavaScript", level: 90 },
    { name: "Python", level: 85 },
    { name: "C++", level: 75 },
    { name: "Java", level: 80 },
    { name: "TypeScript", level: 88 },
  ],
  frameworksLibraries: [
    { name: "React", level: 92 },
    { name: "Node.js", level: 88 },
    { name: "TensorFlow", level: 70 },
    { name: "Django", level: 75 },
    { name: "Express", level: 85 },
  ],
  toolsPlatforms: [
    { name: "Git", level: 95 },
    { name: "Docker", level: 85 },
    { name: "AWS", level: 78 },
    { name: "Linux", level: 90 },
    { name: "CI/CD", level: 82 },
  ],
  softSkills: [
    { name: "Problem Solving", level: 95 },
    { name: "Team Leadership", level: 85 },
    { name: "Communication", level: 90 },
    { name: "Project Management", level: 85 },
    { name: "Adaptability", level: 92 },
  ],
};

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const [width, setWidth] = useState(0);
  const skillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setWidth(level);
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, [level, delay]);

  return (
    <div ref={skillRef} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-sage-400">{name}</span>
        <span className="text-xs font-medium text-sage-400/70">{level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-progress bg-sage-300"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

const SkillCategory = ({
  title,
  skills,
  icon,
}: {
  title: string;
  skills: { name: string; level: number }[];
  icon: React.ReactNode;
}) => {
  return (
    <div className="bg-white/80 dark:bg-sage-400/10 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-sage-200/50 hover:shadow-md transition-shadow">
      <div className="flex items-center mb-6">
        <div className="p-3 rounded-full bg-sage-200 text-sage-400 mr-4">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <div>
        {skills.map((skill, idx) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            delay={idx * 100}
          />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section py-24 bg-sage-100/50">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <p className="text-sage-400/80 max-w-2xl mx-auto">
            Through years of practice and hands-on experience, I've developed expertise
            in various technologies and methodologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SkillCategory
            title="Programming Languages"
            skills={skills.programmingLanguages}
            icon={<Code size={24} />}
          />
          <SkillCategory
            title="Frameworks & Libraries"
            skills={skills.frameworksLibraries}
            icon={<Server size={24} />}
          />
          <SkillCategory
            title="Tools & Platforms"
            skills={skills.toolsPlatforms}
            icon={<Terminal size={24} />}
          />
          <SkillCategory
            title="Soft Skills"
            skills={skills.softSkills}
            icon={<Database size={24} />}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
