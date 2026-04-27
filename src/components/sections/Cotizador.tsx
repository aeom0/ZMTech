'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Calculator,
  Factory,
  Sparkles,
  Globe,
  ShoppingCart,
  Check,
  ChevronRight,
} from 'lucide-react'

// ─── Tipos de proyecto ───────────────────────────────────────────────────────
const tipos = [
  {
    id: 'landing',
    label: 'Landing Page',
    desc: 'Una página, orientada a conversión',
    icon: Globe,
    min: 120,
    max: 180,
    dias: '3–5 días',
  },
  {
    id: 'corporativa',
    label: 'Sitio Corporativo',
    desc: 'Multi-sección, portafolio o empresa',
    icon: Factory,
    min: 250,
    max: 400,
    dias: '7–14 días',
  },
  {
    id: 'ecommerce',
    label: 'E-commerce',
    desc: 'Tienda online con catálogo y pagos',
    icon: ShoppingCart,
    min: 500,
    max: 800,
    dias: '14–21 días',
  },
  {
    id: 'saas',
    label: 'Web App / SaaS',
    desc: 'Dashboard, auth y lógica de negocio',
    icon: Sparkles,
    min: 800,
    max: 1500,
    dias: '21–45 días',
  },
]

// ─── Niveles de diseño ───────────────────────────────────────────────────────
const disenios = [
  { id: 'template', label: 'Plantilla adaptada', mul: 1.0 },
  { id: 'custom',   label: 'Personalizado',      mul: 1.3 },
  { id: 'premium',  label: 'Diseño premium',     mul: 1.6 },
]

// ─── Extras agrupados por categoría ─────────────────────────────────────────
const extraGroups = [
  {
    category: 'Pagos',
    color: 'text-blue-400',
    items: [
      { id: 'stripe',  label: 'Stripe',               desc: 'Cobros en dólares o euros con tarjeta y link de pago. Ideal para la diáspora.',          price: 60 },
      { id: 'cashea',  label: 'Visor de cuotas Cashea', desc: 'Widget que muestra el pago semanal al cliente — más transparencia, más ventas.',        price: 45 },
    ],
  },
  {
    category: 'Venezuela',
    color: 'text-red-400',
    items: [
      { id: 'bcv',    label: 'Tasa BCV automática',   desc: 'Precios en bolívares actualizados a diario sin tocar el sistema manualmente.',          price: 35 },
      { id: 'seniat', label: 'Facturación SENIAT',     desc: 'Facturas conformes con Art. 177 generadas automáticamente. Tu negocio en regla.',      price: 90 },
      { id: 'mercadolibre', label: 'MercadoLibre',     desc: 'Sincronización de catálogo, stock y órdenes en tiempo real desde tu sistema.',        price: 80 },
    ],
  },
  {
    category: 'Comunicación',
    color: 'text-emerald-400',
    items: [
      { id: 'whatsapp',  label: 'WhatsApp Business',       desc: 'Confirmaciones, recordatorios y atención al cliente sin intervención humana.',       price: 30 },
      { id: 'telegram',  label: 'Telegram Bot',             desc: 'Alertas de ventas, errores o recordatorios directo a tu equipo al instante.',       price: 40 },
      { id: 'calendar',  label: 'Google Calendar',          desc: 'Citas y reservas reflejadas en tiempo real en la agenda de tu equipo.',             price: 50 },
    ],
  },
  {
    category: 'Marketing',
    color: 'text-pink-400',
    items: [
      { id: 'seo',  label: 'SEO básico on-page',          desc: 'Meta tags, sitemap, Open Graph y velocidad optimizada para Google.',                 price: 40 },
      { id: 'meta', label: 'Catálogo Meta / Instagram',   desc: 'Productos sincronizados con Instagram Shopping y Meta Ads automáticamente.',        price: 55 },
    ],
  },
  {
    category: 'Técnico',
    color: 'text-violet-400',
    items: [
      { id: 'auth', label: 'Supabase Auth + Roles', desc: 'Login con correo o Google y permisos por usuario sobre cada módulo.',                 price: 70 },
      { id: 'form', label: 'Formulario de leads',   desc: 'Captura de contactos con validación, notificación por email y guardado en BD.',       price: 25 },
      { id: 'host', label: 'Dominio + hosting año 1', desc: 'Dominio .com o .ve + deploy en Vercel con SSL incluido.',                           price: 35 },
      { id: 'mant', label: 'Mantenimiento mensual', desc: 'Actualizaciones, backups, monitoreo y soporte técnico prioritario.',                   price: 50, monthly: true },
    ],
  },
]

// Flatten para cálculos
const extrasFlat = extraGroups.flatMap((g) => g.items)

// ─── Componente ──────────────────────────────────────────────────────────────
export default function Cotizador() {
  const [tipoId, setTipoId]         = useState<string | null>(null)
  const [disenioId, setDisenioId]   = useState('template')
  const [activeExtras, setActiveExtras] = useState<Set<string>>(new Set())

  const tipo     = tipos.find((t) => t.id === tipoId)
  const disenio  = disenios.find((d) => d.id === disenioId)!
  const extrasSum = extrasFlat
    .filter((e) => activeExtras.has(e.id) && !e.monthly)
    .reduce((acc, e) => acc + e.price, 0)
  const hasMonthly = activeExtras.has('mant')

  const minTotal = tipo ? Math.round(tipo.min * disenio.mul) + extrasSum : null
  const maxTotal = tipo ? Math.round(tipo.max * disenio.mul) + extrasSum : null

  const toggleExtra = (id: string) => {
    setActiveExtras((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  // Panel resultado — reutilizado en mobile (top) y desktop (sticky right)
  const ResultPanel = () => (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6">
      <div className="mb-5 flex items-center gap-2">
        <Calculator className="h-4 w-4 text-violet-400" />
        <span className="font-mono text-xs tracking-widest text-gray-400 uppercase">Tu estimado</span>
      </div>

      <AnimatePresence mode="wait">
        {tipo ? (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >
            {/* Precio */}
            <div className="mb-5">
              <p className="mb-1 font-mono text-xs text-gray-500">Tu proyecto estaría entre</p>
              <p className="text-4xl font-black text-white leading-none">
                ${minTotal}–${maxTotal}
                <span className="ml-1.5 text-base font-normal text-gray-400">USD</span>
              </p>
              {hasMonthly && (
                <p className="mt-1.5 font-mono text-xs text-violet-400">+ $50/mes mantenimiento</p>
              )}
            </div>

            {/* Detalles */}
            <div className="mb-5 flex flex-col gap-2 border-t border-white/10 pt-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Tipo</span>
                <span className="font-mono text-xs text-white">{tipo.label}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Diseño</span>
                <span className="font-mono text-xs text-white">{disenio.label}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Entrega est.</span>
                <span className="font-mono text-xs text-green-400">{tipo.dias}</span>
              </div>
              {activeExtras.size > 0 && (
                <div className="flex justify-between">
                  <span className="text-gray-500">Extras</span>
                  <span className="font-mono text-xs text-violet-400">{activeExtras.size} seleccionados</span>
                </div>
              )}
            </div>

            {/* Trust */}
            <div className="mb-5 flex flex-col gap-1 font-mono text-xs text-gray-500">
              <p>✓ 50% anticipo · 50% entrega</p>
              <p>✓ Código fuente 100% tuyo</p>
              <p>✓ Responsive mobile-first</p>
              <p>✓ Next.js 15 + Tailwind CSS</p>
            </div>

            {/* CTA */}
            <a
              href="#contacto"
              className="flex items-center justify-center gap-2 w-full rounded-lg bg-violet-600 py-3 font-mono text-xs tracking-wider text-white uppercase transition-all duration-200 hover:bg-violet-500 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] group"
            >
              Quiero esta propuesta
              <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        ) : (
          <motion.div
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-8 flex flex-col items-center gap-4 text-center"
          >
            <div className="mx-auto w-12 h-12 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
              <Calculator className="h-5 w-5 text-violet-400" />
            </div>
            <p className="font-mono text-xs tracking-wider text-gray-500 uppercase leading-relaxed">
              Elige el tipo de proyecto<br />para ver tu estimado
            </p>
            <div className="flex flex-col gap-1 font-mono text-xs text-gray-600">
              <p>→ Sin compromiso</p>
              <p>→ Respuesta en menos de 24h</p>
              <p>→ Ajustable a tu presupuesto</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )

  return (
    <section id="cotizador" className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 font-mono text-xs tracking-widest text-violet-400 uppercase">Herramienta</p>
          <h2 className="mb-4 text-5xl font-black text-white">Cotizador Instantáneo</h2>
          <p className="font-mono text-sm text-gray-400">Obtén un estimado real en menos de 60 segundos</p>
          <div className="mx-auto mt-4 h-0.5 w-16 bg-violet-500" />
        </motion.div>

        {/* Panel resultado — visible solo en mobile (antes de los controles) */}
        <div className="mb-8 lg:hidden">
          <ResultPanel />
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">

          {/* LEFT — Controles */}
          <div className="flex flex-col gap-10 lg:col-span-3">

            {/* 01 Tipo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="mb-4 font-mono text-xs tracking-widest text-gray-500 uppercase">01 — ¿Qué necesitas?</p>
              <div className="grid grid-cols-2 gap-3">
                {tipos.map((t) => {
                  const Icon = t.icon
                  const active = tipoId === t.id
                  return (
                    <button
                      key={t.id}
                      onClick={() => setTipoId(t.id)}
                      className={`rounded-xl border p-4 text-left transition-all duration-200 ${
                        active
                          ? 'border-violet-500/70 bg-violet-500/10 shadow-[0_0_20px_rgba(139,92,246,0.2)]'
                          : 'border-white/10 bg-white/5 hover:border-white/20'
                      }`}
                    >
                      <Icon className={`mb-2 h-5 w-5 ${active ? 'text-violet-400' : 'text-gray-500'}`} />
                      <p className={`text-sm font-bold ${active ? 'text-white' : 'text-gray-300'}`}>{t.label}</p>
                      <p className="mt-1 text-xs leading-relaxed text-gray-500">{t.desc}</p>
                    </button>
                  )
                })}
              </div>
            </motion.div>

            {/* 02 Diseño */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="mb-4 font-mono text-xs tracking-widest text-gray-500 uppercase">02 — Nivel de diseño</p>
              <div className="flex flex-wrap gap-3">
                {disenios.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => setDisenioId(d.id)}
                    className={`rounded-full border px-4 py-2 font-mono text-xs tracking-wider uppercase transition-all duration-200 ${
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

            {/* 03 Extras agrupados */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="mb-5 font-mono text-xs tracking-widest text-gray-500 uppercase">03 — Funcionalidades extra</p>
              <div className="flex flex-col gap-6">
                {extraGroups.map((group) => (
                  <div key={group.category}>
                    {/* Category label */}
                    <p className={`mb-2 font-mono text-xs tracking-widest uppercase ${group.color}`}>
                      {group.category}
                    </p>
                    <div className="flex flex-col gap-2">
                      {group.items.map((e) => {
                        const on = activeExtras.has(e.id)
                        return (
                          <button
                            key={e.id}
                            onClick={() => toggleExtra(e.id)}
                            className={`flex items-start justify-between rounded-lg border px-4 py-3 text-left transition-all duration-200 ${
                              on
                                ? 'border-violet-500/50 bg-violet-500/8'
                                : 'border-white/10 bg-white/5 hover:border-white/20'
                            }`}
                          >
                            <div className="flex flex-col gap-0.5 pr-4">
                              <span className={`text-sm font-medium ${on ? 'text-white' : 'text-gray-300'}`}>
                                {e.label}
                              </span>
                              <span className="text-xs leading-relaxed text-gray-500">{e.desc}</span>
                            </div>
                            <div className="flex shrink-0 items-center gap-3 pt-0.5">
                              <span className="font-mono text-xs text-gray-500">
                                +${e.price}{e.monthly ? '/mes' : ''}
                              </span>
                              <div
                                className={`flex h-5 w-5 items-center justify-center rounded border transition-all ${
                                  on ? 'border-violet-500 bg-violet-500' : 'border-white/20'
                                }`}
                              >
                                {on && <Check className="h-3 w-3 text-white" />}
                              </div>
                            </div>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Panel sticky (solo desktop) */}
          <motion.div
            className="hidden lg:block lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="sticky top-24">
              <ResultPanel />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
