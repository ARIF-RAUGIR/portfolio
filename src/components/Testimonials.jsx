import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarwar Protik",
    title: "Software Developer & AI Enthusiast",
    linkedin: "https://www.linkedin.com/in/sarwar-protik-663271329/",
    avatar: "SP",
    color: "#a3e635",
    text: "Arif has an exceptional eye for debugging. No matter how deep the bug is buried, he finds it. His systematic approach to tracing errors — whether in Django views or assembly code — is something I genuinely admire. A true problem-solver.",
  },
  {
    name: "Mahmudul Hasan",
    title: "CS Student & Developer",
    linkedin: "https://www.linkedin.com/in/mahmudul-hasan-770969396/",
    avatar: "MH",
    color: "#06b6d4",
    text: "What sets Arif apart is how fast he picks things up. He started working with Django REST Framework and within days he was building clean, well-structured APIs. His speed of learning is something I haven't seen in many people our age.",
  },
  {
    name: "Sakib",
    title: "Software Engineer",
    linkedin: "https://www.linkedin.com/in/sakib-71b491367/",
    avatar: "SK",
    color: "#10b981",
    text: "Arif's API knowledge is seriously solid. He understands not just how to build endpoints, but why — authentication flows, response structures, error handling. Working with him on backend projects always feels smooth and well-planned.",
  },
  {
    name: "Md. Fardin Hossain",
    title: "Tech Enthusiast",
    linkedin: "https://www.linkedin.com/in/fardinhosn/",
    avatar: "FH",
    color: "#f59e0b",
    text: "Arif's security mindset is what makes him unique among developers. He doesn't just build features — he thinks about how they could be exploited. His knowledge of pentesting tools and vulnerability assessment is genuinely impressive.",
  },
  {
    name: "Tanvir Hasan",
    title: "Developer & Collaborator",
    linkedin: null,
    avatar: "TH",
    color: "#f43f5e",
    text: "I've worked with Arif closely and his backend instincts are sharp. He structures Django projects cleanly, writes readable code, and always thinks about scalability. He's the kind of teammate who makes the whole team better.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };
  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  };
  

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">Testimonials</h2>
          <p className="text-gray-500 text-sm mt-3">Feedback from teammates and collaborators I've worked with.</p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-lime-500 to-cyan-500 mx-auto mt-4" />
        </motion.div>

        <div className="mt-12 relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="glass rounded-xl p-5 card-hover"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "16px",
                padding: "40px 48px",
                position: "relative",
              }}
            >
              {/* Opening quote */}
              <div style={{
                fontSize: "64px", lineHeight: 1,
                color: t.color + "40",
                fontFamily: "Georgia, serif",
                marginBottom: "16px",
                marginTop: "-8px",
              }}>
                "
              </div>

              {/* Quote text */}
              <p style={{
                fontSize: "1.15rem",
                color: "#e2e8f0",
                lineHeight: 1.85,
                fontWeight: 400,
                marginBottom: "32px",
              }}>
                {t.text}
              </p>

              {/* Closing quote */}
              <div style={{
                fontSize: "64px", lineHeight: 0,
                color: t.color + "40",
                fontFamily: "Georgia, serif",
                textAlign: "right",
                marginBottom: "32px",
              }}>
                "
              </div>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                  <div style={{
                    width: "52px", height: "52px",
                    borderRadius: "50%",
                    background: t.color + "25",
                    border: `2px solid ${t.color}60`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "15px", fontWeight: "700", color: t.color,
                    flexShrink: 0,
                  }}>
                    {t.avatar}
                  </div>
                  <div>
                    <p style={{ color: "#fff", fontWeight: "600", fontSize: "15px" }}>{t.name}</p>
                    <p style={{ color: "#6b7280", fontSize: "13px", marginTop: "2px" }}>{t.title}</p>
                  </div>
                </div>
                {t.linkedin && (
                  <a
                    href={t.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "#6b7280", fontSize: "20px", transition: "color 0.2s" }}
                    onMouseEnter={e => e.target.style.color = "#a3e635"}
                    onMouseLeave={e => e.target.style.color = "#6b7280"}
                  >
                    <FaLinkedin />
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginTop: "32px" }}>
            <button
              onClick={prev}
              style={{
                width: "44px", height: "44px", borderRadius: "50%",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#9ca3af", fontSize: "14px",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#a3e635"; e.currentTarget.style.color = "#a3e635"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "#9ca3af"; }}
            >
              <FaChevronLeft />
            </button>

            {/* Dots */}
            <div style={{ display: "flex", gap: "8px" }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  style={{
                    width: i === current ? "24px" : "8px",
                    height: "8px",
                    borderRadius: "999px",
                    background: i === current ? "#a3e635" : "rgba(255,255,255,0.15)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s",
                    padding: 0,
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              style={{
                width: "44px", height: "44px", borderRadius: "50%",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#9ca3af", fontSize: "14px",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#a3e635"; e.currentTarget.style.color = "#a3e635"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "#9ca3af"; }}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}