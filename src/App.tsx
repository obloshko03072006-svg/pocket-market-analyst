'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import Header from './components/Header'
import BackgroundChart from './components/BackgroundChart'
import HomePage from './pages/HomePage'
import SignalPage from './pages/SignalPage'
import { LanguageContext } from './contexts/LanguageContext'

export default function AppShell({ forcedPage }: { forcedPage: 'home' | 'signals' }) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [lang, setLang] = useState<string>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const urlLang = searchParams ? searchParams.get('lang') : null

    if (urlLang === 'ru' || urlLang === 'en') {
      setLang(urlLang)
      try {
        localStorage.setItem('lang', urlLang)
      } catch {}
    } else {
      try {
        const savedLang = localStorage.getItem('lang')
        if (savedLang === 'ru' || savedLang === 'en') {
          setLang(savedLang)
        } else {
          setLang('en')
          localStorage.setItem('lang', 'en')
        }
      } catch {
        setLang('en')
      }
    }

    setMounted(true)
  }, [searchParams])

  const switchLanguage = (newLang: string) => {
    setLang(newLang)
    try {
      localStorage.setItem('lang', newLang)
    } catch {}

    const params = new URLSearchParams(searchParams.toString())
    params.set('lang', newLang)
    router.replace(`${pathname}?${params.toString()}`)
  }

  const goHome = () => {
    const params = new URLSearchParams(searchParams.toString())
    router.push(`/${params.toString() ? `?${params.toString()}` : ''}`)
  }

  const goSignals = () => {
    const params = new URLSearchParams(searchParams.toString())
    router.push(`/signals${params.toString() ? `?${params.toString()}` : ''}`)
  }

  return (
    <LanguageContext.Provider value={{ lang, switchLanguage }}>
      <div className="relative min-h-screen bg-slate-950">
        <Header currentPage={forcedPage} goHome={goHome} goSignals={goSignals} />
        <BackgroundChart />
        {mounted ? forcedPage === 'home' ? <HomePage lang={lang} goSignals={goSignals} /> : <SignalPage lang={lang} /> : null}
      </div>
    </LanguageContext.Provider>
  )
}
