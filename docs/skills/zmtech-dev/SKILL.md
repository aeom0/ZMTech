---
name: zmtech-dev
description: >
  Skill paraguas de ZM Tech. Actívalo siempre que el usuario mencione ZM Tech,
  Alberto, sus proyectos de clientes, la landing de ZM Tech, o cualquier contexto
  de la fábrica de software. Contiene el perfil completo de la empresa, todos los
  proyectos activos, el stack por defecto y las convenciones globales.
---

# ZM Tech — Skill Maestro

> Lee este archivo antes de trabajar en CUALQUIER proyecto de ZM Tech.
> Es el contexto paraguas. Cada proyecto tiene su propio skill complementario.

---

## 🏢 Quién es ZM Tech

**ZM Tech** es una fábrica de software fundada por **Alberto**, especializada en
soluciones SaaS para LATAM. Verticales: Beauty, Inmobiliaria, Wellness/Yoga,
Automotriz, Sports Tech y Enterprise.

- **Landing:** `zmtech-landing.vercel.app`
- **Repo landing:** `aeom0/ZMTech` (Next.js 16, App Router, Tailwind v4)
- **WhatsApp comercial:** +58 414 494 0417
- **Entorno de Alberto:** VS Code + WSL2 + Windows 11 · Android = target mobile primario

---

## 👤 Perfil del fundador

**Alberto** — desarrollador full-stack, diseñador de productos digitales.
- Trabaja solo o con Claude como co-desarrollador
- Mobile-first siempre (375px como viewport de referencia)
- Prefiere monorepos, TypeScript estricto, y arquitecturas escalables desde el día 1
- Modulariza todo: UI / lógica / servicios / contexto en capas separadas

---

## 🗂 Proyectos activos

### 1. ZM Lash and Nails Beauty ⭐ PRIMER CLIENTE
- **Cliente:** Vanessa (hermana de Alberto)
- **Web:** `zmlashnails.com`
- **Estado:** Activo

### 2. Guataparo Bienes Raíces
- **Cliente:** Morelba Hernández — agencia inmobiliaria, Valencia, Venezuela
- **Repo:** `aeom0/guataparobr`
- **Skill:** `docs/skills/guataparo-dev/SKILL.md`
- **Propuesta:** $435 USD (50/50) + $30/mes soporte
- **Estado:** Fase 0 completa → en Fase 1 (Supabase + Auth)
- **Deploy:** Vercel → `guataparobr.com` (pendiente)

### 3. YLA — Yoga con Lógica y Alma
- **Cliente:** Yube Karina
- **Estado:** Landing 100% completa → próximo Fase 1 PWA
- **Stack:** Next.js 15, React 19, Tailwind v4, Supabase+Stripe (Fase 2)

---

## 🛠 Stack por defecto ZM Tech

Salvo que el proyecto diga lo contrario, estos son los defaults:

| Capa | Tecnología |
|------|------------|
| Framework | Next.js (App Router) — versión según proyecto |
| UI | React 19 + Tailwind CSS v4 |
| Lenguaje | TypeScript estricto — sin `any` implícito |
| Base de datos | Supabase (PostgreSQL + Auth) |
| Imágenes | Cloudinary |
| Iconos | Lucide React |
| Deploy | Vercel |
| Monorepo | Turborepo + pnpm (proyectos con múltiples apps) |

---

## 🎨 Identidad visual de la landing ZM Tech

La landing (`aeom0/ZMTech`) tiene un lenguaje técnico-industrial único:

| ❌ Genérico | ✅ ZM Tech |
|---|---|
| Enviar / Submit | TRANSMITIR DATOS |
| Contacto | Inicializar Conexión |
| FAQ | Protocolos Frecuentes |
| Cotizar | INICIAR SISTEMA |
| Ver servicios | VER ECOSISTEMA |
| En línea | SISTEMAS OPERATIVOS EN LÍNEA |

**Tailwind v4 en la landing:**
```
bg-linear-to-r/t/l/b   ✅  (NO bg-gradient-to-*)
bg-white/3              ✅  (NO bg-white/[0.03])
border-white/8          ✅
```

---

## 📐 Convenciones globales ZM Tech

### Arquitectura (aplica a todos los proyectos)
- **Separación estricta de capas:** UI / lógica / servicios / contexto / navegación
- **Un componente = una responsabilidad.** +150 líneas → dividir
- **Contenido separado de presentación** — strings en `content.ts` o `tokens/`, nunca hardcodeados en JSX
- **Mobile-first siempre.** Diseñar para 375px, escalar hacia arriba
- **Props siempre con interfaces nombradas** en `types/index.ts`
- **Sin dependencias nuevas sin confirmar con Alberto**

### Commits
```
feat:     nueva funcionalidad
fix:      corrección de bug
design:   cambios visuales / tokens / estilos
docs:     documentación
refactor: sin cambio de comportamiento
chore:    config, deps, scripts
```

### Checklist antes de cualquier PR
- [ ] TypeScript compila sin errores
- [ ] Se ve bien en 375px
- [ ] Sin strings hardcodeados en JSX
- [ ] Interfaces en `types/index.ts`
- [ ] `alt` en todas las imágenes
- [ ] ESLint sin warnings

---

## 🚀 Comandos frecuentes

```bash
# Landing ZMTech
npm run dev              # localhost:3000
npm run build
node node_modules/.bin/eslint src/
node_modules/.bin/tsc --noEmit

# Proyectos monorepo (guataparobr, etc.)
pnpm dev                 # todas las apps en paralelo
pnpm --filter web dev
pnpm --filter admin dev
pnpm build
pnpm type-check
```

---

## 📋 Modelo comercial ZM Tech

| Concepto | Referencia |
|----------|------------|
| Proyecto base (sitio + panel) | $300–$500 USD |
| Módulos adicionales | $40–$100 c/u |
| Soporte mensual | $30/mes |
| Pago | 50% arranque / 50% entrega |
| Soporte post-entrega | 30 días incluidos |

---

*Skill mantenido por Alberto. Actualizar al incorporar nuevos proyectos o clientes.*
*Última actualización: Abril 2026*
