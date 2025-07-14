import { motion } from "framer-motion";
import { FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-20 px-6 md:px-16 text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-gold mb-8">Contact</h2>
      <div className="flex justify-center gap-8">
        <motion.a
          href="https://www.instagram.com/_cassiel_x"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block text-gold hover:drop-shadow-gold transition duration-300"
        >
          <FaInstagram size={48} />
        </motion.a>
        <motion.a
          href="mailto:jesowinraja6@gmail.com"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block text-gold hover:drop-shadow-gold transition duration-300"
        >
          <FaEnvelope size={48} />
        </motion.a>
      </div>
    </section>
  );
}
