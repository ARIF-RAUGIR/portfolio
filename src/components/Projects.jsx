import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import drfinder from "../assets/dr_finder.png";
import jerseynation from "../assets/jerseynation.png";
import portfolio from "../assets/portfolio1.png";

const projects = [
  {
    id: "01",
    title: "Dr.Finder",
    badge: "Web Dev",
    desc: "A full-stack Django healthcare web app for finding doctors by location and speciality, with role-based authentication for patients, doctors, and admins. Features appointment booking, hospital listing, and emergency contact.",
    image: drfinder,
    frontend: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    backend: ["Django", "Python", "SQLite", "Auth"],
    github: "https://github.com/arif-raugir",
    demo: "#",
    color: "#06b6d4",
  },
  {
    id: "02",
    title: "JerseyNation BD",
    badge: "E-Commerce",
    desc: "Premium football jersey e-commerce platform with product listings, cart management, order tracking, and a full admin dashboard. Built for football fans across Bangladesh with a sleek modern UI.",
    image: jerseynation,
    frontend: ["HTML", "CSS", "JavaScript"],
    backend: ["Django", "Python", "SQLite", "Cart System"],
    github: "https://github.com/arif-raugir",
    demo: "#",
    color: "#f43f5e",
  },
  {
    id: "03",
    title: "Portfolio Website",
    badge: "Frontend",
    desc: "Personal developer portfolio built with React, Tailwind CSS, and Framer Motion. Features animated hero section, skills showcase, project slider, and testimonials — fully responsive and deployed.",
    image: portfolio,
    frontend: ["React", "Tailwind CSS", "Framer Motion"],
    backend: ["React Icons", "GitHub Pages"],
    github: "https://github.com/arif-raugir",
    demo: "#",
    color: "#a3e635",
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + projects.length) % projects.length);
  };
  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % projects.length);
  };

  const p = projects[current];

  return (
    <section id="projects" className="py-24" style={{ background: "rgba(255,255,255,0.02)" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px w-10 bg-green-500" />
            <p className="text-green-400 font-code text-xs tracking-widest uppercase">Projects</p>
            <div className="h-px w-10 bg-green-500" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span style={{ color: "#a3e635" }}>Projects</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-sm leading-relaxed">
            A selection of full-stack applications I've designed and built — from idea to production.
          </p>
        </motion.div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mb-8">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              style={{
                width: i === current ? "28px" : "8px",
                height: "8px",
                borderRadius: "999px",
                background: i === current ? p.color : "rgba(255,255,255,0.15)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s",
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Slider */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0, x: direction * 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -80 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              overflow: "hidden",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            {/* Left — Screenshot */}
            <div style={{ position: "relative", overflow: "hidden", minHeight: "420px" }}>
              <img
                src={p.image}
                alt={p.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
              {/* Overlay */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to right, transparent 60%, rgba(18,18,26,0.8))",
              }} />
              {/* Project number badge */}
              <div style={{
                position: "absolute", top: "16px", left: "16px",
                background: p.color + "20",
                border: `1px solid ${p.color}50`,
                borderRadius: "8px",
                padding: "4px 12px",
                color: p.color,
                fontFamily: "monospace",
                fontSize: "13px",
                fontWeight: "700",
              }}>
                {p.id}
              </div>
              {/* Counter */}
              <div style={{
                position: "absolute", top: "16px", right: "16px",
                background: "rgba(0,0,0,0.5)",
                borderRadius: "8px",
                padding: "4px 10px",
                color: "#9ca3af",
                fontFamily: "monospace",
                fontSize: "12px",
              }}>
                {String(current + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </div>
            </div>

            {/* Right — Details */}
            <div style={{ padding: "40px 36px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <span style={{
                display: "inline-block",
                fontSize: "11px", fontWeight: "600",
                padding: "3px 10px", borderRadius: "4px",
                color: p.color,
                background: p.color + "15",
                border: `1px solid ${p.color}40`,
                marginBottom: "12px",
                width: "fit-content",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontFamily: "monospace",
              }}>
                PROJECT {p.id}
              </span>

              <h3 style={{ fontSize: "2rem", fontWeight: "800", color: "#fff", marginBottom: "12px", letterSpacing: "-0.02em" }}>
                {p.title}
              </h3>

              <p style={{ color: "#9ca3af", fontSize: "0.9rem", lineHeight: 1.8, marginBottom: "24px" }}>
                {p.desc}
              </p>

              {/* Tech tags */}
              <div style={{ marginBottom: "8px" }}>
                <p style={{ fontSize: "10px", fontWeight: "700", color: p.color, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px", fontFamily: "monospace" }}>
                  Frontend
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "14px" }}>
                  {p.frontend.map((t) => (
                    <span key={t} style={{
                      fontSize: "12px", padding: "3px 10px",
                      borderRadius: "6px",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#d1d5db",
                    }}>{t}</span>
                  ))}
                </div>
                <p style={{ fontSize: "10px", fontWeight: "700", color: p.color, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px", fontFamily: "monospace" }}>
                  Backend
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {p.backend.map((t) => (
                    <span key={t} style={{
                      fontSize: "12px", padding: "3px 10px",
                      borderRadius: "6px",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#d1d5db",
                    }}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div style={{ display: "flex", gap: "10px", marginTop: "28px" }}>
                <a href={p.demo} target="_blank" rel="noreferrer" style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  padding: "10px 20px",
                  background: p.color,
                  color: "#000",
                  borderRadius: "8px",
                  fontSize: "13px", fontWeight: "700",
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
                  onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                  onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a href={p.github} target="_blank" rel="noreferrer" style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  padding: "10px 20px",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#d1d5db",
                  borderRadius: "8px",
                  fontSize: "13px", fontWeight: "600",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.color = "#fff"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "#d1d5db"; }}
                >
                  <FaGithub /> Source
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Prev / Next arrows */}
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "24px" }}>
          <button onClick={prev} style={{
            width: "44px", height: "44px", borderRadius: "50%",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#9ca3af", fontSize: "14px",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", transition: "all 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = p.color; e.currentTarget.style.color = p.color; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "#9ca3af"; }}
          >
            <FaChevronLeft />
          </button>
          <button onClick={next} style={{
            width: "44px", height: "44px", borderRadius: "50%",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#9ca3af", fontSize: "14px",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", transition: "all 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = p.color; e.currentTarget.style.color = p.color; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "#9ca3af"; }}
          >
            <FaChevronRight />
          </button>
        </div>

      </div>
    </section>
  );
}