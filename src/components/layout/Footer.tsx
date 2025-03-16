
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sage-200 text-sage-400 py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="font-mono text-xl font-semibold">Tirth Asodariya</h3>
            <p className="text-sm max-w-xs">
              Building elegant solutions to complex problems through thoughtful engineering.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-sm hover:text-sage-300 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-sm hover:text-sage-300 transition-colors">About</a>
              </li>
              <li>
                <a href="#skills" className="text-sm hover:text-sage-300 transition-colors">Skills</a>
              </li>
              <li>
                <a href="#experience" className="text-sm hover:text-sage-300 transition-colors">Experience</a>
              </li>
              <li>
                <a href="#projects" className="text-sm hover:text-sage-300 transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-sm hover:text-sage-300 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-base font-semibold">Connect With Me</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/tirth013" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sage-400 hover:text-sage-300 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/tirth-asodariya111/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sage-400 hover:text-sage-300 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:contact@example.com" 
                className="text-sage-400 hover:text-sage-300 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-sage-300/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-sage-400/80">
            &copy; {currentYear} John Doe. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-sage-400/80 hover:text-sage-300 transition-colors flex items-center gap-1"
            >
              <span>View Resume</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
