'use client'

import SignalGenerator from '../components/SignalGenerator'

interface SignalPageProps {
  lang: string
}

const text = {
  en: {
    badge: 'Pocket Market Analyst',
    title: 'AI-Powered Market Signal Dashboard',
    subtitle:
      'Generate premium BUY or SELL recommendations across forex, crypto, commodities, stocks, and indices using our AI-style signal engine.',
  },
  ru: {
    badge: 'Pocket Market Analyst',
    title: 'AI-панель рыночных сигналов',
    subtitle:
      'Получайте premium-рекомендации BUY или SELL по forex, crypto, commodities, stocks и indices с помощью AI-движка сигналов.',
  },
} as const

export default function SignalPage({ lang }: SignalPageProps) {
  const locale = lang === 'ru' ? 'ru' : 'en'
  const t = text[locale]

  return (
    <section className="relative overflow-hidden px-4 pb-12 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-1 text-sm font-medium text-cyan-300">
            {t.badge}
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">{t.title}</h1>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-lg">{t.subtitle}</p>
        </div>

        <SignalGenerator lang={lang} />
      </div>
    </section>
  )
}
