import React, { useState } from "react";

const skillGroups = {
  Frontend: {
    icon: "</>",
    description: "Modern reactive frameworks, type-safe state management, and responsive design systems.",
    skills: [
      { name: "React", level: "Mastery", percent: 95, icon: "⚛️" },
      { name: "JavaScript", level: "Mastery", percent: 95, icon: "JS" },
      { name: "Tailwind CSS", level: "Mastery", percent: 90, icon: "🌊" },
      { name: "Material UI", level: "Advanced", percent: 85, icon: "MU" },
      { name: "HTML", level: "Mastery", percent: 95, icon: "5" },
      { name: "CSS", level: "Mastery", percent: 90, icon: "3" },
      { name: "Next.js", level: "Advanced", percent: 85, icon: "N" },
    ],
  },
  Backend: {
    icon: "▤",
    description: "Scalable server-side applications, APIs, authentication, and business logic.",
    skills: [
      { name: "Node.js", level: "Advanced", percent: 85, icon: "⬡" },
      { name: "Python", level: "Advanced", percent: 80, icon: "🐍" },
      { name: "Django", level: "Advanced", percent: 85, icon: "🎯" },
      { name: "REST APIs", level: "Mastery", percent: 90, icon: "↔" },
    ],
  },
  Database: {
    icon: "▤",
    description: "Reliable data modeling, querying, and storage for modern applications.",
    skills: [
      { name: "SQLite", level: "Mastery", percent: 90, icon: "📦" },
      { name: "PostgreSQL", level: "Advanced", percent: 80, icon: "🐘" },
      { name: "MySQL", level: "Mastery", percent: 90, icon: "🐬" },
      { name: "MongoDB", level: "Advanced", percent: 85, icon: "🍃" },

    ],
  },
  "Tools & DevOps": {
    icon: "⚒",
    description: "Development workflows, collaboration tools, deployment, and delivery pipelines.",
    skills: [
      { name: "Git", level: "Mastery", percent: 90, icon: "⑂" },
      { name: "GitHub", level: "Mastery", percent: 90, icon: "◉" },
      { name: "Docker", level: "Intermediate", percent: 70, icon: "🐳" },
      { name: "Linux", level: "Advanced", percent: 80, icon: "⌘" },
      { name: "Bash", level: "Intermediate", percent: 80, icon: "🐚" },
      { name: "Burp Suite", level: "Intermediate", percent: 80, icon: "🔍" },
      { name: "Metasploit", level: "Intermediate", percent: 80, icon: "💣" },
      { name: "Nmap", level: "Intermediate", percent: 80, icon: "📡" },
      { name: "Wireshark", level: "Intermediate", percent: 80, icon: "🦈" },
    ],
  },
};
export default function Skills() {
  const [activeGroup, setActiveGroup] = useState("Frontend");
  const current = skillGroups[activeGroup];
  function changeGroup(group) {
    setActiveGroup(group);
  }


  return (
    <main className="skills-page">
      <style>{`
        * { box-sizing: border-box; }
        .skills-page { min-height: 100vh; padding: 0 3.4%; color: #f2f4f7; background:rgba(255,255,255,0.02); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
        .top-nav { min-height: 52px; display:flex; justify-content:center; align-items:center; gap: clamp(15px, 3vw, 38px); border-bottom:1px solid #1b222b; overflow-x:auto; white-space:nowrap; }
        .nav-link { color:#8c929d; text-decoration:none; font-size:11px; letter-spacing:.08em; padding:18px 0 13px; border-bottom:2px solid transparent; }
        .nav-link.active { color:#91e900; border-color:#91e900; }
        .section-heading { text-align:center; padding:28px 0 0; }
        .eyebrow { color:#8be600; font-weight:800; font-size:13px; letter-spacing:.22em; display:flex; justify-content:center; align-items:center; gap:12px; }
        .eyebrow:before,.eyebrow:after { content:""; width:28px; height:2px; background:#8be600; }
        .section-heading h1 { font-size:clamp(32px, 4vw, 48px); line-height:1.1; margin:14px 0 8px; letter-spacing:-.04em; font-weight:850; }
        .section-heading h1 span { color:#8be600; }
        .section-heading p { color:#9ba2ad; max-width:650px; margin:0 auto; font-size:16px; line-height:1.55; }
        .group-tabs { display:flex; justify-content:center; gap:12px; flex-wrap:wrap; margin:62px auto 32px; }
        .group-tab { display:flex; align-items:center; gap:10px; padding:13px 20px; color:#9299a5; background:#080d13; border:1px solid #1b2530; border-radius:17px; font-size:13px; font-weight:700; cursor:pointer; transition:.2s ease; }
        .group-tab:hover { border-color:#5e9e09; color:#e9f7d9; }
        .group-tab.selected { color:#f5f8f2; border-color:#8be600; background:linear-gradient(120deg, rgba(139,230,0,.08), rgba(8,13,19,.96)); box-shadow:0 0 22px rgba(139,230,0,.09); }
        .tab-icon { font-size:17px; }
        .count { display:inline-grid; place-items:center; min-width:21px; height:21px; padding:0 5px; border-radius:20px; background:#19220d; color:#8be600; font-size:10px; }
        .selected .count { background:#8be600; color:#182300; }
        .skills-panel { max-width:1250px; margin:0 auto; padding:32px; border:1px solid #31520d; border-radius:25px; background:radial-gradient(ellipse at 100% 0%, rgba(71,113,16,.15), transparent 34%), #080d12; box-shadow:inset 0 1px rgba(255,255,255,.015); }
        .panel-head { display:flex; align-items:center; gap:14px; }
        .group-symbol { flex:0 0 44px; width:44px; height:44px; display:grid; place-items:center; color:#8be600; font-size:20px; border:1px solid #31520d; border-radius:15px; background:#0d1708; box-shadow:0 0 18px rgba(139,230,0,.13); }
        .panel-title { margin:0; font-size:21px; font-weight:800; letter-spacing:-.03em; }
        .skill-count { display:inline-block; vertical-align:middle; margin-left:5px; padding:3px 8px; color:#8be600; background:#14200a; border:1px solid #345a0a; border-radius:20px; font-size:10px; letter-spacing:.02em; }
        .panel-description { margin:4px 0 0; color:#9ba2ad; font-size:13px; }
        .panel-controls { margin-left:auto; display:flex; align-items:center; gap:10px; }
        .page-count { color:#aeb4bd; border:1px solid #1c2730; border-radius:30px; padding:9px 12px; font-size:11px; font-weight:700; white-space:nowrap; }
        .arrow { width:37px; height:37px; border:1px solid #29332d; color:#d7ded2; border-radius:50%; background:transparent; font-size:23px; line-height:1; cursor:pointer; }
        .arrow:hover { color:#8be600; border-color:#8be600; }
        .panel-divider { height:1px; background:#1a2228; margin:22px 0 33px; }
        .skill-marquee { overflow:hidden; width:100%; position:relative; }
        .skill-track { display:flex; width:max-content; gap:14px; animation:skills-scroll 32s linear infinite; }
        .skill-marquee:hover .skill-track { animation-play-state:paused; }
        .skill-track .skill-card { flex:0 0 194px; width:194px; }
        @keyframes skills-scroll { from { transform:translateX(0); } to { transform:translateX(-50%); } }
        .skill-card { min-width:0; min-height:168px; padding:16px 19px; border:1px solid #1b2530; border-radius:17px; background:linear-gradient(145deg,#090f16,#080c12); }
        .skill-card-top { display:flex; align-items:center; justify-content:space-between; gap:8px; margin-bottom:21px; }
        .skill-icon { display:grid; place-items:center; width:47px; height:47px; border:1px solid #1d2c21; border-radius:50%; background:radial-gradient(circle,#142319,#080e12 70%); box-shadow:0 0 15px rgba(139,230,0,.13); color:#45c9f5; font-weight:900; font-size:18px; }
        .skill-icon.html { color:#ff5a20; }.skill-icon.css { color:#39a8ff; }.skill-icon.js { color:#f3d33c; }.skill-icon.ts { color:#4c9bff; }.skill-icon.react { color:#61dafb; }
        .percent { padding:4px 8px; color:#8be600; background:#111d0a; border:1px solid #355b0a; border-radius:20px; font-size:10px; font-weight:800; }
        .skill-name { margin:0 0 5px; font-size:14px; font-weight:800; letter-spacing:-.02em; }
        .skill-level { color:#8c94a0; font-size:11px; }
        .progress { height:6px; margin-top:25px; border-radius:10px; background:#172019; overflow:hidden; }
        .progress-fill { height:100%; border-radius:10px; background:#83df00; box-shadow:0 0 10px rgba(131,223,0,.22); }
        .panel-footer { display:flex; align-items:center; justify-content:space-between; gap:12px; margin-top:40px; color:#9aa2ac; font-size:12px; font-weight:650; }
        .footer-link { border:0; background:none; color:inherit; cursor:pointer; padding:5px 0; font:inherit; }
        .footer-link:hover { color:#8be600; }
        .dots { display:flex; gap:7px; align-items:center; }
        .dot { width:8px; height:8px; border-radius:20px; border:0; padding:0; background:#222b33; cursor:pointer; }
        .dot.active { width:24px; background:#8be600; }
        @media(max-width:900px) { .skill-track .skill-card { flex-basis:180px; width:180px; } .skills-panel { padding:23px; } .group-tabs { margin-top:40px; } }
        @media(max-width:600px) { .skills-page { padding:0 15px 25px; } .top-nav { justify-content:flex-start; } .section-heading p { font-size:14px; } .group-tabs { gap:8px; margin:35px auto 22px; } .group-tab { padding:10px 12px; font-size:12px; } .skills-panel { padding:18px 14px; border-radius:20px; } .panel-head { flex-wrap:wrap; } .panel-title { font-size:18px; } .panel-description { line-height:1.5; } .panel-controls { margin-left:auto; } .skill-track { gap:10px; } .skill-track .skill-card { flex-basis:165px; width:165px; padding:13px; min-height:160px; } .skill-card-top { margin-bottom:17px; } .panel-footer { margin-top:28px; flex-wrap:wrap; } .dots { order:3; width:100%; justify-content:center; } }
      `}</style>

     
      <header className="section-heading" id="skills">
        <div className="eyebrow">SKILLS &amp; ARSENAL</div>
        <h1>Technical <span>Expertise</span></h1>
        <p>A categorized, interactive showcase of production technologies, frameworks, backend architectures, and developer tooling.</p>
      </header>

      <section className="group-tabs" aria-label="Skill categories">
        {Object.entries(skillGroups).map(([name, group]) => (
          <button
            type="button"
            key={name}
            className={`group-tab ${activeGroup === name ? "selected" : ""}`}
            onClick={() => changeGroup(name)}
            aria-pressed={activeGroup === name}
          >
            <span className="tab-icon">{group.icon}</span>
            <span>{name}</span>
            <span className="count">{group.skills.length}</span>
          </button>
        ))}
      </section>

      <section className="skills-panel" aria-live="polite">
        <div className="panel-head">
          <div className="group-symbol">{current.icon}</div>
          <div>
            <h2 className="panel-title">{activeGroup}<span className="skill-count">{current.skills.length} Skills</span></h2>
            <p className="panel-description">{current.description}</p>
          </div>

        </div>

        <div className="panel-divider" />

        <div className="skill-marquee">
          <div className="skill-track">
            {[...current.skills, ...current.skills].map((skill, index) => {
              const iconClass = skill.name === "HTML" ? "html" : skill.name === "CSS" ? "css" : skill.name === "JavaScript" ? "js" : skill.name === "TypeScript" ? "ts" : skill.name === "React" ? "react" : "";
              return (
                <article className="skill-card" key={`${skill.name}-${index}`}>
                  <div className="skill-card-top">
                    <div className={`skill-icon ${iconClass}`}>{skill.icon}</div>
                    <span className="percent">{skill.percent}%</span>
                  </div>
                  <h3 className="skill-name">{skill.name}</h3>
                  <div className="skill-level">{skill.level}</div>
                  <div className="progress" role="progressbar" aria-label={`${skill.name} proficiency`} aria-valuenow={skill.percent} aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-fill" style={{ width: `${skill.percent}%` }} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <footer className="panel-footer">
          <button className="footer-link" type="button" onClick={() => changeGroup("Tools & DevOps")}>‹ &nbsp;Previous: Tools &amp; DevOps</button>

          <button className="footer-link" type="button" onClick={() => changeGroup("Backend")}>Next: Backend &nbsp;›</button>
        </footer>
      </section>
    </main>
  );
}
