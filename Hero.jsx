import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4">
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-gold drop-shadow-gold"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        Jesowin Raja M. A
      </motion.h1>
      <motion.p
        className="text-lg md:text-2xl mt-6 text-gold/70 max-w-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Visual Editor • VFX Compositor • Creative Storyteller
      </motion.p>
    </section>
  );
}
