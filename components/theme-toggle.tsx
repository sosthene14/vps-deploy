'use client'

import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const saved = window.localStorage.getItem('link-bio-theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const dark = saved ? saved === 'dark' : prefersDark
    document.documentElement.classList.toggle('dark', dark)
    setIsDark(dark)
  }, [])

  function toggleTheme() {
    const next = !isDark
    document.documentElement.classList.toggle('dark', next)
    window.localStorage.setItem('link-bio-theme', next ? 'dark' : 'light')
    setIsDark(next)
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={isDark ? 'Activer le mode clair' : 'Activer le mode sombre'}
    >
      {isDark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
    </button>
  )
}
