'use client'

import { motion } from 'framer-motion'
import { Activity, Bot, TrendingUp, Shield } from 'lucide-react'
import type { ElementType } from 'react'

interface Feature {
  icon: ElementType
  iconColor: string
  iconBg: string
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: Activity,
    iconColor: 'text-violet-400',
    iconBg: 'bg-violet-500/10',
    title: 'Optimización de Procesos',
    description:
      'Interfaces crudas y eficientes. Eliminamos la fricción para que tu equipo opere a máxima velocidad.',
  },
  {
    icon: Bot,
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/10',
    title: 'Mantenimiento Evolutivo con IA',
    description:
      'No solo reparamos bugs. Nuestro sistema monitorea, predice fallos y sugiere mejoras automáticamente 24/7.',
  },
  {
    icon: TrendingUp,
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/10',
    title: 'Escalabilidad Garantizada',
    description:
      'Arquitectura nativa en la nube. Tu sistema soportará desde 100 hasta 1,000,000 usuarios sin reescribir la base.',
  },
  {
    icon: Shield,
    iconColor: 'text-yellow-400',
    iconBg: 'bg-yellow-500/10',
    title: 'Propiedad Absoluta',
    description:
      'Transparencia total. El código fuente, los datos y la infraestructura te pertenecen desde el día uno.',
  },
]

export default function Features() {
  return (
    <section id="ventajas" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:pr-8"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-violet-400 mb-3">
              CORE ENGINE
            </p>
            <h2 className="text-5xl font-black text-white leading-tight mb-6">
              Por qué{' '}ZM Tech
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              No construimos páginas web genéricas. Desarrollamos infraestructuras de software
              robustas diseñadas para dominar tu nicho de mercado.
            </p>

            {/* Terminal box */}
            <div className="bg-black border border-white/10 rounded-xl mt-8 p-6 font-mono text-sm">
              <p className="text-green-400">&gt; status: operational</p>
              <p className="text-green-400">&gt; latency: &lt; 50ms</p>
              <p className="text-green-400">
                &gt; security_protocols: active
                <span className="inline-block w-2 h-4 bg-green-400 ml-1 animate-pulse align-middle" />
              </p>
            </div>
          </motion.div>

          {/* RIGHT COLUMN — 2x2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f, index) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-white/20 transition-colors duration-300"
              >
                <div className={`w-10 h-10 rounded-lg ${f.iconBg} flex items-center justify-center mb-3`}>
                  <f.icon className={`w-5 h-5 ${f.iconColor}`} />
                </div>
                <h3 className="font-bold text-white text-sm mb-2">{f.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
