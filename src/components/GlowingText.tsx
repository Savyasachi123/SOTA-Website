import { motion } from 'framer-motion'

export default function GlowingText() {
  return (
    <motion.h1
      className="text-5xl md:text-7xl font-extrabold text-center bg-gradient-to-br from-white via-glaucous to-green-300 bg-clip-text text-transparent drop-shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      SOTA – AI Community
    </motion.h1>
  )
}
