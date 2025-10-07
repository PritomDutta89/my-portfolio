import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  MapPin,
  Download,
  ExternalLink,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { experiences, skills, achievements } from "../constants/constants";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-900">
              Pritom Dutta<span className="text-blue-600">.</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "experience", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                      activeSection === item
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              {["home", "about", "experience", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left capitalize px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </nav>

      <section
        id="home"
        className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <Code className="w-4 h-4 mr-2" />
                Available for hire
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Hi, I'm <span className="text-blue-600">Pritom Dutta</span>
                <br />
                <span className="text-gray-600 text-2xl lg:text-4xl">
                  Software Developer
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Results-driven Software Developer with 3 years of experience.
                ReactJS & Node.js specialist focused on creating exceptional
                user experiences and scalable solutions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  Get In Touch
                </button>
                <a
                  href="https://drive.google.com/file/d/1Q1NCSUGylN3K70Th5kj_tzgM_MsQ2Rtw/view?usp=sharing"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors flex items-center justify-center"
                >
                  <Download className="w-5 h-5 mr-2"/>
                  Download CV
                </a>
              </div>

              <div className="flex items-center space-x-6">
                <a
                  href="mailto:duttapritom777@gmail.com"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/pritom-dutta-26388319b/"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/PritomDutta89"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center">
                    <div className="text-6xl font-bold text-gray-800">PD</div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center">
                  <Code className="w-8 h-8 text-gray-800" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-green-400 w-12 h-12 rounded-full flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-gray-800" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-500 hover:text-blue-600 transition-colors animate-bounce cursor-pointer"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Passionate Frontend Developer with Full-Stack Capabilities
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a results-driven Software Developer with 3 years of
                experience, specializing in ReactJS and Node.js. I have a strong
                passion for creating innovative solutions that enhance user
                experiences and drive business growth.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                My expertise spans from building real-time drag-and-drop
                configurator to developing financial management applications.
                I've consistently delivered projects that reduce configuration
                times, increase user engagement, and improve overall system
                efficiency.
              </p>

              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-5 h-5 mr-3 text-blue-600" />
                <span>Pune, Maharashtra, India</span>
              </div>
              <div className="flex items-center text-gray-600 mb-4">
                <Mail className="w-5 h-5 mr-3 text-blue-600" />
                <span>duttapritom777@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-600 mb-6">
                <Phone className="w-5 h-5 mr-3 text-blue-600" />
                <span>+91-8617050563</span>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-bold text-gray-900 mb-6">
                Technical Skills
              </h4>
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="mb-6">
                  <h5 className="font-semibold text-gray-800 mb-3">
                    {category}
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Work Experience
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm p-8 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {exp.position}
                    </h3>
                    <h4 className="text-lg font-semibold text-blue-600 mb-2">
                      {exp.company}
                    </h4>
                    <p className="text-gray-600">{exp.location}</p>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {exp.duration}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Project
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  Hunger - Food Delivery App
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A full-stack food delivery application built with modern
                  technologies, featuring seamless user experience, secure
                  payments, and efficient order management.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">
                      Built with ReactJS, Tailwind CSS, Node.js, Express.js, and
                      MongoDB
                    </span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">
                      Implemented JWT authentication and PhonePe payment
                      integration
                    </span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">
                      Achieved 90% UX improvement and 85% transaction
                      reliability boost
                    </span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></div>
                    <span className="text-gray-700">
                      Deployed on Netlify (frontend) and Render (backend) with
                      100% uptime
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-6">
                  {[
                    "ReactJS",
                    "Tailwind CSS",
                    "Node.js",
                    "MongoDB",
                    "JWT",
                    "PhonePe",
                    "Cloudinary",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href="https://github.com/PritomDutta89/Hunger."
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View Project
                </a>
              </div>

              <div className="relative">
                <div className="bg-white rounded-xl shadow-xl p-6 transform rotate-3 hover:rotate-0 transition-transform">
                  <div className="aspect-video bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                    <div className="text-white text-2xl font-bold">
                      🍔 Hunger
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-green-400 w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🚀</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <div className="flex items-center mb-8">
                <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  Education
                </h2>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Bachelor of Technology - Information Technology
                </h3>
                <h4 className="text-lg font-semibold text-blue-600 mb-2">
                  Government College of Engineering and Leather Technology
                </h4>
                <p className="text-gray-600 mb-4">
                  Kolkata, West Bengal | 2019-2023
                </p>
                <div className="flex items-center">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    CGPA: 9.41/10
                  </span>
                </div>
                <p className="text-gray-600 mt-4">
                  Organized tech fest activities and helped grow the campus
                  coding club to promote peer learning.
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <div className="flex items-center mb-8">
                <Award className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  Achievements
                </h2>
              </div>

              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{achievement}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting
              projects. Let's connect and create something amazing together!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <a
              href="mailto:duttapritom777@gmail.com"
              className="bg-blue-50 hover:bg-blue-100 rounded-xl p-6 text-center transition-colors group"
            >
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Email
              </h3>
              <p className="text-gray-600">duttapritom777@gmail.com</p>
            </a>

            <a
              href="tel:+918617050563"
              className="bg-green-50 hover:bg-green-100 rounded-xl p-6 text-center transition-colors group"
            >
              <Phone className="w-12 h-12 text-green-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Phone
              </h3>
              <p className="text-gray-600">+91-8617050563</p>
            </a>

            <div className="bg-purple-50 rounded-xl p-6 text-center">
              <MapPin className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Location
              </h3>
              <p className="text-gray-600">Pune, Maharashtra, India</p>
            </div>
          </div>

          <div className="text-center">
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="https://www.linkedin.com/in/pritom-dutta-26388319b/"
                className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors hover:scale-110 transform"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/PritomDutta89"
                className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900 transition-colors hover:scale-110 transform"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="mailto:duttapritom777@gmail.com"
                className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors hover:scale-110 transform"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>

            <button
              onClick={() => window.open("mailto:duttapritom777@gmail.com")}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors transform hover:scale-105"
            >
              Let's Work Together
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Pritom Dutta. Built with React & Tailwind CSS. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
