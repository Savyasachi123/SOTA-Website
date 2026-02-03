'use client'
import { motion } from 'framer-motion'
import { FaDiscord, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0a0a13] text-white overflow-hidden pt-16 pb-10 -mt-10">
      {/* Fog backdrop using bf.png */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/bf.png')] bg-cover bg-center opacity-10 animate-fadeSlow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-base">
        {/* Left: Logo + tagline */}
        <div className="space-y-3">
          <motion.h1
            className="text-2xl font-bold tracking-widest text-white"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            SOTA<span className="text-green-400">.</span>
          </motion.h1>
          <p className="text-white/60 text-sm leading-relaxed">
            Empowering high schoolers through AI, Olympiads, lectures, mentorship, and innovation.
          </p>
        </div>

        {/* Middle: Navigation */}
        <div className="flex flex-col space-y-2 text-white/80">
          <h3 className="text-white font-semibold text-base mb-2">Explore</h3>
          {[
            { label: 'About', href: '#sota-info' },
            { label: 'Sponsors', href: '#sponsors' },
            { label: 'Founders', href: '#founders' },
            { label: 'FAQ', href: '#faq' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-green-400 hover:font-medium transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: Social Icons */}
        <div className="space-y-3">
          <h3 className="text-white font-semibold text-base mb-2">Connect with us</h3>
          <div className="flex gap-4 text-xl">
            <a
              href="https://discord.gg/RAk9r2JtzC"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-400 transition"
              title="Discord"
            >
              <FaDiscord />
            </a>
            <a
              href="https://www.linkedin.com/company/sota-community"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-400 transition"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:sota.ai.community@gmail.com"
              className="text-white hover:text-green-400 transition"
              title="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 w-full h-px bg-white/10 my-10" />

      {/* Copyright */}
      <div className="relative z-10 text-center text-white/30 text-sm">
        © {new Date().getFullYear()} SOTA. All rights reserved.
      </div>
    </footer>
  )
}
