import { motion } from "framer-motion";

const projects = [
  {
    title: "Nebula Pulse",
    desc: "Sci-fi VFX sequence with nebula transitions and particle energy FX.",
  },
  {
    title: "Urban Echo",
    desc: "Music video with glitch edits and rhythm-based cuts.",
  },
  {
    title: "Mythos Rebirth",
    desc: "Fantasy short with CG flames, fog overlays, and magical compositing.",
  },
  {
    title: "AfterDark",
    desc: "Dark-themed thriller opening sequence with cinematic LUTs and text animations."
  }
];

export default function Projects() {
  return (
    <section className="py-20 px-6 md:px-16">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-gold text-center">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            className="bg-black border border-gold p-6 rounded-xl shadow-md hover:shadow-gold transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gold mb-2">{proj.title}</h3>
            <p className="text-gold/70">{proj.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
