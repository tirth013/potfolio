import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Github, ArrowRight } from "lucide-react";

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  category: string;
};

const projects: Project[] = [
  {
    id: "multi-source-bot",
    title: "Multi-Source Bot",
    description: " AI-powered tool designed to gather, analyze, and synthesize information from multiple sources efficiently.",
    image: "/Multi-Source-bot.jfif",
    technologies: ["Langchain","Langgraph","Streamlit"],
    githubUrl: "https://github.com/tirth013/Multi-Source-Bot",
    category: "AI/ML",
  },
  {
    id: "resume-reveal",
    title: "Resume Reveal",
    description: "An intelligent resume parser and analyzer that extracts key information from resumes and provides insights.",
    image: "/resume-parser.svg",
    technologies: ["Python", "Flask", "LangChain", "Llama 3", "Pipenv"],
    githubUrl: "https://github.com/tirth013/ResumeReveal",
    category: "AI/ML",
  },
  {
    id: "traffic-violation-detection",
    title: "Traffic Violation Detection",
    description: "An automated system using machine learning to detect vehicles violating traffic signals in real-time.",
    image: "/traffic.webp",
    technologies: ["Python", "TensorFlow", "YOLOv5", "Flask", "OpenCV"],
    githubUrl: "https://github.com/tirth013/Automatic-Traffic-Violation-Detection",
    category: "AI/ML",
  },
  {
    id: "neural-image-processor",
    title: "Neural Image Processor",
    description: "A machine learning application that enhances and processes images using neural networks.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    technologies: ["Python", "TensorFlow", "OpenCV", "Flask", "AWS Lambda"],
    githubUrl: "https://github.com/johndoe/project3",
    category: "AI/ML",
  },
  {
    id: "secure-messaging-app",
    title: "Secure Messaging App",
    description: "End-to-end encrypted messaging platform with focus on privacy and security.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070&auto=format&fit=crop",
    technologies: ["Flutter", "Firebase", "SQLite", "Signal Protocol", "WebRTC"],
    githubUrl: "https://github.com/johndoe/project4",
    category: "Mobile",
  },
  {
    id: "distributed-computing-platform",
    title: "Distributed Computing Platform",
    description: "A scalable platform for distributing computational tasks across multiple nodes efficiently.",
    image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?q=80&w=1887&auto=format&fit=crop",
    technologies: ["Go", "Docker", "Kubernetes", "gRPC", "Redis"],
    githubUrl: "https://github.com/johndoe/project5",
    category: "Backend",
  },
  {
    id: "blockchain-supply-chain",
    title: "Blockchain Supply Chain Tracker",
    description: "A transparent supply chain management system built on blockchain technology.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop",
    technologies: ["Solidity", "Ethereum", "Web3.js", "React", "Node.js"],
    githubUrl: "https://github.com/johndoe/project6",
    category: "Blockchain",
  },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <div
      className="project-card bg-white/90 dark:bg-sage-400/10 rounded-xl overflow-hidden shadow-sm border border-sage-200/50 h-full flex flex-col cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleNavigate}
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sage-400/50 to-transparent opacity-70"></div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex-grow">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium bg-sage-200/70 text-sage-400 px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs font-medium bg-sage-200/70 text-sage-400 px-2 py-1 rounded-full">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
          <h3 className="text-xl font-bold mb-2 text-sage-400">{project.title}</h3>
          <p className="text-sage-400/70 text-sm mb-4">{project.description}</p>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex space-x-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage-400 hover:text-sage-300 transition-colors"
              onClick={(e) => e.stopPropagation()}
              aria-label="View Source Code"
            >
              <Github size={18} />
            </a>
          </div>
          <button
            className="text-sage-300 hover:text-sage-400 flex items-center text-sm font-medium transition-all cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              handleNavigate();
            }}
          >
            View Details
            <ArrowRight size={16} className={`ml-1 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
          </button>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [visibleProjects, setVisibleProjects] = useState<typeof projects>([]);

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

  useEffect(() => {
    if (filter === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((p) => p.category === filter));
    }
  }, [filter]);

  useEffect(() => {
    // Animate projects appearing
    setVisibleProjects([]);
    const timer = setTimeout(() => {
      filteredProjects.forEach((project, index) => {
        setTimeout(() => {
          setVisibleProjects((prev) => [...prev, project]);
        }, index * 100);
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [filteredProjects]);

  return (
    <section id="projects" className="section py-24 bg-sage-100/50">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-sage-400/80 max-w-2xl mx-auto">
            A selection of my most significant work showcasing my technical capabilities
            and problem-solving approach.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === category
                    ? "bg-sage-300 text-white"
                    : "bg-white/80 text-sage-400 hover:bg-sage-200/70"
                }`}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-500 ${
                visibleProjects.includes(project) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
