'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Settings } from 'lucide-react'

const h1Lines = ['Ingeniería de', 'Software a', 'Velocidad de IA']

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Hero gradient top-right */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-150 h-150 rounded-full bg-[radial-gradient(ellipse_at_top_right,rgba(139,92,246,0.15)_0%,transparent_60%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-[calc(100vh-8rem)] items-center">

          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col gap-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 border border-violet-500/30 bg-violet-500/10 text-violet-300 font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                SISTEMAS OPERATIVOS EN LÍNEA
              </span>
            </motion.div>

            {/* H1 */}
            <h1 className="font-black leading-none text-5xl lg:text-7xl">
              {h1Lines.map((line, i) => (
                <motion.span
                  key={line}
                  className={`block ${
                    i === 2
                      ? 'bg-linear-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text text-transparent'
                      : 'text-white'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                >
                  {line}
                </motion.span>
              ))}
            </h1>

            {/* Paragraph */}
            <motion.p
              className="text-gray-400 text-lg max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              Desarrollamos tu App/Web con precisión industrial y soporte inteligente 24/7.
              De la idea al mercado en tiempo récord, construido para escalar.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <button
                onClick={() => scrollTo('contacto')}
                className="px-6 py-3 rounded-lg bg-violet-600 text-white font-mono uppercase tracking-wider text-sm transition-all duration-200 hover:bg-violet-500 hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]"
              >
                COTIZAR PROYECTO →
              </button>
              <button
                onClick={() => scrollTo('verticales')}
                className="px-6 py-3 rounded-lg border border-white/20 text-white font-mono uppercase tracking-wider text-sm transition-all duration-200 hover:border-violet-500/50 hover:bg-white/5"
              >
                VER ECOSISTEMA
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden ring-1 ring-violet-500/20 shadow-[0_0_40px_rgba(139,92,246,0.15)]">
              <div className="relative h-105 lg:h-130 w-full">
                <Image
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
                  alt="Código de ingeniería de software"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-transparent to-violet-900/20" />
                {/* Edge blur mask */}
                <div className="absolute inset-0 bg-linear-to-r from-[#050505]/20 via-transparent to-[#050505]/10" />
              </div>

              {/* Floating status card */}
              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur border border-violet-500/30 rounded-lg p-3 flex items-center gap-3">
                <Settings className="w-5 h-5 text-violet-400 animate-spin-slow" />
                <div>
                  <p className="font-mono text-xs text-gray-400 uppercase tracking-wider">SYSTEM STATUS</p>
                  <p className="font-mono text-sm text-green-400">Optimal Performance</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
