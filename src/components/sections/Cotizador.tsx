'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, Factory, Sparkles, Globe, ShoppingCart, Check } from 'lucide-react'

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
    label: 'Corporativa',
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
    desc: 'Dashboard, auth, lógica de negocio',
    icon: Sparkles,
    min: 800,
    max: 1500,
    dias: '21–45 días',
  },
]

const disenios = [
  { id: 'template', label: 'Plantilla adaptada', mul: 1.0 },
  { id: 'custom', label: 'Personalizado', mul: 1.3 },
  { id: 'premium', label: 'Diseño premium', mul: 1.6 },
]

const extras = [
  { id: 'seo', label: 'SEO básico on-page', desc: 'Meta tags, sitemap, Open Graph y velocidad optimizada para Google', price: 40 },
  { id: 'whatsapp', label: 'Integración WhatsApp Business', desc: 'Confirmaciones, recordatorios y atención al cliente sin intervención humana', price: 30 },
  { id: 'form', label: 'Formulario de leads', desc: 'Captura de contactos con validación, notificación por email y guardado en BD', price: 25 },
  { id: 'host', label: 'Dominio + hosting año 1', desc: 'Dominio .com o .ve + deploy en Vercel o VPS con SSL incluido', price: 35 },
  { id: 'mercadolibre', label: 'Integración MercadoLibre', desc: 'Sincronización de catálogo, stock y órdenes en tiempo real desde tu sistema', price: 80 },
  { id: 'cashea', label: 'Visor de cuotas Cashea', desc: 'Widget que muestra el pago semanal al cliente — aumenta la conversión', price: 45 },
  { id: 'stripe', label: 'Integración Stripe', desc: 'Cobros en dólares, euros o cualquier moneda con tarjeta o link de pago', price: 60 },
  { id: 'bcv', label: 'Tasa BCV automática', desc: 'Precios en bolívares actualizados cada día sin tocar el sistema manualmente', price: 35 },
  { id: 'seniat', label: 'Facturación SENIAT', desc: 'Facturas y notas de entrega conformes con el Art. 177 generadas automáticamente', price: 90 },
  { id: 'calendar', label: 'Sincronización Google Calendar', desc: 'Citas y reservas reflejadas en tiempo real en la agenda de tu equipo', price: 50 },
  { id: 'telegram', label: 'Telegram Bot', desc: 'Alertas instantáneas de ventas, errores o recordatorios directo al equipo', price: 40 },
  { id: 'meta', label: 'Catálogo Meta / Instagram', desc: 'Productos sincronizados con Instagram Shopping y Meta Ads automáticamente', price: 55 },
  { id: 'auth', label: 'Supabase Auth + Roles', desc: 'Login con correo o Google y permisos por usuario sobre cada módulo', price: 70 },
  { id: 'mant', label: 'Mantenimiento mensual', desc: 'Actualizaciones, backups, monitoreo y soporte técnico prioritario', price: 50, monthly: true },
]

export default function Cotizador() {
  const [tipoId, setTipoId] = useState<string | null>(null)
  const [disenioId, setDisenioId] = useState('template')
  const [activeExtras, setActiveExtras] = useState<Set<string>>(new Set())

  const tipo = tipos.find((t) => t.id === tipoId)
  const disenio = disenios.find((d) => d.id === disenioId)!
  const extrasSum = extras
    .filter((e) => activeExtras.has(e.id) && !e.monthly)
    .reduce((acc, e) => acc + e.price, 0)
  const hasMonthly = activeExtras.has('mant')

  const minTotal = tipo ? Math.round(tipo.min * disenio.mul) + extrasSum : null
  const maxTotal = tipo ? Math.round(tipo.max * disenio.mul) + extrasSum : null

  const toggleExtra = (id: string) => {
    setActiveExtras((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

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
          <p className="mb-3 font-mono text-xs tracking-widest text-violet-400 uppercase">
            HERRAMIENTA
          </p>
          <h2 className="mb-4 text-5xl font-black text-white">Cotizador Instantáneo</h2>
          <p className="font-mono text-sm text-gray-400">
            Obtén un estimado real en menos de 60 segundos
          </p>
          <div className="mx-auto mt-4 h-0.5 w-16 bg-violet-500" />
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* LEFT — Controls */}
          <div className="flex flex-col gap-8 lg:col-span-3">
            {/* Tipo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="mb-4 font-mono text-xs tracking-widest text-gray-500 uppercase">
                01 — TIPO DE SITIO
              </p>
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
                      <Icon
                        className={`mb-2 h-5 w-5 ${active ? 'text-violet-400' : 'text-gray-500'}`}
                      />
                      <p className={`text-sm font-bold ${active ? 'text-white' : 'text-gray-300'}`}>
                        {t.label}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-gray-500">{t.desc}</p>
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
              <p className="mb-4 font-mono text-xs tracking-widest text-gray-500 uppercase">
                02 — NIVEL DE DISEÑO
              </p>
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

            {/* Extras */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="mb-4 font-mono text-xs tracking-widest text-gray-500 uppercase">
                03 — EXTRAS
              </p>
              <div className="flex flex-col gap-2">
                {extras.map((e) => {
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
                          +${e.price}
                          {e.monthly ? '/mes' : ''}
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
            <div className="sticky top-24 rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="mb-6 flex items-center gap-2">
                <Calculator className="h-5 w-5 text-violet-400" />
                <span className="font-mono text-xs tracking-widest text-gray-400 uppercase">
                  ESTIMADO
                </span>
              </div>

              {tipo ? (
                <>
                  {/* Price */}
                  <div className="mb-6">
                    <p className="mb-1 font-mono text-xs text-gray-500">Inversión total</p>
                    <p className="text-4xl font-black text-white">
                      ${minTotal} – ${maxTotal}
                      <span className="ml-1 text-lg text-gray-400">USD</span>
                    </p>
                    {hasMonthly && (
                      <p className="mt-1 font-mono text-xs text-violet-400">
                        + $50/mes mantenimiento
                      </p>
                    )}
                  </div>

                  {/* Details */}
                  <div className="mb-6 flex flex-col gap-2 border-t border-white/10 pt-4 text-sm">
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
                      <span className="font-mono text-xs text-white">{tipo.dias}</span>
                    </div>
                  </div>

                  {/* Trust notes */}
                  <div className="mb-6 flex flex-col gap-1 font-mono text-xs text-gray-500">
                    <p>✓ 50% anticipo · 50% entrega</p>
                    <p>✓ Código fuente incluido</p>
                    <p>✓ Responsive mobile-first</p>
                    <p>✓ Next.js 15 + Tailwind CSS</p>
                  </div>

                  {/* CTA */}
                  <a
                    href="#contacto"
                    className="block w-full rounded-lg bg-violet-600 py-3 text-center font-mono text-xs tracking-wider text-white uppercase transition-all duration-200 hover:bg-violet-500 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]"
                  >
                    SOLICITAR PROPUESTA FORMAL →
                  </a>
                </>
              ) : (
                <div className="py-12 text-center">
                  <p className="font-mono text-xs tracking-widest text-gray-600 uppercase">
                    Selecciona el tipo de sitio para calcular
                  </p>
                  <div className="mx-auto mt-4 h-0.5 w-8 bg-violet-500/30" />
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
