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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    try {
      const response = await fetch("https://tirthbackend.onrender.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormState({ name: "", email: "", message: "" });

        setTimeout(() => setFormStatus("idle"), 3000);
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setFormStatus("error");
    }
  };

  return (
    <section id="contact" className="section py-24 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600">
            Interested in working together or have questions? Send me a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-600">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">Message</label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border rounded-lg"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formStatus === "submitting" || formStatus === "success"}
                className={`button-primary flex items-center gap-2 ${
                  formStatus === "success"
                    ? "bg-green-500 text-white"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {formStatus === "submitting" ? (
                  <>
                    <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : formStatus === "success" ? (
                  <>
                    Message Sent <Check size={18} className="ml-2" />
                  </>
                ) : (
                  <>
                    Send Message <Send size={18} className="ml-2" />
                  </>
                )}
              </button>

              {/* Form Status Message */}
              {formStatus === "error" && (
                <p className="text-red-500 text-sm mt-2">❌ Failed to send message. Try again.</p>
              )}
              {formStatus === "success" && (
                <p className="text-green-500 text-sm mt-2">✅ Message sent successfully!</p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">Contact Information</h3>

            <div className="flex items-center space-x-4">
              <Mail size={24} />
              <a href="mailto:your-email@example.com" className="text-gray-600">
                tirthasodariya13.work@example.com
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <Phone size={24} />
              <a href="tel:+123456789" className="text-gray-600">
                +91 84859 12886
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <MapPin size={24} />
              <p className="text-gray-600">Surat, Gujarat</p>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a href="https://github.com/tirth013" className="p-3 rounded-full bg-gray-200 hover:bg-gray-300">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/tirth-asodariya111/" className="p-3 rounded-full bg-gray-200 hover:bg-gray-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
