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
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[var(--bg)]/70">
      <nav className="container-xl py-3 flex items-center gap-3 relative">
        <a href="#top" className="shrink-0 inline-flex items-center gap-2 px-2 py-1 rounded-md">
          <span className="inline-flex items-center justify-center h-8 w-8 rounded-full border border-white/30 overflow-hidden">
            <Image src={logo} alt="Logo" width={28} height={28} className="object-contain" />
          </span>
          <span className="text-base sm:text-xl font-semibold tracking-tight">Portfolio</span>
        </a>
        
        {/* Desktop navigation - hidden below 1070px */}
        <ul className="hidden min-[1070px]:grid grid-flow-col auto-cols-fr gap-2 flex-1">
          {tabs.map((t) => {
            const isActive = active === t.id
            return (
              <li key={t.id}>
                <a
                  href={t.href}
                  className={[
                    'block text-center rounded-md border transition select-none',
                    'px-4 py-3',
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

        {/* Mobile hamburger menu button - visible below 1070px */}
        <div className="flex items-center gap-3 flex-1 min-[1070px]:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="ml-auto flex flex-col gap-1.5 p-2 rounded-md bg-white/10 hover:bg-white/20 transition"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile dropdown menu card - visible below 1070px */}
        {isMenuOpen && (
          <div className="absolute top-full right-4 min-[1070px]:hidden w-[275px]">
            <div className="mt-4">
              <div className="rounded-xl border border-white/10 bg-[var(--card)] p-5 transition duration-300 shadow-xl shadow-green-500/20">
                <ul className="flex flex-col gap-2">
                  {tabs.map((t) => {
                    const isActive = active === t.id
                    return (
                      <li key={t.id}>
                        <a
                          href={t.href}
                          onClick={handleLinkClick}
                          className={[
                            'block text-center rounded-md border transition select-none',
                            'px-4 py-3',
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
              </div>
            </div>
          </div>
        )}

        <ThemeToggle />
      </nav>
    </div>
  )
}


