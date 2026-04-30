---
name: zmtech-dev
description: >
  Skill paraguas de ZM Tech. Actívalo siempre que el usuario mencione ZM Tech,
  Alberto, sus proyectos, la landing, o cualquier contexto de la fábrica de software.
  Contiene el perfil completo de la empresa, TODOS los repos y proyectos activos,
  el stack por defecto y las convenciones globales.
---

# ZM Tech — Skill Maestro

> Lee este archivo antes de trabajar en CUALQUIER proyecto de ZM Tech.
> Es el contexto paraguas. Cada proyecto tiene su propio skill complementario.

---

## 🏢 Quién es ZM Tech

**ZM Tech** es una fábrica de software fundada por **Alberto**, especializada en
soluciones SaaS para LATAM. Verticales activas: Beauty, Inmobiliaria, Wellness/Yoga,
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

## 🗂 Ecosistema completo de repos (aeom0)

### Clientes activos

#### 1. ZM Lash and Nails Beauty ⭐ PRIMER CLIENTE
- **Cliente:** Vanessa (hermana de Alberto)
- **Web:** `zmlashnails.com`
- **Vertical:** Beauty / salón de uñas y pestañas
- **Estado:** Activo en producción

#### 2. Guataparo Bienes Raíces
- **Cliente:** Morelba Hernández — Valencia, Venezuela
- **Repo:** `aeom0/guataparobr` (privado)
- **Skill:** `docs/skills/guataparo-dev/SKILL.md`
- **Stack:** Next.js 16.2, Turborepo + pnpm, Supabase, Cloudinary, Tailwind v4
- **Propuesta:** $435 USD (50/50) + $30/mes soporte
- **Estado:** Fase 0 ✅ → Fase 1 en progreso (Supabase + Auth)
- **Deploy:** Vercel → `guataparobr.com` (pendiente)
- **Repo demo:** `aeom0/Guataparo-demo` (privado) — MVP visual que cerró el trato

#### 3. YLA — Yoga con Lógica y Alma
- **Cliente:** Yube Karina
- **Repo:** `aeom0/yla-mvp` (público)
- **Skill:** `/mnt/skills/user/yla-dev/SKILL.md`
- **Stack:** Next.js 15, React 19, Tailwind v4, Supabase+Stripe (Fase 2)
- **Paleta:** Lavanda #B497D6, Beige #F6EBD9, Gold #E8D3A3, Carbón #333333
- **Fuentes:** Playfair Display + Lato + Dancing Script
- **Estado:** Landing 100% completa → próximo Fase 1 PWA

### Productos propios ZM Tech

#### 4. GeemaStudio
- **Repo:** `aeom0/geemastudio` (privado)
- **Descripción:** SaaS multi-tenant para salones de belleza, barberías y spas en LATAM
- **Basado en:** ZM Lash & Nails Beauty (primer cliente = seed del producto)
- **Stack:** React Native 0.81 + Expo SDK 54 + Next.js 15 + Supabase + Drizzle ORM + Yarn 4
- **Tipos de negocio:** spa-nails, barbershop, hair-salon, full-aesthetic
- **Features:** Agenda, POS, Inventario, Finanzas, Control de acceso, WhatsApp webhook (WABA)
- **Monorepo:** `apps/mobile` (Expo) + `apps/web` (Next.js) + `packages/shared-schema` + `packages/tenant-config`
- **Paleta Lunaris:** gradientes, `#40E0D0` / `#00897B`
- **Estado:** v1.4.5 activo

#### 5. RepMAX Business Suite
- **Repo:** `aeom0/RepMAX` (privado)
- **Descripción:** SaaS B2B multi-tenant para tiendas de autopartes en Venezuela
- **Stack:** React Native + Expo SDK 54 + Next.js 15 + Express + PostgreSQL + Drizzle + Yarn 4 + Turborepo
- **Features:** Inventario, POS mobile, Vitrina pública por tienda (`/[slug]`), Panel web `/dashboard`, JWT auth
- **Monorepo:** `apps/mobile` + `apps/web` + `apps/server` + `packages/shared`
- **Estado:** Activo en desarrollo

#### 6. CondoApp
- **Repo:** `aeom0/condoapp` (privado)
- **Descripción:** SaaS B2B para gestión de condominios y urbanizaciones en LATAM
- **Stack:** Next.js 15 + Expo (React Native) + Express + Drizzle ORM + Supabase + Zod + Turborepo + Yarn 4
- **Modelo:** Multi-tenant — tenant = condominium (simple / multi-torre / administradora)
- **Módulos MVP:** Residentes, Cuotas/pagos doble moneda USD+Bs., Control de acceso QR, Comunicaciones, Mantenimiento, Reservas, Asambleas digitales
- **Estado:** En desarrollo

#### 7. IA Scout360
- **Repo:** `aeom0/ia-scout360` (privado)
- **Descripción:** Plataforma inteligente de scouting deportivo con análisis impulsado por IA
- **Stack:** Next.js 15 + React 19 + Expo SDK 54 + React Native 0.81.5 + Supabase + Yarn 4 + Turborepo
- **Usuarios:** Scouts, entrenadores, academias deportivas
- **Monorepo:** `apps/web` + `apps/mobile` + `packages/@scout360/shared-types/utils/config`
- **Estado:** Migración Firebase → Supabase completada ✅

#### 8. ZetaEme Enterprise Suite
- **Repo:** `aeom0/zetaeme-enterprise-suite` (privado)
- **Descripción:** Sistema empresarial completo para gestión de ventas, inventario, producción y compras de cosméticos en Venezuela
- **Stack:** Next.js 15.5.7 + React 19.2.1 + React Native 0.81.5 + Expo SDK 54 + Supabase + Turborepo + Yarn 4.9.4 + TypeScript 5.8.3
- **Apps:** admin-panel, inventory-panel, production-panel, purchases-panel, mobile-sales
- **Dominios:** `admin.zetaemecosmeticos.com`, `inventario.`, `compras.`, `central.`
- **Features destacados:** Offline Sync v2, OTA Updates, FEFO, BOM, Artículo 177 SENIAT, 161/161 tests
- **Versión actual:** 2.23.1
- **Estado:** En producción ✅

---

## 🛠 Stack por defecto ZM Tech

Salvo que el proyecto diga lo contrario:

| Capa | Default |
|------|---------|
| Framework | Next.js App Router |
| UI | React 19 + Tailwind CSS v4 |
| Lenguaje | TypeScript estricto — sin `any` implícito |
| Base de datos | Supabase (PostgreSQL + Auth + RLS) |
| ORM | Drizzle ORM (proyectos con Express) |
| Mobile | Expo SDK 54 + React Native |
| Monorepo | Turborepo + Yarn 4 (la mayoría) / pnpm (guataparobr) |
| Imágenes | Cloudinary |
| Iconos | Lucide React |
| Deploy | Vercel (web) + EAS (mobile) |

---

## 🎨 Identidad visual de la landing ZM Tech

Lenguaje técnico-industrial único (`aeom0/ZMTech`):

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

### Arquitectura
- Separación estricta de capas: UI / lógica / servicios / contexto / navegación
- Un componente = una responsabilidad (+150 líneas → dividir)
- Contenido separado de presentación — strings en `content.ts` o `tokens/`, nunca en JSX
- Mobile-first siempre — 375px como viewport de referencia
- Props siempre con interfaces nombradas en `types/index.ts`
- Sin dependencias nuevas sin confirmar con Alberto

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

## 📋 Modelo comercial ZM Tech

| Concepto | Referencia |
|----------|------------|
| Proyecto base (sitio + panel) | $300–$500 USD |
| Módulos adicionales | $40–$100 c/u |
| Soporte mensual | $30/mes |
| Pago | 50% arranque / 50% entrega |
| Soporte post-entrega | 30 días incluidos |

---

*Skill mantenido por Alberto. Actualizar al incorporar nuevos proyectos.*
*Última actualización: Abril 2026 — 9 repos, 7 proyectos activos*
