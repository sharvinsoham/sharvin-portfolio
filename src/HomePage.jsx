
import { useState } from "react";
const Button = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-2 px-4 rounded"
  >
    {children}
  </button>
);

const Card = ({ children }) => (
  <div className="bg-[#1c2331] p-4 rounded-lg shadow">{children}</div>
);

const CardContent = ({ children }) => <div>{children}</div>;
export default function HomePage() {
  const [showProjects, setShowProjects] = useState(true);

  const projects = [
    {
      title: "AI Desktop Assistant",
      description:
        "Voice + text-based AI assistant with NLP (DistilBERT), CLI/GUI toggle, PyQt interface, and system control commands.",
      link: "https://github.com/sharvinsoham/ai-desktop-assistant",
    },
    {
      title: "Quantum ML Suite",
      description:
        "Includes QSVM, QGAN, and QNN built with Qiskit. Focused on applying quantum computing to real-world ML problems.",
      link: "https://github.com/sharvinsoham/quantum-ml-suite",
    },
    {
      title: "System Resource Monitor",
      description:
        "Real-time CPU/RAM usage with ML-based anomaly detection, PyQt dashboard, and background tray app.",
      link: "https://github.com/sharvinsoham/system-monitor-ai",
    },
  ];

  return (
    <main className="bg-[#0b0f1a] text-white min-h-screen p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-cyan-400">Sharvin Soham</h1>
        <p className="text-lg mt-2 text-gray-300">
          AI Developer | Quantum Engineering Enthusiast | Future Astronaut
        </p>
      </header>

      <section className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-cyan-300 mb-4">About Me</h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          I'm a Computer Science graduate with deep interests in quantum mechanics,
          astrophysics, and AI. I build intelligent tools and simulations to support
          my academic journey toward quantum engineering and space exploration.
          I’ve cleared AFCAT thrice and aim to pursue a Ph.D. in quantum fields and
          become an astronaut.
        </p>

        <Button onClick={() => setShowProjects(!showProjects)}>
          {showProjects ? "Hide Projects" : "Show Projects"}
        </Button>

        {showProjects && (
          <div className="grid gap-4 mt-6">
            {projects.map((proj) => (
              <Card key={proj.title} className="bg-[#1c2331]">
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold text-cyan-200">{proj.title}</h3>
                  <p className="text-gray-300 mb-2">{proj.description}</p>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline"
                  >
                    View on GitHub
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>

      <footer className="text-center mt-12 text-sm text-gray-500">
        Connect: 
        <a href="mailto:sharvinsoham@hotmail.com" className="mx-2 text-cyan-400">Email</a> |
        <a href="https://www.linkedin.com/in/sharvin-soham-853755195/" className="mx-2 text-cyan-400">LinkedIn</a> |
        <a href="https://github.com/sharvinsoham" className="mx-2 text-cyan-400">GitHub</a>
      </footer>
    </main>
  );
}
