'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="fixed top-4 left-1/4 transform -translate-x-1/2 z-50 w-[60%] max-w-6xl px-6 py-3 
                 bg-white/5 backdrop-blur-md border border-white/10 
                 rounded-full shadow-2xl flex justify-between items-center"
    >
      {/* Logo */}
      <Link href="/" className="text-xl font-bold text-white tracking-widest">
        SOTA<span className="text-green-400">.</span>
      </Link>

      {/* Nav Links */}
      <div className="hidden md:flex gap-6 text-sm font-medium text-white">
        {[
          { name: 'About', href: '#sota-info' },
          { name: 'Sponsors', href: '#sponsors' },
          { name: 'Founders', href: '#founders' },
          { name: 'FAQ', href: '#faq' },
          { name: 'Discord', href: 'https://discord.gg/RAk9r2JtzC' },
        ].map((item) => {
          const isAnchorLink = item.href.startsWith('#')
          const isExternal = item.href.startsWith('http')
          const isActive = !isAnchorLink && !isExternal && pathname === item.href

          return (
            <Link
              key={item.name}
              href={item.href}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              className={`relative group transition duration-300 px-3 py-1 rounded-full
                ${isActive ? 'bg-green-400/10 shadow-[0_0_8px_1px_rgba(34,197,94,0.25)]' : ''}`}
            >
              <span
                className={`inline-block transition
                  ${isActive ? 'text-green-400' : 'hover:text-green-400 hover:heartbeat'}`}
              >
                {item.name}
              </span>
              <span
                className={`absolute left-0 -bottom-0.5 h-0.5 bg-green-400 transition-all duration-300 
                  ${isActive ? 'w-0' : 'w-0 group-hover:w-full'}`}
              />
            </Link>
          )
        })}
      </div>
    </motion.nav>
  )
}
