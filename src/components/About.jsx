import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaUniversity, FaCode, FaShieldAlt } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-lime-500 to-cyan-500 mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT — Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-lime-500 to-cyan-500 blur-lg opacity-30 scale-105" />
              {/* Photo placeholder */}
              <div className="relative w-80 h-88 rounded-2xl overflow-hidden border border-white/10">
  <img
    src={require("../assets/hero.png")}
    alt="Arif Raugir"
    className="w-full h-full object-cover"
  />
</div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-2 border border-lime-500/30"
              >
                <p className="text-xs text-white-400">Currently</p>
                <p className="text-sm font-semibold text-lime-400"> Django Developer</p>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT — Description */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              CSE Student & <span className="text-lime-400">Django Developer</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              I'm <span className="text-white font-medium">Arif Raugir</span>, a Fourth-year Computer Science 
              student at Southeast University, Dhaka. My passion lives at the intersection of 
              <span className="text-lime-400"> backend development</span> and 
              <span className="text-lime-400"> AI Automation</span>.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              I learn by breaking things — working through penetration testing labs on TryHackMe, 
              and building real Django apps from the ground up. 
              I also research machine learning algorithms and have presented RL work at a university.
            </p>

            {/* Info cards */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: <FaMapMarkerAlt />, label: "Location", value: "Dhaka, Bangladesh" },
                { icon: <FaUniversity />, label: "University", value: "Southeast University" },
                { icon: <FaShieldAlt />, label: "Focus", value: "Django & AI Automation" },
                { icon: <FaCode />, label: "Languages", value: "Python · C · Java" },
              ].map((item) => (
                <div key={item.label} className="glass rounded-lg p-3 flex items-center gap-3">
                  <span className="text-lime-400 text-sm">{item.icon}</span>
                  <div>
                    <p className="text-xs text-gray-600">{item.label}</p>
                    <p className="text-sm text-gray-200 font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
