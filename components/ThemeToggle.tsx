"use client"
import { useEffect, useState } from 'react'

const STORAGE_KEY = 'pref-theme'

export default function ThemeToggle() {
  const [mode, setMode] = useState<'dark' | 'light'>(() => 'dark')

  useEffect(() => {
    const stored = (typeof window !== 'undefined' && localStorage.getItem(STORAGE_KEY)) as
      | 'dark'
      | 'light'
      | null
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial: 'dark' | 'light' = stored ?? (prefersDark ? 'dark' : 'light')
    applyMode(initial)
    setMode(initial)
  }, [])

  function applyMode(next: 'dark' | 'light') {
    const root = document.documentElement
    if (next === 'dark') {
      root.classList.remove('light')
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
      root.classList.add('light')
    }
    localStorage.setItem(STORAGE_KEY, next)
  }

  function toggle() {
    const next = mode === 'dark' ? 'light' : 'dark'
    applyMode(next)
    setMode(next)
  }

  return (
    <button
      onClick={toggle}
      className="px-3 py-3 rounded-md border bg-white/10 hover:bg-white/20 border-white/15 font-medium"
      aria-label="Toggle theme"
      title={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {mode === 'dark' ? (
        // sun icon
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zM1 13h3v-2H1v2zm10 10h2v-3h-2v3zm9.66-3.34l-1.41-1.41-1.8 1.79 1.41 1.41 1.8-1.79zM20 11v2h3v-2h-3zm-8-8h2V0h-2v3zm4.24 1.76l1.79-1.8-1.41-1.41-1.8 1.79 1.42 1.42zM12 6a6 6 0 100 12 6 6 0 000-12zm0 10a4 4 0 110-8 4 4 0 010 8z"/>
        </svg>
      ) : (
        // moon icon
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.74 2.01A10 10 0 1022 12a8 8 0 01-9.26-9.99z"/>
        </svg>
      )}
    </button>
  )
}



