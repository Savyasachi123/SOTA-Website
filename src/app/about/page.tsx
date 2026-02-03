'use client'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="relative w-full min-h-screen bg-[#0a0a13] text-white overflow-hidden">
      {/* Fog Image Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/cf.png"
          alt="Fog Background"
          className="w-full h-full object-cover opacity-20 mix-blend-screen pointer-events-none"
        />
      </div>

      {/* Radial Glow Overlays */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,200,255,0.04),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,100,200,0.03),transparent_70%)] pointer-events-none" />

      {/* Navbar */}
      <div className="z-50 relative">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-36 pb-20 space-y-24">
        {/* Hero */}
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-300 via-white to-purple-400 bg-clip-text text-transparent drop-shadow">
            About SOTA
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            SOTA (State-of-the-Art) is a community built by high schoolers, for high schoolers. We empower students to learn, create, and compete in the field of Artificial Intelligence through Olympiads, research, and real-world projects.
          </p>
          <Link
            href="/team"
            className="inline-block px-8 py-4 bg-gradient-to-r from-green-400 to-purple-400 text-white font-semibold rounded-full hover:scale-105 transition-transform"
          >
            Meet the Team
          </Link>
        </motion.div>

        {/* Core Values */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { title: 'Learn Together', desc: 'We break down complex AI topics into intuitive lessons, making high-level concepts approachable.' },
            { title: 'Build Projects', desc: 'From beginner projects to advanced research, we encourage hands-on experimentation with real impact.' },
            { title: 'Compete Globally', desc: 'We train for Olympiads like IOAI and INAIO, helping members push the frontier of competitive AI.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white/5 rounded-xl p-6 backdrop-blur-md border border-white/10 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold mb-2 text-green-300">{item.title}</h3>
              <p className="text-white/80">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Why We Exist */}
        <motion.div
          className="text-center max-w-4xl mx-auto space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-green-300 bg-clip-text text-transparent">
            Why We Exist
          </h2>
          <p className="text-lg text-white/80 leading-relaxed">
            AI is transforming the world—yet most high schoolers are left out of the loop. At SOTA, we’re here to change that. We believe the next breakthroughs won't come from massive corporations—they’ll come from curious, driven minds like yours. We're here to create a space where exploration, excellence, and community intersect. Whether you're just starting or aiming for IOAI gold, SOTA is your launchpad.
          </p>
        </motion.div>
      </div>
      <div className="h-24" />     
      {/* Footer */}
      <Footer />
    </main>
  )
}
