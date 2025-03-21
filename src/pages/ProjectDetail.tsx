import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github, Calendar, User, Tag } from "lucide-react";
import { useEffect, useState } from "react";
import Footer from "../components/layout/Footer";

const projects = [
  {
    id: "multi-source-bot",
    title: "Multi-Source Bot",
    description: "AI-powered tool designed to gather, analyze, and synthesize information from multiple sources efficiently.",
    fullDescription: `
      The MultiSourceBot is an AI-powered tool designed to gather, analyze, and synthesize information from multiple sources efficiently. Built using LangChain and LangGraph, it enables advanced retrieval and reasoning for structured insights. The application is deployed using Streamlit, providing an interactive and user-friendly interface. The project is managed in a Pipenv virtual environment to ensure dependency management and reproducibility.
      
      Key Features:
      • Multi-source Data Retrieval: Uses LangChain to fetch and process information from various sources.
      • Graph-based Processing: Implements LangGraph for structured reasoning and flow control.
      • Interactive Web Interface: Built with Streamlit for seamless user experience.
      • Efficient Dependency Management: Utilizes Pipenv for managing Python packages.
      
      The project is open-source and designed to be easily extended with additional data sources and reasoning capabilities. It demonstrates the power of combining modern LLM technologies with structured workflows for information processing.
    `,
    image: "/Multi-Source-bot.jfif",
    technologies: ["Langchain", "Langgraph", "Streamlit", "Pipenv", "Python"],
    githubUrl: "https://github.com/tirth013/Multi-Source-Bot",
    category: "AI",
    date: "March 2025",
    role: "AI Developer",
    client: "Personal Project",
  },
  {
    id: "traffic-violation-detection",
    title: "Traffic Violation Detection",
    description: "An automated system using machine learning to detect vehicles violating traffic signals in real-time.",
    fullDescription: `
      The Traffic Violation Detection system is an innovative solution leveraging computer vision and machine learning techniques to automatically identify vehicles that violate traffic signals at road intersections.
      
      This project implements a complete pipeline from video capture to violation detection and reporting. I developed a custom model based on the YOLO (You Only Look Once) framework that processes video feeds from traffic cameras in real-time to detect vehicles and their positions relative to traffic signals.
      
      Key features include:
      • Real-time vehicle detection and tracking across video frames
      • Traffic signal state recognition (red, yellow, green)
      • Violation detection when vehicles cross stop lines during red signals
      • Web-based dashboard for monitoring violations and system performance
      
      The main technical challenge was achieving reliable detection in various lighting and weather conditions while maintaining real-time processing speeds. I implemented several optimization techniques and fine-tuned the YOLO model specifically for this use case to achieve high accuracy with minimal false positives.
    `,
    image: "/traffic.webp",
    technologies: ["Python", "TensorFlow", "YOLOv5", "Flask", "OpenCV"],
    githubUrl: "https://github.com/tirth013/Automatic-Traffic-Violation-Detection",
    category: "Machine Learning",
    date: "September 2024",
    role: "Final Year Student",
    client: "Final year Project",
  },
  {
    id: "neural-image-processor",
    title: "Neural Image Processor",
    description: "A machine learning application that enhances and processes images using neural networks.",
    fullDescription: `
      The Neural Image Processor is an advanced image enhancement application powered by deep learning models to automatically improve image quality and perform complex transformations.
      
      This project involved developing a Python backend with TensorFlow that hosts various neural network models for tasks like super-resolution, colorization, style transfer, and object removal. I created a web interface using Flask that allows users to upload images and apply these enhancements with simple controls.
      
      Key features include:
      • Automatic enhancement of low-quality images
      • Smart object removal with content-aware fill
      • Artistic style transfer from reference images
      • Batch processing capabilities
      • API access for integration with other applications
      
      The primary challenge was optimizing the neural network models for production use, balancing quality results with reasonable processing times. I implemented model quantization and GPU acceleration to achieve processing speeds suitable for interactive use.
    `,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1778&auto=format&fit=crop",
    ],
    technologies: ["Python", "TensorFlow", "OpenCV", "Flask", "AWS Lambda"],
    demoUrl: "https://example.com/neural-image",
    githubUrl: "https://github.com/johndoe/neural-image",
    category: "AI/ML",
    date: "January 2022",
    role: "Machine Learning Engineer",
    client: "PixelPerfect Technologies",
  },
  {
    id: "secure-messaging-app",
    title: "Secure Messaging App",
    description: "End-to-end encrypted messaging platform with focus on privacy and security.",
    fullDescription: `
      The Secure Messaging App is a privacy-focused communication platform that ensures user conversations remain private through robust end-to-end encryption and security features.
      
      I led the development of this cross-platform mobile application using Flutter, implementing the Signal Protocol for end-to-end encryption. The app uses Firebase for infrastructure while ensuring that message content is never accessible, even to the service providers.
      
      Key features include:
      • End-to-end encrypted text, voice, and video communication
      • Disappearing messages with customizable timeframes
      • Secure file and media sharing
      • Multi-device synchronization
      • Local encryption of all stored data
      
      The biggest challenge was implementing a secure yet user-friendly authentication system. I created a multi-factor authentication flow that maintains high security standards while keeping the user experience smooth and intuitive.
    `,
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563986768817-257bf91c5e9a?q=80&w=1964&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    ],
    technologies: ["Flutter", "Firebase", "SQLite", "Signal Protocol", "WebRTC"],
    demoUrl: "https://example.com/secure-messaging",
    githubUrl: "https://github.com/johndoe/secure-messaging",
    category: "Mobile",
    date: "July 2021",
    role: "Mobile Developer",
    client: "PrivSecure Communications",
  },
  {
    id: "distributed-computing-platform",
    title: "Distributed Computing Platform",
    description: "A scalable platform for distributing computational tasks across multiple nodes efficiently.",
    fullDescription: `
      The Distributed Computing Platform is a high-performance system designed to break down complex computational workloads and efficiently distribute them across a network of processing nodes.
      
      This project involved developing a complete distributed computing framework in Go, with containerized worker nodes orchestrated through Kubernetes. The system features dynamic task allocation, fault tolerance, and real-time monitoring of computational resources.
      
      Key features include:
      • Intelligent workload distribution based on node capabilities
      • Automatic recovery from node failures
      • Horizontal scaling based on workload demands
      • Comprehensive logging and performance metrics
      • Support for heterogeneous computing resources
      
      The main technical challenge was implementing an efficient task scheduling algorithm that could adapt to varying node capabilities and workload characteristics. I developed a priority-based scheduler with resource awareness that significantly improved throughput compared to traditional approaches.
    `,
    image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?q=80&w=1887&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551808525-51a94da548ce?q=80&w=1887&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?q=80&w=2070&auto=format&fit=crop",
    ],
    technologies: ["Go", "Docker", "Kubernetes", "gRPC", "Redis"],
    demoUrl: "https://example.com/distributed-computing",
    githubUrl: "https://github.com/johndoe/distributed-computing",
    category: "Backend",
    date: "April 2022",
    role: "Systems Engineer",
    client: "CloudScale Systems",
  },
  {
    id: "blockchain-supply-chain",
    title: "Blockchain Supply Chain Tracker",
    description: "A transparent supply chain management system built on blockchain technology.",
    fullDescription: `
      The Blockchain Supply Chain Tracker is an innovative solution that leverages blockchain technology to create a transparent, immutable record of products as they move through the supply chain.
      
      I designed and implemented a decentralized application (DApp) built on Ethereum that allows stakeholders to track products from origin to consumer. Each transaction in the supply chain is recorded as a smart contract event, creating a verifiable history that cannot be altered.
      
      Key features include:
      • QR code scanning for real-time product authentication
      • Smart contracts for automating payments and transfers
      • Comprehensive product history with timestamp verification
      • Integration with IoT sensors for environmental monitoring
      • Stakeholder-specific dashboards and analytics
      
      The most significant challenge was designing smart contracts that balanced transparency with the proprietary information needs of stakeholders. I implemented a permissioned system with granular access controls that protect sensitive data while maintaining the integrity of the supply chain record.
    `,
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2232&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516245834210-c4969c3979a9?q=80&w=2069&auto=format&fit=crop",
    ],
    technologies: ["Solidity", "Ethereum", "Web3.js", "React", "Node.js"],
    demoUrl: "https://example.com/blockchain-supply",
    githubUrl: "https://github.com/johndoe/blockchain-supply",
    category: "Blockchain",
    date: "September 2021",
    role: "Blockchain Developer",
    client: "SupplyTrace Networks",
  },
];

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState<typeof projects[0] | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Find the project by ID
    const foundProject = projects.find((p) => p.id === id);
    if (foundProject) {
      setProject(foundProject);
    }
    
    // Simulate loading for smoother transitions
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    // Scroll to top when navigating to a new project
    window.scrollTo(0, 0);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sage-100/20">
        <div className="w-16 h-16 border-4 border-sage-300 border-t-sage-400 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sage-100/20">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <p className="mb-8">The project you're looking for doesn't exist or has been removed.</p>
          <Link to="/" className="button-primary">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-sage-100/20 min-h-screen">
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md shadow-sm border-b border-sage-200/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/#projects"
              className="flex items-center text-sage-400 hover:text-sage-300 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              <span>Back to Projects</span>
            </Link>
            <div className="flex space-x-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sage-400 hover:text-sage-300 transition-colors"
              >
                <Github size={18} className="mr-1" />
                <span className="hidden sm:inline">Source Code</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-sage-400/90 text-lg mb-8">{project.description}</p>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-sage-200/50 overflow-hidden mb-10">
            <div className="aspect-video relative overflow-hidden">
              <img
                src={project.images[selectedImageIndex]}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {project.images.length > 1 && (
              <div className="p-4 flex space-x-2 overflow-x-auto">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`w-20 h-20 rounded overflow-hidden flex-shrink-0 transition-all ${
                      selectedImageIndex === index ? "ring-2 ring-sage-300" : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${project.title} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <div className="prose prose-sage max-w-none">
                {project.fullDescription.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-sage-400/90">{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-sage-200/50 h-fit">
              <h3 className="text-xl font-bold mb-4">Project Details</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center text-sage-400 mb-1">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm font-medium">Date</span>
                  </div>
                  <p className="text-sage-400/90 pl-6">{project.date}</p>
                </div>
                
                <div>
                  <div className="flex items-center text-sage-400 mb-1">
                    <User size={16} className="mr-2" />
                    <span className="text-sm font-medium">Role</span>
                  </div>
                  <p className="text-sage-400/90 pl-6">{project.role}</p>
                </div>
                
                <div>
                  <div className="flex items-center text-sage-400 mb-1">
                    <Tag size={16} className="mr-2" />
                    <span className="text-sm font-medium">Technologies</span>
                  </div>
                  <div className="flex flex-wrap gap-2 pl-6 mt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium bg-sage-200/70 text-sage-400 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-8 border-t border-sage-200/50">
            <Link to="/#projects" className="button-secondary">
              <ArrowLeft size={18} className="mr-2" />
              Back to Projects
            </Link>
            
            <div className="flex space-x-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary flex items-center"
              >
                View Source Code
                <Github size={18} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
