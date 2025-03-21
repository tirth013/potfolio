import { useState, useRef, useEffect } from "react";
import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
    achievements: ["GPA: 3.9/4.0", "Dean's List (all semesters)", "ACM Programming Team"],
  },
];

interface EducationCardProps {
  title: string;
  subtitle: string;
  location: string;
  period: string;
  description: string;
  tags: string[];
  index: number;
}

const EducationCard = ({
  title,
  subtitle,
  location,
  period,
  description,
  tags,
  index,
}: EducationCardProps) => {
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

const Education = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="education" className="section py-24" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <p className="text-navy-300/80 max-w-2xl mx-auto">
            My academic background that shaped my expertise.
          </p>
        </div>

        <div className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, idx) => (
              <EducationCard
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
        </div>
      </div>
    </section>
  );
};

export default Education; 