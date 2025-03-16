
import { useState } from "react";
import { Send, Mail, Phone, MapPin, Github, Linkedin, Check } from "lucide-react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formState);
      setFormStatus("success");
      setFormState({ name: "", email: "", message: "" });
      
      // Reset form status after 3 seconds
      setTimeout(() => {
        setFormStatus("idle");
      }, 3000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="section py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="floating-element w-64 h-64 rounded-full bg-sage-200/40 -top-20 -right-20"></div>
        <div className="floating-element w-96 h-96 rounded-full bg-sage-100/30 -bottom-40 -left-20 animate-float delay-1000"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-sage-400/80 max-w-2xl mx-auto">
            Interested in working together or have questions about my experience?
            Feel free to reach out through the form or direct contact methods below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white/80 dark:bg-sage-400/10 backdrop-blur-sm rounded-xl p-8 shadow-sm border border-sage-200/50 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-sage-400 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-sage-200 focus:border-sage-300 focus:ring focus:ring-sage-200 focus:ring-opacity-50 transition-all bg-white/50"
                  disabled={formStatus === "submitting" || formStatus === "success"}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-sage-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-sage-200 focus:border-sage-300 focus:ring focus:ring-sage-200 focus:ring-opacity-50 transition-all bg-white/50"
                  disabled={formStatus === "submitting" || formStatus === "success"}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-sage-400 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-sage-200 focus:border-sage-300 focus:ring focus:ring-sage-200 focus:ring-opacity-50 transition-all bg-white/50"
                  disabled={formStatus === "submitting" || formStatus === "success"}
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={formStatus === "submitting" || formStatus === "success"}
                className={`w-full py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-all ${
                  formStatus === "success"
                    ? "bg-green-500 text-white"
                    : "bg-sage-300 text-white hover:bg-sage-400"
                }`}
              >
                {formStatus === "submitting" && (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                )}
                {formStatus === "idle" && (
                  <>
                    Send Message
                    <Send size={18} className="ml-2" />
                  </>
                )}
                {formStatus === "success" && (
                  <>
                    Message Sent
                    <Check size={18} className="ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>
          
          <div className="space-y-8 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-sage-200 text-sage-400 mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Email</h4>
                  <a href="mailto:contact@johndoe.com" className="text-sage-400/80 hover:text-sage-400 transition-colors">
                    contact@johndoe.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-sage-200 text-sage-400 mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Phone</h4>
                  <a href="tel:+15551234567" className="text-sage-400/80 hover:text-sage-400 transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-sage-200 text-sage-400 mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Location</h4>
                  <p className="text-sage-400/80">San Francisco, California</p>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-sage-200/50">
              <h4 className="text-lg font-medium mb-4">Connect on Social Media</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-sage-200 text-sage-400 hover:bg-sage-300 hover:text-white transition-all"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-sage-200 text-sage-400 hover:bg-sage-300 hover:text-white transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            
            <div className="bg-sage-100 rounded-xl p-6 border border-sage-200/50 mt-8">
              <h4 className="text-lg font-medium mb-2">Currently Available</h4>
              <p className="text-sage-400/80">
                I'm open to freelance projects, contract roles, and interesting collaborations.
                My availability changes frequently, so please reach out to discuss your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
