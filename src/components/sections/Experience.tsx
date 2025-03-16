
import { useState, useRef, useEffect } from "react";
import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    period: "2020 - Present",
    description:
      "Lead a team of engineers in developing scalable cloud solutions. Architected and implemented microservices architecture using Node.js and Docker. Reduced system latency by 40% through performance optimizations.",
    technologies: ["React", "Node.js", "AWS", "Docker", "MongoDB"],
  },
  {
    title: "Software Engineer",
    company: "InnovateTech",
    location: "Seattle, WA",
    period: "2017 - 2020",
    description:
      "Developed and maintained full-stack applications for enterprise clients. Implemented RESTful APIs and integrated with third-party services. Collaborated with UX designers to improve user interfaces.",
    technologies: ["JavaScript", "Python", "PostgreSQL", "Express", "Redux"],
  },
  {
    title: "Junior Developer",
    company: "WebDev Agency",
    location: "Boston, MA",
    period: "2015 - 2017",
    description:
      "Built responsive web applications using modern JavaScript frameworks. Participated in agile development practices and code reviews. Optimized frontend performance and accessibility.",
    technologies: ["HTML/CSS", "JavaScript", "React", "Git", "SASS"],
  },
  {
    title: "Software Engineering Intern",
    company: "StartupLabs",
    location: "Austin, TX",
    period: "Summer 2014",
    description:
      "Assisted in developing new features for the company's main product. Fixed bugs and improved test coverage. Gained experience with agile methodologies and version control.",
    technologies: ["Java", "Spring", "MySQL", "JUnit", "Maven"],
  },
];

const education = [
  {
    degree: "M.S. in Computer Science",
    institution: "Stanford University",
    location: "Stanford, CA",
    period: "2013 - 2015",
    description:
      "Specialized in Machine Learning and Distributed Systems. Conducted research on optimizing neural networks for edge computing applications.",
    achievements: ["GPA: 3.9/4.0", "Research Assistant", "Teaching Assistant for Data Structures course"],
  },
  {
    degree: "B.S. in Computer Engineering",
    institution: "MIT",
    location: "Cambridge, MA",
    period: "2009 - 2013",
    description:
      "Studied computer architecture, algorithms, and embedded systems. Completed a senior project on low-power IoT sensor networks.",
    achievements: ["Cum Laude", "Dean's List (all semesters)", "ACM Programming Team"],
  },
];

interface ExperienceCardProps {
  title: string;
  subtitle: string;
  location: string;
  period: string;
  description: string;
  tags: string[];
  index: number;
}

const ExperienceCard = ({
  title,
  subtitle,
  location,
  period,
  description,
  tags,
  index,
}: ExperienceCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, index * 150);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [index]);

  return (
    <Card 
      ref={cardRef}
      className={`transition-all duration-700 ease-out border-navy-200/50 hover:border-navy-300/70 hover:shadow-md bg-white/80 dark:bg-navy-400/10 h-full ${
        isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-10"
      }`}
    >
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-navy-300/90 font-medium">{subtitle}</CardDescription>
      </CardHeader>
      
      <div className="flex items-center text-sm text-navy-300/70 px-6">
        <div className="flex items-center mr-4">
          <MapPin size={14} className="mr-1" />
          <span>{location}</span>
        </div>
        <div className="flex items-center">
          <Calendar size={14} className="mr-1" />
          <span>{period}</span>
        </div>
      </div>
      
      <CardContent className="pt-4">
        <p className="text-navy-300/80 mb-4">{description}</p>
      </CardContent>
      
      <CardFooter className="flex-wrap gap-2 border-t border-navy-200/30 pt-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium bg-navy-200 text-navy-400 px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </CardFooter>
    </Card>
  );
};

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("work");

  return (
    <section id="experience" className="section py-24" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Experience & Education</h2>
          <p className="text-navy-300/80 max-w-2xl mx-auto">
            My professional journey and academic background that shaped my expertise.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="grid w-full max-w-md grid-cols-2 bg-navy-200/50">
              <TabsTrigger value="work" className="data-[state=active]:bg-navy-300 data-[state=active]:text-navy-100">
                Work Experience
              </TabsTrigger>
              <TabsTrigger value="education" className="data-[state=active]:bg-navy-300 data-[state=active]:text-navy-100">
                Education
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="work" className="mt-0 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {experiences.map((exp, idx) => (
                <ExperienceCard
                  key={`exp-${idx}`}
                  title={exp.title}
                  subtitle={exp.company}
                  location={exp.location}
                  period={exp.period}
                  description={exp.description}
                  tags={exp.technologies}
                  index={idx}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="education" className="mt-0 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((edu, idx) => (
                <ExperienceCard
                  key={`edu-${idx}`}
                  title={edu.degree}
                  subtitle={edu.institution}
                  location={edu.location}
                  period={edu.period}
                  description={edu.description}
                  tags={edu.achievements}
                  index={idx}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Experience;
