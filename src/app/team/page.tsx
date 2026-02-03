'use client'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'
import { FaLinkedin } from 'react-icons/fa'
import Image from 'next/image'

const founders = [
  {
    name: 'Aarav Vishal Sharma',
    role: 'Founder',
    image: '/images/avatars/aarav.jpg',
    linkedin: 'https://www.linkedin.com/in/aaravsharma'
  },
  {
    name: 'Roumak Das',
    role: 'Founder',
    image: '/images/avatars/roumak.jpg',
    linkedin: 'https://www.linkedin.com/in/roumakdas'
  },
  {
    name: 'SavyaSachi Singh',
    role: 'Founder',
    image: '/images/avatars/savyasachi.jpg',
    linkedin: 'https://www.linkedin.com/in/savyasachi'
  },
  {
    name: 'Rayan Bannerjee',
    role: 'Founder',
    image: '/images/avatars/rayan.jpg',
    linkedin: 'https://www.linkedin.com/in/rayan'
  }
]

const contributors = Array.from({ length: 12 }, (_, i) => ({
  name: `Contributor ${i + 1}`,
  role: 'Content / Web Dev',
  image: `/images/avatars/contributor${i + 1}.jpg`,
  linkedin: '#'
}))

export default function TeamPage() {
  return (
    <main className="relative w-full min-h-screen bg-[#0a0a13] text-white overflow-hidden">
      {/* Fog Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/cf.png"
          alt="Fog Background"
          className="w-full h-full object-cover opacity-20 mix-blend-screen pointer-events-none"
        />
      </div>

      {/* Radial overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,200,255,0.04),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,100,200,0.03),transparent_70%)] pointer-events-none" />

      <div className="relative z-10">
        <Navbar />
        <div className="max-w-6xl mx-auto px-6 pt-36 pb-32 space-y-28">
          {/* Title */}
          <motion.h1
            className="text-center text-5xl font-bold bg-gradient-to-r from-green-300 via-white to-purple-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Meet the SOTA Team
          </motion.h1>

          {/* Founders Section */}
          <section className="space-y-8">
            <h2 className="text-3xl font-semibold text-center text-purple-300">Founders</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
              {founders.map((person, i) => (
                <motion.div
                  key={i}
                  className="relative bg-white/5 border border-white/10 p-6 rounded-2xl text-center backdrop-blur-md shadow-md group overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-transparent group-hover:border-purple-400 transition-all duration-500 ring-2 ring-purple-500/30">
                    <Image
                      src={person.image}
                      alt={person.name}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-green-300">{person.name}</h3>
                  <p className="text-white/70 text-sm">{person.role}</p>
                  <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-white/70 hover:text-purple-400 transition">
                    <FaLinkedin size={20} />
                  </a>
                  <div className="absolute inset-0 pointer-events-none border-2 border-transparent rounded-2xl animate-border-sweep" />
                </motion.div>
              ))}
            </div>
          </section>

          {/* Contributors Section */}
          <section className="space-y-8">
            <h2 className="text-3xl font-semibold text-center text-green-300">Contributors</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {contributors.map((person, i) => (
                <motion.div
                  key={i}
                  className="relative bg-white/5 border border-white/10 p-4 rounded-2xl text-center backdrop-blur-md group shadow-md overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="w-20 h-20 mx-auto mb-2 rounded-full overflow-hidden border-4 border-transparent group-hover:border-green-400 transition-all duration-500 ring-1 ring-green-500/30">
                    <Image
                      src={person.image}
                      alt={person.name}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h4 className="text-md font-semibold text-purple-200">{person.name}</h4>
                  <p className="text-xs text-white/60">{person.role}</p>
                  <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-white/70 hover:text-green-400 transition">
                    <FaLinkedin size={18} />
                  </a>
                  <div className="absolute inset-0 pointer-events-none border-2 border-transparent rounded-2xl animate-border-sweep" />
                </motion.div>
              ))}
            </div>
          </section>
        </div>
        <Footer />
      </div>

      {/* Glow sweep animation keyframes */}
      <style jsx>{`
        @keyframes borderSweep {
          0% {
            border-color: rgba(255, 255, 255, 0);
          }
          50% {
            border-color: rgba(255, 255, 255, 0.1);
          }
          100% {
            border-color: rgba(255, 255, 255, 0);
          }
        }
        .animate-border-sweep {
          animation: borderSweep 3s ease-in-out infinite;
        }
      `}</style>
    </main>
  )
}
