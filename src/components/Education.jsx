import { motion } from "framer-motion";
import { education } from "../data/data";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">Education</h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-lime-500 to-cyan-500 mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {education.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-5 card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-lime-500/15 border border-lime-500/30 flex items-center justify-center text-lime-400">
                  <FaGraduationCap />
                </div>
                <span className="font-code text-xs text-gray-500">{item.period}</span>
              </div>
              <h3 className="font-semibold text-white mb-1">{item.degree}</h3>
              <p className="text-lime-400 text-sm mb-3">{item.school}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
