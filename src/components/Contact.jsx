import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaFacebook, FaEnvelope, FaWhatsapp, FaAddressCard } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_amjy4r5";
const TEMPLATE_ID = "template_fdk5b6p";
const PUBLIC_KEY = "3oZ_80F5ZnwZA2ik8";

export default function Contact() {
  const [form, setForm] = useState({ from_name: "", from_email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.from_name || !form.from_email || !form.message) {
      alert("Name, email and message are required.");
      return;
    }
    setStatus("sending");
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      setStatus("success");
      setForm({ from_name: "", from_email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
    
          <h2 className="text-3xl sm:text-4xl font-bold">Contact</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-lime-500 to-cyan-500 mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Let's work together</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Open to internships, security research collaboration, and backend development projects.
              I respond quickly — don't hesitate to reach out.
            </p>
            <div className="space-y-3">
              {[
                { icon: <FaEnvelope />, label: "Email", value: "arifraugir@gmail.com", href: "mailto:arifraugir@gmail.com" },
                { icon: <FaWhatsapp />, label: "WhatsApp", value: "+8801710532108", href: "https://wa.me/8801710532108" },
                { icon: <FaAddressCard />, label: "Address", value: "Tejgaon, Dhaka, Bangladesh", href: "https://maps.google.com/?q=Tejgaon,Dhaka,Bangladesh" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 glass rounded-lg px-4 py-3 hover:border-lime-500/30 transition-colors group"
                >
                  <span className="text-lime-400 group-hover:scale-110 transition-transform">{s.icon}</span>
                  <div>
                    <p className="text-xs text-gray-600">{s.label}</p>
                    <p className="text-sm text-gray-200">{s.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-xl p-6"
          >
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Name</label>
                  <input
                    type="text"
                    name="from_name"
                    value={form.from_name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-lime-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">Email</label>
                  <input
                    type="email"
                    name="from_email"
                    value={form.from_email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-lime-500 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Internship / Collaboration / Project"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-lime-500 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Message</label>
                <textarea
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-lime-500 transition-colors resize-none"
                />
              </div>

              {status === "success" && (
                <p className="text-sm text-lime-400 text-center">✅ Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-400 text-center">❌ Something went wrong. Try again.</p>
              )}

              <button
                onClick={handleSubmit}
                disabled={status === "sending"}
                className="w-full py-2.5 bg-lime-500 hover:bg-lime-400 disabled:opacity-50 text-black font-bold rounded-lg transition-colors text-sm"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}