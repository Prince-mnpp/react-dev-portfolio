import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* left column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Building The Future,
              <span className="text-white font-serif italic font-normal"> one component at a time..</span>
            </h2>

            <div>
              <p>
                I'm a passionate developer and B.Tech student who enjoys building web
                applications and solving programming problems. My journey started with C++
                and Data Structures & Algorithms, which helped me develop strong logical and
                problem-solving skills.
              </p>

              <p>
                Currently, I'm focused on full-stack web development using the MERN stack,
                building projects with React, Node.js, Express, and MongoDB. I enjoy turning
                ideas into real applications while continuously improving my skills in both
                frontend and backend development.
              </p>

              <p>
                Apart from development, I actively practice coding challenges, explore new
                technologies, and work on personal projects to grow as a software engineer.
                I'm always eager to learn, improve, and take on new challenges in tech.
              </p>
            </div>

            <div className="glass rounded-2xl glow-border p-6 animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My goal is to build modern, scalable, and user-friendly web applications while continuously improving my skills as a developer and problem solver."
              </p>
            </div>
          </div>
          {/* right section */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl animate-fade-in"
              style={{animationDelay: `${(idx+1)*100}ms`}}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary"/>
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}