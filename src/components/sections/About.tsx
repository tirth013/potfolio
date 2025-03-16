import { FileText, Github, Linkedin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section py-24 relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            
            <div className="space-y-4 text-sage-400/90">
              <p>
                I'm a dedicated computer engineer with expertise in building robust and scalable applications
                that solve real-world problems. My journey in technology began over 8 years ago, and I've
                been passionate about creating elegant solutions ever since.
              </p>
              
              <p>
                With a background in both software and hardware engineering, I bring a unique perspective to
                projects that require deep technical understanding across the entire stack.
              </p>
              
              <p>
                I believe that the best engineering is invisible to users — it just works, feels intuitive,
                and delivers exceptional performance without drawing attention to itself.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <a 
                href="/final.pdf" 
                className="button-primary flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText size={18} />
                <span>Download Resume</span>
              </a>
              
              <div className="flex items-center gap-4">
                <a 
                  href="https://github.com/tirth013" 
                  className="p-3 rounded-full bg-sage-200 text-sage-400 hover:bg-sage-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/tirth-asodariya111/" 
                  className="p-3 rounded-full bg-sage-200 text-sage-400 hover:bg-sage-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-sage-200 shadow-xl animate-fade-in">
              <img 
                src="/profile.JPG" 
                alt="Tirth Asodariya" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sage-400/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
