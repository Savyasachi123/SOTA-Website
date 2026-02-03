'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const faqs = [
  {
    q: "What is SOTA?",
    a: "SOTA is an AI community designed to empower high schoolers through Olympiads, lectures, mentorship, and hands-on projects.",
  },
  {
    q: "Who can join?",
    a: "Any high school student passionate about AI and tech innovation can join, regardless of experience level.",
  },
  {
    q: "How do I prepare for AI Olympiads?",
    a: "We provide structured prep guides, mock contests, mentorship, and training sessions by past Olympiad qualifiers.",
  },
  {
    q: "Can I contribute to SOTA?",
    a: "Absolutely. You can volunteer, create content, help organize events, or become a mentor.",
  },
]

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const toggle = (i: number) => setActiveIndex(activeIndex === i ? null : i)

  return (
    <section id="faq" className="relative w-full py-32 text-white overflow-hidden bg-[#0a0a13]">
      {/* Fog overlay using bf.png */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/bf.png')] bg-cover bg-center opacity-20" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center bg-gradient-to-r from-purple-400 via-white to-green-400 bg-clip-text text-transparent drop-shadow-lg mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          FAQ's
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 relative group overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <h3
                onClick={() => toggle(i)}
                className="text-xl font-semibold cursor-pointer relative group-hover:glitch hover:heartbeat transition duration-300"
              >
                {faq.q}
                <span className="absolute right-0 top-0 text-purple-400 font-bold">
                  {activeIndex === i ? '-' : '+'}
                </span>
              </h3>

              <motion.div
                className="mt-4 text-white/80 text-sm overflow-hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={activeIndex === i ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {faq.a}
              </motion.div>

              <span className="absolute inset-0 group-hover:bg-white/5 transition duration-500 rounded-2xl pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
