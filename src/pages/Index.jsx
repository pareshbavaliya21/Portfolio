import { useEffect, useState } from "react";
import {
  Download,
  Eye,
  Code,
  FileCode,
  Layout,
  Puzzle,
  Brush,
  Server,
  Briefcase,
  Palette,
  GitFork,
  Move,
} from "lucide-react";
import { SiWordpress, SiJquery, SiFormik, SiPyup } from "react-icons/si";
import { FiServer } from "react-icons/fi";
import { ThemeProvider } from "../components/ThemeProvider";
import NavBar from "../components/NavBar";
import ParticleBackground from "../components/ParticleBackground";
import TypewriterText from "../components/TypewriterText";
import ScrollReveal from "../components/ScrollReveal";
import SkillIcon from "../components/SkillIcon";
import ProjectCard from "../components/ProjectCard";
import TimelineItem from "../components/TimelineItem";
import ContactForm from "../components/ContactForm";
import ExperienceItem from "../components/ExperienceItem";

const Index = () => {
  const [activeTyping, setActiveTyping] = useState(0);

  useEffect(() => {
    document.title = "Paresh Bavaliya | React Developer";
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen relative overflow-x-hidden">
        <ParticleBackground />
        <NavBar />

        {/* Hero Section */}
        <section className="min-h-screen flex items-center pt-16">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <ScrollReveal animation="fade-in-right">
                  <span className="px-4 py-1 rounded-full bg-theme-purple/10 text-theme-purple text-sm font-medium">
                    React Developer
                  </span>
                </ScrollReveal>

                <ScrollReveal delay={300} animation="fade-in-right">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    Hi, I'm{" "}
                    <span className="gradient-text">Paresh Bavaliya</span>
                  </h1>
                </ScrollReveal>

                <ScrollReveal delay={600} animation="fade-in-right">
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    Enthusiastic React Developer building immersive web
                    experiences.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={900} animation="fade-in-right">
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="#projects"
                      className="btn-primary flex items-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      View My Projects
                    </a>
                    <a
                      href={`${
                        import.meta.env.BASE_URL
                      }Paresh_Bavaliya_Resume.pdf`}
                      className="btn-secondary flex items-center gap-2"
                      download
                    >
                      <Download className="w-4 h-4" />
                      Download Resume
                    </a>
                  </div>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={600} animation="fade-in-left">
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden gradient-bg p-2 animate-pulse-glow">
                    <img
                      // src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"
                      src="./ProfileImage.jpg"
                      alt="Paresh Bavaliya"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>

                  <div className="absolute -bottom-4 -right-4 md:bottom-10 md:-right-10 bg-white dark:bg-gray-800 rounded-lg p-3 shadow-lg animate-bounce-limited">
                    <div className="text-2xl">👋</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-20 relative">
          <div className="section-container">
            <ScrollReveal>
              <h2 className="section-title gradient-text">About Me</h2>
            </ScrollReveal>

            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div
                className="bg-blob bg-theme-purple/10 w-64 h-64 rounded-full absolute -left-20 top-20 animate-float"
                style={{ animationDelay: "0s" }}
              ></div>
              <div
                className="bg-blob bg-theme-blue/10 w-96 h-96 rounded-full absolute -right-40 bottom-20 animate-float"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="bg-blob bg-theme-purple/5 w-48 h-48 rounded-full absolute left-1/3 top-1/2 animate-pulse-glow"
                style={{ animationDelay: "1.5s" }}
              ></div>
            </div>

            <div className="glass-card p-8 rounded-2xl max-w-3xl mx-auto relative z-10 backdrop-blur-sm shadow-xl border border-white/20 dark:border-gray-800/50 hover:shadow-theme-purple/20 transition-all duration-500">
              <ScrollReveal animation="fade-in">
                <p className="text-lg mb-6 relative">
                  <span className="inline-block text-2xl text-theme-purple font-semibold mr-2">
                    👋
                  </span>
                  Hello! I'm a dedicated React developer with a passion for
                  creating responsive, dynamic applications that users love to
                  interact with.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300} animation="fade-in">
                <div className="mb-6 transform hover:scale-102 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-theme-purple/20 flex items-center justify-center mr-2">
                      <Code className="w-4 h-4 text-theme-purple" />
                    </span>
                    Education
                  </h3>
                  <div className="pl-10 border-l-2 border-theme-purple/30 py-2">
                    {activeTyping === 0 && (
                      <TypewriterText
                        text="Bachelor's in Computer Applications from Dharmsinh Desai University (2022–2025)"
                        className="typing-container"
                        onComplete={() => setActiveTyping(1)}
                      />
                    )}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={600} animation="fade-in">
                <div className="transform hover:translate-y-[-5px] transition-all duration-300">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-theme-blue/20 flex items-center justify-center mr-2">
                      <Puzzle className="w-4 h-4 text-theme-blue" />
                    </span>
                    My Approach
                  </h3>
                  <ul className="space-y-3 pl-10 border-l-2 border-theme-blue/30 py-2">
                    {activeTyping >= 1 && (
                      <li
                        className="flex items-start animate-fade-in"
                        style={{ animationDelay: "100ms" }}
                      >
                        <span className="w-5 h-5 rounded-full bg-theme-purple/20 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                          <span className="w-2 h-2 rounded-full bg-theme-purple"></span>
                        </span>
                        <span>
                          I focus on creating clean, maintainable code
                        </span>
                      </li>
                    )}
                    {activeTyping >= 1 && (
                      <li
                        className="flex items-start animate-fade-in"
                        style={{ animationDelay: "300ms" }}
                      >
                        <span className="w-5 h-5 rounded-full bg-theme-purple/20 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                          <span className="w-2 h-2 rounded-full bg-theme-purple"></span>
                        </span>
                        <span>
                          I prioritize responsive design and accessibility
                        </span>
                      </li>
                    )}
                    {activeTyping >= 1 && (
                      <li
                        className="flex items-start animate-fade-in"
                        style={{ animationDelay: "500ms" }}
                      >
                        <span className="w-5 h-5 rounded-full bg-theme-purple/20 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                          <span className="w-2 h-2 rounded-full bg-theme-purple"></span>
                        </span>
                        <span>
                          I'm constantly learning new technologies and
                          techniques
                        </span>
                      </li>
                    )}
                    {activeTyping >= 1 && (
                      <li
                        className="flex items-start animate-fade-in"
                        style={{ animationDelay: "700ms" }}
                      >
                        <span className="w-5 h-5 rounded-full bg-theme-purple/20 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                          <span className="w-2 h-2 rounded-full bg-theme-purple"></span>
                        </span>
                        <span>
                          I believe in the power of collaboration and open
                          communication
                        </span>
                      </li>
                    )}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="section-container">
            <ScrollReveal>
              <h2 className="section-title gradient-text">
                Skills & Technologies
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              <SkillIcon name="HTML" icon={FileCode} delay={100} />
              <SkillIcon name="CSS" icon={Layout} delay={200} />
              <SkillIcon name="JavaScript(ES6)" icon={Code} delay={300} />
              <SkillIcon name="React.js" icon={Puzzle} delay={400} />
              <SkillIcon name="Redux.js" icon={Server} delay={500} />
              <SkillIcon name="WordPress" icon={SiWordpress} delay={600} />
              <SkillIcon name="jQuery" icon={SiJquery} delay={700} />
              <SkillIcon name="AJAX" icon={FiServer} delay={800} />
              <SkillIcon name="Bootstrap" icon={Brush} delay={900} />
              <SkillIcon name="Tailwind CSS" icon={Brush} delay={1000} />
              <SkillIcon name="TypeScript" icon={Code} delay={1100} />
              <SkillIcon name="Material UI" icon={Palette} delay={1200} />
              <SkillIcon name="Git & GitHub" icon={GitFork} delay={1300} />
              <SkillIcon name="Framer Motion" icon={Move} delay={1400} />
              <SkillIcon name="Formik" icon={SiFormik} delay={1500} />
              <SkillIcon name="Yup" icon={SiPyup} delay={1600} />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 relative">
          <div className="section-container">
            <ScrollReveal>
              <h2 className="section-title gradient-text">
                Professional Experience
              </h2>
            </ScrollReveal>

            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div
                className="bg-blob bg-theme-blue/10 w-64 h-64 rounded-full absolute -left-20 top-40 animate-float"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="bg-blob bg-theme-purple/10 w-96 h-96 rounded-full absolute -right-40 bottom-10 animate-float"
                style={{ animationDelay: "1.2s" }}
              ></div>
            </div>

            <div className="grid gap-8 max-w-4xl mx-auto">
              <ExperienceItem
                company="Codewing Technology"
                position="React Developer"
                duration="4 Months"
                description={[
                  "Developed responsive UI components for live client projects",
                  "Implemented mobile-friendly designs ensuring cross-device compatibility",
                  "Collaborated with design and backend teams to deliver complete web solutions",
                  "Gained hands-on experience with modern React development workflows",
                ]}
                delay={200}
              />

              <ScrollReveal delay={400} animation="fade-in">
                <div className="flex items-center justify-center gap-4 p-4 mt-4">
                  <div className="w-12 h-12 rounded-full bg-theme-blue/20 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-theme-blue" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-center italic">
                    Actively seeking new opportunities to grow as a React
                    developer
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="section-container">
            <ScrollReveal>
              <h2 className="section-title gradient-text">Featured Projects</h2>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="ScreenGalaxy"
                description="A React application for searching movies using a dynamic API integration with Redux for state management."
                image="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80"
                techStack={["React", "Redux", "API", "CSS"]}
                liveLink="#"
                githubLink="https://github.com/pareshbavaliya21/ScreenGalaxy"
                delay={100}
              />

              <ProjectCard
                title="Myntra Clone"
                description="An e-commerce website clone with product listing, filtering, and cart functionality."
                image="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                techStack={["React", "CSS", "Local Storage", "React Router"]}
                liveLink="#"
                githubLink="#"
                delay={300}
              />

              <ProjectCard
                title="Hotel Booking System"
                description="A room search and reservation interface with filtering options and booking functionality."
                image="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                techStack={["React", "Tailwind CSS", "API", "Authentication"]}
                liveLink="#"
                githubLink="#"
                delay={500}
              />
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="section-container">
            <ScrollReveal>
              <h2 className="section-title gradient-text">Education Journey</h2>
            </ScrollReveal>

            <div className="max-w-3xl mx-auto mt-10 pl-6 space-y-12">
              <TimelineItem
                year="2022 - 2025"
                title="Bachelor's in Computer Applications"
                description="Dharmsinh Desai University"
                delay={100}
              />

              <TimelineItem
                year="2021 - 2022"
                title="Science Stream"
                description="Sankalp Vidhyalaya"
                isLast={true}
                delay={400}
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="section-container">
            <ScrollReveal>
              <h2 className="section-title gradient-text">Let's Connect</h2>
            </ScrollReveal>

            <ContactForm />
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-100 dark:bg-gray-800 py-8">
          <div className="section-container">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <ScrollReveal>
                  <h3 className="text-xl font-bold gradient-text">
                    Paresh Bavaliya
                  </h3>
                </ScrollReveal>
                <ScrollReveal delay={200}>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    React Developer | Frontend Enthusiast
                  </p>
                </ScrollReveal>
              </div>

              <ScrollReveal delay={400}>
                <div className="flex space-x-6">
                  <a
                    href="https://github.com/pareshbavaliya21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-theme-purple transition-colors"
                    aria-label="GitHub"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/paresh-bavaliya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-theme-purple transition-colors"
                    aria-label="LinkedIn"
                  >
                    LinkedIn
                  </a>
                  {/* <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-theme-purple transition-colors"
                    aria-label="Twitter"
                  >
                    Twitter
                  </a> */}
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={600}>
              <div className="text-center text-sm text-gray-500 mt-8">
                © {new Date().getFullYear()} Paresh Bavaliya. All rights
                reserved.
              </div>
            </ScrollReveal>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
