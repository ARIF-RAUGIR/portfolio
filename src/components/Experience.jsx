import { motion } from "framer-motion";
import { experience } from "../data/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">Experience</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-lime-500 to-cyan-500 mx-auto mt-4" />
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-lime-500/50 via-cyan-500/30 to-transparent" />

          {experience.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative pl-16 pb-10"
            >
              {/* Dot */}
              <div className="absolute left-4 top-1 w-4 h-4 rounded-full bg-lime-500 border-2 border-lime-900 shadow-lg shadow-lime-500/50" />

              <div className="glass rounded-xl p-5 hover:border-lime-500/30 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-semibold text-white">{item.role}</h3>
                    <p className="text-lime-400 text-sm">{item.company}</p>
                  </div>
                  <span className="font-code text-xs text-gray-500 bg-white/5 px-2 py-1 rounded-md">
                    {item.period}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
