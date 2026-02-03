import { motion } from 'framer-motion'

export function AnimatedButton({ text }: { text: string }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-3 bg-white text-black rounded-xl font-bold shadow-xl hover:bg-glaucous hover:text-white transition duration-300 border border-white"
    >
      {text}
    </motion.button>
  )
}
