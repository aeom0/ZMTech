'use client'

import { motion } from 'framer-motion'
import { Factory, Sparkles, Wrench } from 'lucide-react'
import Image from 'next/image'
import type { ElementType } from 'react'

interface Vertical {
  icon: ElementType
  iconColor: string
  iconBg: string
  title: string
  description: string
  image: string
  hoverBorder: string
  glow: string
}

const verticals: Vertical[] = [
  {
    icon: Factory,
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/10',
    title: 'ZM Industrial Core',
    description:
      'Sistemas ERP, gestión de inventario y logística con trazabilidad total. Diseñado para plantas y manufactura.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    hoverBorder: 'hover:border-blue-500/40',
    glow: 'rgba(59,130,246,0.2)',
  },
  {
    icon: Sparkles,
    iconColor: 'text-violet-400',
    iconBg: 'bg-violet-500/10',
    title: 'ZM Beauty Engine',
    description:
      'Plataformas de agendamiento, CRM de clientes y punto de venta para Spas, estéticas y clínicas de belleza.',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
    hoverBorder: 'hover:border-violet-500/40',
    glow: 'rgba(139,92,246,0.2)',
  },
  {
    icon: Wrench,
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10',
    title: 'ZM Workshop & Parts',
    description:
      'E-commerce especializado, catálogos por VIN, y gestión de talleres mecánicos integrados.',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80',
    hoverBorder: 'hover:border-emerald-500/40',
    glow: 'rgba(16,185,129,0.2)',
  },
]

export default function Verticals() {
  return (
    <section id="verticales" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-violet-400 mb-3">
            ECOSISTEMA
          </p>
          <h2 className="text-5xl font-black text-white">Verticales ZM</h2>
          <div className="w-16 h-0.5 bg-violet-500 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {verticals.map((v, index) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-xl border border-white/10 ${v.hoverBorder} transition-all duration-500 cursor-pointer`}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${v.glow}`
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = 'none'
              }}
            >
              {/* Image */}
              <div className="h-48 relative overflow-hidden">
                <Image
                  src={v.image}
                  alt={v.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-transparent to-transparent" />
                {/* Violet tint */}
                <div className="absolute inset-0 bg-violet-900/40 mix-blend-multiply" />

                {/* Icon floating top-right */}
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur border border-white/20 rounded-full p-2">
                  <v.icon className={`w-4 h-4 ${v.iconColor}`} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-xl text-white mb-2">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
