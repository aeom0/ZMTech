'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Terminal } from 'lucide-react'

const schema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  empresa: z.string().min(2, 'La empresa debe tener al menos 2 caracteres'),
  whatsapp: z.string().min(7, 'Ingresa un número válido'),
  presupuesto: z.string().min(1, 'Selecciona un presupuesto estimado'),
})

type FormData = z.infer<typeof schema>

const labelClass = 'block font-mono text-xs uppercase tracking-widest text-gray-500 mb-2'
const inputClass =
  'w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-gray-700 focus:border-violet-500/50 focus:outline-none font-mono text-sm transition-colors'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 800))
    setSubmitted(true)
  }

  return (
    <section id="contacto" className="py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-white/10 rounded-xl p-8 bg-white/2">
          {/* Header */}
          <div className="flex items-center gap-3 mb-2">
            <Terminal className="w-6 h-6 text-violet-400" />
            <h2 className="font-black text-3xl text-white">Inicializar Conexión</h2>
          </div>
          <p className="font-mono text-sm text-gray-500 mb-4">
            Status: Ready to receive payload
          </p>
          <div className="border-t border-white/10 mb-8" />

          {submitted ? (
            <div className="text-center py-16 border border-violet-500/30 rounded-xl bg-violet-500/5">
              <p className="font-mono text-violet-300 text-sm uppercase tracking-widest">
                ✓ PAYLOAD RECIBIDO — CONEXIÓN ESTABLECIDA
              </p>
              <p className="text-gray-500 text-sm mt-2">Te contactamos en menos de 24h.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Nombre */}
                <div>
                  <label className={labelClass}>NOMBRE / OPERADOR</label>
                  <input
                    {...register('nombre')}
                    className={inputClass}
                    placeholder="John Doe"
                  />
                  {errors.nombre && (
                    <p className="text-red-400 font-mono text-xs mt-1">{errors.nombre.message}</p>
                  )}
                </div>

                {/* Empresa */}
                <div>
                  <label className={labelClass}>EMPRESA / ORGANIZACIÓN</label>
                  <input
                    {...register('empresa')}
                    className={inputClass}
                    placeholder="Acme Corp"
                  />
                  {errors.empresa && (
                    <p className="text-red-400 font-mono text-xs mt-1">{errors.empresa.message}</p>
                  )}
                </div>

                {/* WhatsApp */}
                <div>
                  <label className={labelClass}>ENLACE COM (WHATSAPP)</label>
                  <input
                    {...register('whatsapp')}
                    className={inputClass}
                    placeholder="+1 234 567 8900"
                  />
                  {errors.whatsapp && (
                    <p className="text-red-400 font-mono text-xs mt-1">{errors.whatsapp.message}</p>
                  )}
                </div>

                {/* Presupuesto */}
                <div>
                  <label className={labelClass}>PRESUPUESTO ESTIMADO (USD)</label>
                  <input
                    {...register('presupuesto')}
                    className={inputClass}
                    placeholder="Ej: $5k - $10k"
                  />
                  {errors.presupuesto && (
                    <p className="text-red-400 font-mono text-xs mt-1">{errors.presupuesto.message}</p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-6 py-4 rounded-lg bg-violet-600 text-white font-mono uppercase tracking-widest text-sm transition-all duration-200 hover:bg-violet-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'PROCESANDO...' : 'TRANSMITIR DATOS →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
