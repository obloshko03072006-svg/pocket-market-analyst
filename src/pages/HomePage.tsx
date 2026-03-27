'use client'

import { Clock, Zap, TrendingUp } from 'lucide-react'

interface HomePageProps {
  lang: string
  goSignals: () => void
}

const translations = {
  en: {
    title: 'Pocket Market Analyst',
    subtitle: 'AI-powered trading signals with real-time BUY / SELL recommendations.',
    button: 'Open Platform',
    buttonSecondary: 'Learn More',
    promo: 'Promo Code: GVW294',
    disclaimer: 'Disclaimer: Market analysis is for informational purposes only and is not financial advice.',
  },
  ru: {
    title: 'Pocket Market Analyst',
    subtitle: 'Сигналы с помощью ИИ в реальном времени (BUY / SELL).',
    button: 'Открыть платформу',
    buttonSecondary: 'Узнать больше',
    promo: 'Промокод: GVW294',
    disclaimer: 'Отказ от ответственности: анализ не является финансовой рекомендацией.',
  },
}

export default function HomePage({ lang, goSignals }: HomePageProps) {
  const t = translations[lang as keyof typeof translations] || translations.en

  return (
    <div className="relative z-10 flex min-h-screen flex-col items-center px-6 text-center">
      <div className="mt-20 max-w-5xl">
        <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">{t.title}</h1>
        <p className="mb-10 text-lg text-slate-300">{t.subtitle}</p>

        <div className="mb-4 flex gap-4 justify-center">
          <a
            href="https://u3.shortink.io/register?utm_campaign=839812&utm_source=affiliate&utm_medium=sr&a=ht9LEhjWXLwJo3&al=1744479&ac=pocketinvestor&cid=949104&code=GVW294"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3 text-white"
          >
            {t.button}
          </a>

          <button onClick={goSignals} className="rounded-full border border-slate-600 px-8 py-3 text-white">
            {t.buttonSecondary}
          </button>
        </div>

        <p className="mb-12 text-cyan-400">{t.promo}</p>
      </div>

      <div className="mb-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <Clock className="mx-auto mb-3 text-cyan-400" />
          <h3 className="font-semibold text-white">24/7</h3>
          <p className="text-sm text-slate-400">Real-time monitoring</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <Zap className="mx-auto mb-3 text-blue-400" />
          <h3 className="font-semibold text-white">AI</h3>
          <p className="text-sm text-slate-400">Smart algorithms</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <TrendingUp className="mx-auto mb-3 text-indigo-400" />
          <h3 className="font-semibold text-white">Signals</h3>
          <p className="text-sm text-slate-400">High accuracy</p>
        </div>
      </div>

      <p className="max-w-2xl text-sm text-slate-500">{t.disclaimer}</p>
    </div>
  )
}
