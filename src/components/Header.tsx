'use client'

import { useLanguage } from '../contexts/LanguageContext'

interface HeaderProps {
  currentPage: 'home' | 'signals'
  goHome: () => void
  goSignals: () => void
}

export default function Header({ currentPage, goHome, goSignals }: HeaderProps) {
  const { lang, switchLanguage } = useLanguage()

  return (
    <header className="relative z-20 flex flex-wrap items-center justify-between gap-4 p-6">
      <div onClick={goHome} className="flex cursor-pointer items-center space-x-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600">
          <span className="text-lg font-bold text-white">P</span>
        </div>
        <div className="text-xl font-bold text-white">Pocket Market Analyst</div>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center space-x-2 rounded-full border border-slate-800 bg-slate-900/80 px-2 py-1.5 backdrop-blur-sm">
          <button
            onClick={goHome}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              currentPage === 'home'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Home
          </button>

          <button
            onClick={goSignals}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              currentPage === 'signals'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Signals
          </button>
        </div>

        <div className="flex items-center space-x-2 rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1.5 backdrop-blur-sm">
          <span className="text-sm text-slate-400">Language:</span>
          <button
            onClick={() => switchLanguage('en')}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
              lang === 'en'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => switchLanguage('ru')}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
              lang === 'ru'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            RU
          </button>
        </div>
      </div>
    </header>
  )
}
