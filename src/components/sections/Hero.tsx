import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        url: string;
      };
    }
  }
}

interface SplineViewerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  url: string;
}

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="animated-gradient absolute inset-0"></div>
        <div className="floating-element w-64 h-64 rounded-full bg-sage-200/40 top-20 -left-20"></div>
        <div className="floating-element w-96 h-96 rounded-full bg-sage-100/30 bottom-10 -right-20 animate-float delay-1000"></div>
        <div className="floating-element w-32 h-32 rounded-full bg-sage-300/20 top-1/3 right-1/4 animate-float delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block bg-sage-300/20 px-4 py-1 rounded-full mb-6">
              <p className="text-sage-400 text-sm font-medium">Computer Engineer</p>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Creating <span className="text-sage-400">elegant solutions</span> for complex technical challenges
            </h1>
            
            <p className="text-lg md:text-xl text-sage-400/80 mb-10 max-w-2xl mx-auto">
              I design and build modern applications with a focus on performance, 
              security, and exceptional user experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#projects" className="button-primary">
                View My Work
              </a>
              <a href="#contact" className="button-secondary">
                Get In Touch
              </a>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" className="text-sage-400/70 hover:text-sage-400 transition-colors">
              <ArrowDown size={24} />
            </a>
          </div>
        </div>
      </div>

      <script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.79/build/spline-viewer.js"></script>
      <spline-viewer url="https://prod.spline.design/0nGt9d72P2HER5Ma/scene.splinecode"></spline-viewer>
    </section>
  );
};

export default Hero;
