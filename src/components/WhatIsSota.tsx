'use client'
import { motion } from 'framer-motion'

export default function WhatIsSota() {
  return (
    <section id="sota-info" className="relative w-full pt-0 bg-[#0D0D1A] overflow-hidden">

      {/* Top Gradient Fade from Hero */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#0D0D1A] to-transparent z-10" />

      {/* 🔲 Subtle Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="20" height="10" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Animated Orbital Glow Ring */}
      <div className="absolute left-1/2 top-1/2 w-[600px] h-[600px] rounded-full border border-green-400/20 animate-spin-slow -translate-x-1/2 -translate-y-1/2 z-0 blur-3xl opacity-40" />

      {/* Subtle Moving Gradient Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[120%] h-[120%] bg-gradient-to-br from-green-500/10 via-purple-500/10 to-transparent animate-gradientShift rounded-full blur-3xl" />
      </div>

      {/* Main Block */}
      <div className="relative z-20 flex justify-center items-center px-6 py-36 sm:py-48">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative w-full max-w-5xl px-10 sm:px-20 py-20 bg-white/5 backdrop-blur-md 
                     border border-white/10 rounded-3xl shadow-2xl text-center text-white"
        >
          <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-green-400 via-white to-purple-400 text-transparent bg-clip-text">
            What is SOTA?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            SOTA is a high-school-first AI community dedicated to making AI education accessible,
            fun, and collaborative. Whether you're learning from scratch, preparing for IOAI, or building
            futuristic AI tools — this is your space.
          </p>
          <p className="mt-6 text-gray-400 text-lg">
            Join us for live lectures, open-source projects, and a community where curiosity leads everything.
          </p>

          {/* Optional: subtle glow aura */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-green-500 via-purple-500 to-green-500 blur-2xl opacity-20 z-[-1]" />
        </motion.div>
      </div>

      {/* Bottom Fade to Next Section */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0D0D1A] to-transparent z-10" />

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes gradientShift {
          0%, 100% {
            transform: translate(-10%, -10%) scale(1);
          }
          50% {
            transform: translate(10%, 10%) scale(1.1);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-gradientShift {
          animation: gradientShift 30s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
