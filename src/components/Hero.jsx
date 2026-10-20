import { motion } from "framer-motion";
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram, FaDownload } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { TypeAnimation } from "react-type-animation";

const floatingTech = [
  { name: "Python", x: "5%", y: "15%", delay: 0 },
  { name: "Django", x: "8%", y: "65%", delay: 0.3 },
  { name: "React", x: "82%", y: "12%", delay: 0.5 },
  { name: "Kali Linux", x: "78%", y: "60%", delay: 0.2 },
  { name: "Burp Suite", x: "88%", y: "35%", delay: 0.7 },
  { name: "Metasploit", x: "2%", y: "40%", delay: 0.4 },
  { name: "SQLite", x: "75%", y: "80%", delay: 0.6 },
  { name: "Git", x: "15%", y: "82%", delay: 0.1 },
  { name: "TailwindCSS", x: "60%", y: "5%", delay: 0.8 },
  { name: "Nmap", x: "30%", y: "88%", delay: 0.35 },
];

const codeLines = [
  { text: "class Arif Raugir:", indent: 0, color: "#a3e635" },
  { text: '  role = "AI/ML Researcher"', indent: 1, color: "#06b6d4" },
  { text: '  university = "Southeast University"', indent: 1, color: "#06b6d4" },
  { text: "  skills = [", indent: 1, color: "#e2e2e8" },
  { text: '    "Penetration Testing",', indent: 2, color: "#10b981" },
  { text: '    "Django Backend",', indent: 2, color: "#10b981" },
  { text: '    "Machine Learning",', indent: 2, color: "#10b981" },
  { text: "  ]", indent: 1, color: "#e2e2e8" },
  { text: "  status = available ✓", indent: 1, color: "#f59e0b" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-lime-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />

      {/* Floating tech labels */}
      {floatingTech.map((t) => (
        <motion.div
          key={t.name}
          className="absolute font-code text-xs text-lime-400/50 border border-lime-500/20 px-2 py-1 rounded-md bg-lime-500/5 hidden lg:block"
          style={{ left: t.x, top: t.y }}
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: [0.4, 0.7, 0.4],
            y: [0, -8, 0],
          }}
          transition={{
            delay: t.delay,
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {t.name}
        </motion.div>
      ))}

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center pt-16 w-full">
        {/* LEFT — description */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium text-green-400 bg-green-400/10 border border-green-400/20 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Open to opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4"
          >
            Hi, I'm{" "}
            <span className="text-lime-400">ARIF RAUGIR</span>
            <br />
            
            <TypeAnimation
  sequence={[
    "Software Engineer", 2000,
    "Django Developer", 2000,
    "Python Developer", 2000,
    "ML Researcher", 2000,
  ]}
  wrapper="span"
  speed={50}
  repeat={Infinity}
  className="text-gray-400 text-3xl sm:text-4xl font-medium"
/>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-base leading-relaxed mb-8 max-w-md"
          >
            CSE undergraduate at <span className="text-white font-medium">Southeast University, Dhaka</span>.
            I break systems to understand them — penetration testing, secure Django backends,
            and machine learning research.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            <a
              href="#projects"
              className="flex items-center gap-2 px-5 py-2.5 bg-lime-600 hover:bg-lime-500 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-lime-500/25"
            >
              View Projects <HiArrowRight />
            </a>
            <a
              href="/Arif_Raugir_Resume.pdf"
              className="flex items-center gap-2 px-5 py-2.5 border border-white/15 hover:border-white/30 text-gray-300 hover:text-white font-medium rounded-lg transition-all duration-200"
            >
              <FaDownload className="text-sm" /> Resume
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-4"
          >
            <div className="h-px w-8 bg-white/10" />
            {[
              { icon: <FaLinkedin />, href: "https://linkedin.com/in/arif-raugir-6285932b5", label: "LinkedIn" },
              { icon: <FaGithub />, href: "https://github.com/arif-raugir", label: "GitHub" },
              { icon: <FaFacebook />, href: "https://facebook.com/arif.raugir", label: "Facebook" },
              { icon: <FaInstagram />, href: "https://instagram.com/this_is_raugir/", label: "Instagram" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-lime-500 hover:bg-lime-500/10 transition-all duration-200 text-base"
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — animated code block */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="glass rounded-xl overflow-hidden shadow-2xl">
            {/* Window bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/2">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-3 font-code text-xs text-gray-600">portfolio.py</span>
            </div>
            {/* Code */}
            <div className="p-5 font-code text-sm space-y-1">
              {codeLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex"
                >
                  <span className="text-gray-700 w-6 text-right mr-4 select-none text-xs leading-6">{i + 1}</span>
                  <span style={{ color: line.color }}>{line.text}</span>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ delay: 1.5, duration: 1, repeat: Infinity }}
                className="inline-block w-2 h-5 bg-lime-400 ml-32 mt-1"
              />
            </div>
          </div>

          {/* Stats below code block */}
          <div className="grid grid-cols-3 gap-3 mt-4">
            {[
              { val: "4th", label: "Year CSE" },
              { val: "10+", label: "Projects" },
              { val: "1+", label: "AI/Ml Research" },
            ].map((s) => (
              <div key={s.label} className="glass rounded-lg p-3 text-center">
                <div className="text-xl font-bold gradient-text">{s.val}</div>
                <div className="text-xs text-gray-500 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
