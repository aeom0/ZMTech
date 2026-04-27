'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, Factory, Sparkles, Wrench, Globe, ShoppingCart, Check } from 'lucide-react'

const tipos = [
  { id: 'landing', label: 'Landing Page', desc: 'Una página, orientada a conversión', icon: Globe, min: 120, max: 180, dias: '3–5 días' },
  { id: 'corporativa', label: 'Corporativa', desc: 'Multi-sección, portafolio o empresa', icon: Factory, min: 250, max: 400, dias: '7–14 días' },
  { id: 'ecommerce', label: 'E-commerce', desc: 'Tienda online con catálogo y pagos', icon: ShoppingCart, min: 500, max: 800, dias: '14–21 días' },
  { id: 'saas', label: 'Web App / SaaS', desc: 'Dashboard, auth, lógica de negocio', icon: Sparkles, min: 800, max: 1500, dias: '21–45 días' },
]

const disenios = [
  { id: 'template', label: 'Plantilla adaptada', mul: 1.0 },
  { id: 'custom', label: 'Personalizado', mul: 1.3 },
  { id: 'premium', label: 'Diseño premium', mul: 1.6 },
]

const extras = [
  { id: 'seo', label: 'SEO básico on-page', price: 40 },
  { id: 'whatsapp', label: 'Integración WhatsApp', price: 30 },
  { id: 'form', label: 'Formulario de leads', price: 25 },
  { id: 'host', label: 'Dominio + hosting año 1', price: 35 },
  { id: 'mant', label: 'Mantenimiento mensual', price: 50, monthly: true },
]

export default function Cotizador() {
  const [tipoId, setTipoId] = useState<string | null>(null)
  const [disenioId, setDisenioId] = useState('template')
  const [activeExtras, setActiveExtras] = useState<Set<string>>(new Set())

  const tipo = tipos.find(t => t.id === tipoId)
  const disenio = disenios.find(d => d.id === disenioId)!
  const extrasSum = extras
    .filter(e => activeExtras.has(e.id) && !e.monthly)
    .reduce((acc, e) => acc + e.price, 0)
  const hasMonthly = activeExtras.has('mant')

  const minTotal = tipo ? Math.round(tipo.min * disenio.mul) + extrasSum : null
  const maxTotal = tipo ? Math.round(tipo.max * disenio.mul) + extrasSum : null

  const toggleExtra = (id: string) => {
    setActiveExtras(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  return (
    <section id="cotizador" className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-violet-400 mb-3">HERRAMIENTA</p>
          <h2 className="text-5xl font-black text-white mb-4">Cotizador Instantáneo</h2>
          <p className="text-gray-400 font-mono text-sm">Obtén un estimado real en menos de 60 segundos</p>
          <div className="w-16 h-0.5 bg-violet-500 mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* LEFT — Controls */}
          <div className="lg:col-span-3 flex flex-col gap-8">

            {/* Tipo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-4">01 — TIPO DE SITIO</p>
              <div className="grid grid-cols-2 gap-3">
                {tipos.map(t => {
                  const Icon = t.icon
                  const active = tipoId === t.id
                  return (
                    <button
                      key={t.id}
                      onClick={() => setTipoId(t.id)}
                      className={`text-left p-4 rounded-xl border transition-all duration-200 ${
                        active
                          ? 'border-violet-500/70 bg-violet-500/10 shadow-[0_0_20px_rgba(139,92,246,0.2)]'
                          : 'border-white/10 bg-white/5 hover:border-white/20'
                      }`}
                    >
                      <Icon className={`w-5 h-5 mb-2 ${ active ? 'text-violet-400' : 'text-gray-500' }`} />
                      <p className={`font-bold text-sm ${ active ? 'text-white' : 'text-gray-300' }`}>{t.label}</p>
                      <p className="text-gray-500 text-xs mt-1 leading-relaxed">{t.desc}</p>
                    </button>
                  )
                })}
              </div>
            </motion.div>

            {/* Diseño */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-4">02 — NIVEL DE DISEÑO</p>
              <div className="flex flex-wrap gap-3">
                {disenios.map(d => (
                  <button
                    key={d.id}
                    onClick={() => setDisenioId(d.id)}
                    className={`px-4 py-2 rounded-full border font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                      disenioId === d.id
                        ? 'border-violet-500 bg-violet-500/15 text-violet-300'
                        : 'border-white/15 text-gray-400 hover:border-white/30'
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Extras */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-4">03 — EXTRAS</p>
              <div className="flex flex-col gap-2">
                {extras.map(e => {
                  const on = activeExtras.has(e.id)
                  return (
                    <button
                      key={e.id}
                      onClick={() => toggleExtra(e.id)}
                      className={`flex items-center justify-between px-4 py-3 rounded-lg border transition-all duration-200 ${
                        on
                          ? 'border-violet-500/50 bg-violet-500/8'
                          : 'border-white/10 bg-white/5 hover:border-white/20'
                      }`}
                    >
                      <span className={`text-sm ${ on ? 'text-white' : 'text-gray-400' }`}>{e.label}</span>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-gray-500">
                          +${e.price}{e.monthly ? '/mes' : ''}
                        </span>
                        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${
                          on ? 'bg-violet-500 border-violet-500' : 'border-white/20'
                        }`}>
                          {on && <Check className="w-3 h-3 text-white" />}
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Result panel */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="sticky top-24 border border-white/10 rounded-xl p-6 bg-white/5">
              <div className="flex items-center gap-2 mb-6">
                <Calculator className="w-5 h-5 text-violet-400" />
                <span className="font-mono text-xs uppercase tracking-widest text-gray-400">ESTIMADO</span>
              </div>

              {tipo ? (
                <>
                  {/* Price */}
                  <div className="mb-6">
                    <p className="font-mono text-xs text-gray-500 mb-1">Inversión total</p>
                    <p className="text-4xl font-black text-white">
                      ${minTotal} – ${maxTotal}
                      <span className="text-lg text-gray-400 ml-1">USD</span>
                    </p>
                    {hasMonthly && (
                      <p className="font-mono text-xs text-violet-400 mt-1">+ $50/mes mantenimiento</p>
                    )}
                  </div>

                  {/* Details */}
                  <div className="flex flex-col gap-2 mb-6 text-sm border-t border-white/10 pt-4">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Tipo</span>
                      <span className="text-white font-mono text-xs">{tipo.label}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Diseño</span>
                      <span className="text-white font-mono text-xs">{disenio.label}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Entrega est.</span>
                      <span className="text-white font-mono text-xs">{tipo.dias}</span>
                    </div>
                  </div>

                  {/* Trust notes */}
                  <div className="flex flex-col gap-1 text-xs text-gray-500 font-mono mb-6">
                    <p>✓ 50% anticipo · 50% entrega</p>
                    <p>✓ Código fuente incluido</p>
                    <p>✓ Responsive mobile-first</p>
                    <p>✓ Next.js 15 + Tailwind CSS</p>
                  </div>

                  {/* CTA */}
                  <a
                    href="#contacto"
                    className="block w-full text-center py-3 rounded-lg bg-violet-600 text-white font-mono text-xs uppercase tracking-wider transition-all duration-200 hover:bg-violet-500 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]"
                  >
                    SOLICITAR PROPUESTA FORMAL →
                  </a>
                </>
              ) : (
                <div className="text-center py-12">
                  <p className="font-mono text-xs text-gray-600 uppercase tracking-widest">Selecciona el tipo de sitio para calcular</p>
                  <div className="w-8 h-0.5 bg-violet-500/30 mx-auto mt-4" />
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
