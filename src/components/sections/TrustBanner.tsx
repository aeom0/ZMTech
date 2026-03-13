'use client'

import { Shield } from 'lucide-react'

export default function TrustBanner() {
  return (
    <div className="py-3 border-y border-violet-500/20 bg-violet-950/40 text-center">
      <div className="flex items-center justify-center gap-3 font-mono text-sm text-violet-300 px-4">
        <Shield className="w-4 h-4 text-violet-400 shrink-0" />
        <p>
          Tecnología probada en la industria{' '}
          <strong className="text-white">cosmética</strong> y{' '}
          <strong className="text-white">deportiva</strong>{' '}
          (<strong className="text-white">MLB Standards</strong>)
        </p>
      </div>
    </div>
  )
}
