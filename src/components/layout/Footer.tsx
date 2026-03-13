import { TerminalSquare, Github, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <TerminalSquare className="w-6 h-6 text-violet-500" />
              <span className="font-mono font-bold tracking-wider text-xl">
                <span className="text-white">ZM</span>
                <span className="text-violet-500">TECH</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Ingeniería de software de grado industrial impulsada por IA. Construimos el futuro
              digital de organizaciones que exigen excelencia.
            </p>
          </div>

          {/* Módulos */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-white/60 mb-4">
              Módulos
            </h3>
            <ul className="space-y-2">
              {['ZM Industrial Core', 'ZM Beauty Engine', 'ZM Workshop & Parts'].map((item) => (
                <li key={item}>
                  <Link
                    href="#verticales"
                    className="text-gray-500 hover:text-white text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-white/60 mb-4">
              Red Social
            </h3>
            <div className="flex gap-3">
              {[
                { icon: Github, label: 'GitHub' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Twitter, label: 'Twitter' },
              ].map(({ icon: Icon, label }) => (
                <Link
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 hover:bg-violet-500/20 hover:border-violet-500/50 hover:text-white transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600">
          <span>© 2025 ZM Tech. Todos los derechos reservados.</span>
          <span>Hecho con ⚡ en Venezuela</span>
        </div>
      </div>
    </footer>
  )
}
