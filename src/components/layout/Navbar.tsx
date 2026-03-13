'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TerminalSquare, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'VERTICALES', href: '#verticales' },
  { label: 'VENTAJAS', href: '#ventajas' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (href: string) => {
    setMobileOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'backdrop-blur-md bg-black/60 border-white/10'
          : 'bg-transparent border-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <TerminalSquare className="w-6 h-6 text-violet-500" />
            <span className="font-mono font-bold tracking-wider text-xl">
              <span className="text-white">ZM</span>
              <span className="text-violet-500">TECH</span>
            </span>
          </div>

          {/* Links desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="font-mono text-xs uppercase tracking-widest text-white/60 hover:text-violet-400 transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleLinkClick('#contacto')}
              className="hidden md:inline-flex px-5 py-2 rounded bg-violet-600 text-white font-mono text-xs uppercase tracking-wider transition-all duration-200 hover:bg-violet-500 hover:shadow-[0_0_20px_rgba(139,92,246,0.6)]"
            >
              INICIAR SISTEMA
            </button>
            <button
              className="md:hidden text-white/70 hover:text-white transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Abrir menú"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-white/10 bg-black/90 backdrop-blur-xl"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-left font-mono text-xs uppercase tracking-widest text-white/60 hover:text-violet-400 transition-colors py-1"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleLinkClick('#contacto')}
                className="mt-2 px-5 py-3 rounded bg-violet-600 text-white font-mono text-xs uppercase tracking-wider text-center hover:bg-violet-500 hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] transition-all"
              >
                INICIAR SISTEMA
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
