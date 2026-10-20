import { FaGithub, FaFacebook, FaLinkedin, FaInstagram} from "react-icons/fa";
import { navLinks } from "../data/data";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(255,255,255,0.07)",
      background: "#0a0a0e",
      padding: "60px 24px 32px",
      textAlign: "center",
    }}>
      {/* Logo */}
      <a href="#hero" style={{
        fontFamily: "monospace",
        fontSize: "1.5rem",
        fontWeight: "700",
        color: "#a3e635",
        letterSpacing: "-0.02em",
        display: "block",
        marginBottom: "14px",
        textDecoration: "none",
      }}>
        &lt;arif.raugir /&gt;
      </a>

      {/* Tagline */}
      <p style={{
        color: "#6b7280",
        fontSize: "0.9rem",
        lineHeight: 1.75,
        maxWidth: "420px",
        margin: "0 auto 32px",
      }}>
        Full Stack Web Developer passionate about building robust, scalable, and high-performance digital products.
      </p>

      {/* Nav links */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "4px",
        marginBottom: "28px",
      }}>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            style={{
              padding: "4px 12px",
              fontSize: "0.8rem",
              color: "#9ca3af",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.color = "#a3e635"}
            onMouseLeave={e => e.currentTarget.style.color = "#9ca3af"}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Divider */}
      <div style={{
        width: "100%",
        maxWidth: "400px",
        height: "1px",
        background: "rgba(255,255,255,0.06)",
        margin: "0 auto 24px",
      }} />

      {/* Social links */}
      <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginBottom: "32px" }}>
        {[
          { icon: <FaGithub />, href: "https://github.com/arif-raugir", label: "GitHub" },
          { icon: <FaLinkedin />, href: "https://linkedin.com/in/arif-raugir-6285932b5", label: "LinkedIn" },
          { icon: <FaFacebook />, href: "https://facebook.com/arif.raugir", label: "Facebook" },
          { icon: <FaInstagram />, href: "https://instagram.com/this_is_raugir/", label: "Instagram" },
        ].map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            style={{
              width: "38px", height: "38px",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.08)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#6b7280",
              fontSize: "15px",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "rgba(163,230,53,0.4)";
              e.currentTarget.style.color = "#a3e635";
              e.currentTarget.style.background = "rgba(163,230,53,0.08)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              e.currentTarget.style.color = "#6b7280";
              e.currentTarget.style.background = "transparent";
            }}
          >
            {s.icon}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p style={{ fontSize: "0.75rem", color: "#4b5563" }}>
        © 2026 Arif Raugir · All rights reserved.
      </p>
    </footer>
  );
}