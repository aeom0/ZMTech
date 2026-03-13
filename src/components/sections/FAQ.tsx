'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: '¿Quién es dueño del código fuente?',
    answer:
      'Tú. El 100% del código fuente, repositorios y accesos son transferidos al cliente al completar el proyecto. Sin cláusulas ocultas ni licencias restringidas.',
  },
  {
    question: '¿Cómo funciona el mantenimiento evolutivo con IA?',
    answer:
      'Ofrecemos planes mensuales que incluyen monitoreo automatizado con IA, detección predictiva de fallos, actualizaciones de dependencias, nuevas features y soporte prioritario vía WhatsApp. El sistema no solo reacciona: anticipa.',
  },
  {
    question: '¿Cuáles son los tiempos de entrega promedio?',
    answer:
      'Dependiendo de la complejidad, entregamos MVPs en 3 a 8 semanas. Trabajamos con sprints semanales y entregas continuas para que veas progreso desde el día 1.',
  },
  {
    question: '¿Trabajan exclusivamente con ciertas industrias?',
    answer:
      'No. Aunque tenemos verticales especializadas en industria, belleza y automotriz, desarrollamos soluciones para cualquier nicho. Tenemos clientes en Venezuela, Colombia, Perú y EEUU.',
  },
  {
    question: '¿Qué pasa después del lanzamiento?',
    answer:
      'Los primeros 30 días post-lanzamiento incluyen ajustes sin costo adicional. Después, tu plan de mantenimiento cubre las iteraciones, mejoras y soporte técnico continuo.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-violet-400 mb-3">
            BASE DE CONOCIMIENTO
          </p>
          <h2 className="text-4xl font-black text-white">Protocolos Frecuentes</h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/3 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center gap-4 pr-4">
                  <span className="font-mono text-sm text-violet-400 shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-white font-medium text-sm">{faq.question}</span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-violet-400" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 pl-17 text-gray-400 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
