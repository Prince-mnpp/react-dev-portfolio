import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { AnimateBorderButton } from "../components/AnimateBorderButton";

const projects = [
  {
    title: "AI Resume Builder",
    description:
      "An AI-powered resume builder that helps users create professional resumes with customizable templates and smart content generation.",
    image: "/projects/Screenshot (103).png",
    tags: ["React", "TailwindCSS", "Lucide react", "react-router-dom", "supabse"],
    link: "https://ai-resume-builder-phi-rose.vercel.app/",
    github: "https://github.com/Prince-mnpp/AI-Resume-Builder",
  },
  {
    title: "Disaster Shield",
    description:
      "A disaster management and emergency response platform designed to provide alerts, safety resources, and real-time updates during emergencies.",
    image: "/projects/Screenshot (102).png",
    tags: ["React", "supabase", "react-router-dom", "Tailwind"],
    link: "https://disaster-shield-theta.vercel.app/",
    github: "https://github.com/Prince-mnpp/DisasterShield-",
  },
  {
    title: "React TaskFlow App",
    description:
      "A modern task management application built with React featuring task organization, status tracking, and responsive UI design.",
    image: "/projects/Screenshot (104).png",
    tags: ["React", "JavaScript", "TailwindCSS", "Vite"],
    link: "https://react-task-flow-app-red.vercel.app/",
    github: "https://github.com/Prince-mnpp/react-TaskFlow-App",
  },
];
export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* section header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact..
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200 ">
            A selection of my recent work, from complex web applications to innovative tools that solve real-world problems.
          </p>
        </div>

        {/* projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group glass rounded-2xl oveflow-hidden animate-fade-in md:row-span-1" style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
              {/* img */}
              <div className="relative overflow-hidden aspect-video">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* overlay links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <a href={project.link}>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all" />
                  </a>
                  
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div>
                  {project.tags.map((tag, tagIdx) => (
                    <span className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* view all cta */}
        <div className="text-center mt-12 animate-fade-in animaton-delay-500" onClick={() => document
            .getElementById("projects")
            .scrollIntoView({ behavior: "smooth" })}>
          <AnimateBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimateBorderButton>
        </div>
      </div>
    </section>
  );
};