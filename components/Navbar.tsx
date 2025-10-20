"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import ThemeToggle from '@/components/ThemeToggle'
import logo from '../images/logo.png'

const tabs = [
  { id: 'home', label: 'Home', href: '#top' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'planned', label: 'Planned', href: '#planned' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'certificates', label: 'Certificates', href: '#certificates' },
  { id: 'contact', label: 'Contact Us', href: '#contact' }
]

export default function Navbar() {
  const [active, setActive] = useState<string>('home')

  useEffect(() => {
    const sectionIds = ['top', 'projects', 'planned', 'skills', 'education', 'certificates', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) {
          const id = visible.target.id
          setActive(id === 'top' ? 'home' : id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0.2, 0.6, 1] }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[var(--bg)]/70">
      <nav className="container-xl py-3 flex items-center gap-3">
        <a href="#top" className="shrink-0 inline-flex items-center gap-2 px-2 py-1 rounded-md">
          <span className="inline-flex items-center justify-center h-8 w-8 rounded-full border border-white/30 overflow-hidden">
            <Image src={logo} alt="Logo" width={28} height={28} className="object-contain" />
          </span>
          <span className="text-base sm:text-xl font-semibold tracking-tight">Portfolio</span>
        </a>
        <ul className="grid grid-flow-col auto-cols-fr gap-2 flex-1">
          {tabs.map((t) => {
            const isActive = active === t.id
            return (
              <li key={t.id}>
                <a
                  href={t.href}
                  className={[
                    'block text-center rounded-md border transition select-none',
                    'px-4 py-3', // square-ish tabs
                    isActive
                      ? 'bg-accent border-transparent text-white'
                      : 'bg-white/10 border-white/15 hover:bg-white/20'
                  ].join(' ')}
                >
                  {t.label}
                </a>
              </li>
            )
          })}
        </ul>
        <ThemeToggle />
      </nav>
    </div>
  )
}


