'use client'

import { useState } from 'react'
import { Zap, ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { generateSignal, Signal } from '../utils/signalGenerator'
import { assets, expirationOptions, AssetCategory } from '../data/assets'

interface SignalGeneratorProps {
  lang: string
}

const text = {
  en: {
    setupTitle: 'Signal Setup',
    setupSubtitle: 'Choose market parameters',
    category: 'Category',
    asset: 'Asset',
    expiration: 'Expiration',
    selectAsset: 'Select asset',
    generate: 'Generate Signal',
    generateAgain: 'Generate Again',
    generating: 'Analyzing...',
    recommendation: 'AI Recommendation',
    empty: 'No signal yet. Select an asset and expiration, then generate a signal.',
    confidence: 'Confidence',
    insight: 'AI Insight',
    updated: 'Updated',
    expirationLabel: 'Expiration',
    buyHint: 'Buy recommended',
    sellHint: 'Sell recommended',
    lastSignal: 'Last signal just generated',
    categories: {
      forex: 'Forex',
      crypto: 'Crypto',
      commodities: 'Commodities',
      stocks: 'Stocks',
      indices: 'Indices',
    },
  },
  ru: {
    setupTitle: 'Параметры сигнала',
    setupSubtitle: 'Выберите параметры рынка',
    category: 'Категория',
    asset: 'Актив',
    expiration: 'Экспирация',
    selectAsset: 'Выберите актив',
    generate: 'Сгенерировать сигнал',
    generateAgain: 'Сгенерировать снова',
    generating: 'Анализ...',
    recommendation: 'AI Рекомендация',
    empty: 'Сигнал пока не создан. Выберите актив и экспирацию, затем сгенерируйте сигнал.',
    confidence: 'Уверенность',
    insight: 'AI анализ',
    updated: 'Обновлено',
    expirationLabel: 'Экспирация',
    buyHint: 'Рекомендована покупка',
    sellHint: 'Рекомендована продажа',
    lastSignal: 'Последний сигнал только что создан',
    categories: {
      forex: 'Форекс',
      crypto: 'Крипто',
      commodities: 'Сырьё',
      stocks: 'Акции',
      indices: 'Индексы',
    },
  },
} as const

export default function SignalGenerator({ lang }: SignalGeneratorProps) {
  const locale = lang === 'ru' ? 'ru' : 'en'
  const t = text[locale]

  const [category, setCategory] = useState<AssetCategory>('forex')
  const [asset, setAsset] = useState('')
  const [expiration, setExpiration] = useState('')
  const [currentSignal, setCurrentSignal] = useState<Signal | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerateSignal = () => {
    if (!asset || !expiration) return

    setIsGenerating(true)

    setTimeout(() => {
      const newSignal = generateSignal({
        asset,
        expiration,
        lang: locale,
      })

      setCurrentSignal(newSignal)
      setIsGenerating(false)
    }, 1200 + Math.random() * 1000)
  }

  const isBuy = currentSignal?.type === 'buy'

  return (
    <div className="grid gap-6 lg:grid-cols-[420px,1fr]">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 backdrop-blur-sm">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-white">{t.setupTitle}</h2>
          <p className="mt-1 text-sm text-slate-400">{t.setupSubtitle}</p>
        </div>

        <div className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">{t.category}</label>
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value as AssetCategory)
                setAsset('')
              }}
              className="w-full rounded-2xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
            >
              {Object.entries(t.categories).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">{t.asset}</label>
            <select
              value={asset}
              onChange={(e) => setAsset(e.target.value)}
              className="w-full rounded-2xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-cyan-400"
            >
              <option value="">{t.selectAsset}</option>
              {assets[category].map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-3 block text-sm font-medium text-slate-300">{t.expiration}</label>
            <div className="grid grid-cols-3 gap-2">
              {expirationOptions.map((item) => {
                const active = expiration === item
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setExpiration(item)}
                    className={[
                      'rounded-2xl border px-3 py-3 text-sm font-semibold transition',
                      active
                        ? 'border-cyan-400 bg-cyan-500/15 text-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.18)]'
                        : 'border-slate-700 bg-slate-800 text-slate-300 hover:border-slate-500 hover:text-white',
                    ].join(' ')}
                  >
                    {item}
                  </button>
                )
              })}
            </div>
          </div>

          <button
            onClick={handleGenerateSignal}
            disabled={!asset || !expiration || isGenerating}
            className="w-full rounded-2xl bg-cyan-500 py-6 text-base font-semibold text-slate-950 hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isGenerating ? (
              <span className="flex items-center justify-center gap-2">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-slate-950 border-t-transparent" />
                {t.generating}
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <Zap className="h-4 w-4" />
                {currentSignal ? t.generateAgain : t.generate}
              </span>
            )}
          </button>
        </div>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 backdrop-blur-sm">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-sm uppercase tracking-[0.24em] text-slate-400">Live Signal</div>
            <h2 className="mt-2 text-2xl font-bold text-white">{t.recommendation}</h2>
            {currentSignal && (
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-cyan-400">{t.lastSignal}</div>
            )}
          </div>

          {currentSignal && (
            <div className="text-right">
              <div className="text-sm text-slate-400">{t.confidence}</div>
              <div className="mt-1 text-5xl font-extrabold text-cyan-400">{currentSignal.confidence}%</div>
            </div>
          )}
        </div>

        {!currentSignal ? (
          <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-800/40 p-6 text-slate-400">{t.empty}</div>
        ) : (
          <>
            <div
              className={[
                'mt-6 rounded-3xl border p-6 transition-all duration-300',
                isBuy
                  ? 'border-emerald-400/60 bg-emerald-500/10 shadow-[0_0_32px_rgba(16,185,129,0.22)]'
                  : 'border-red-400/60 bg-red-500/10 shadow-[0_0_32px_rgba(239,68,68,0.22)]',
              ].join(' ')}
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div
                    className={[
                      'flex items-center gap-3 text-5xl font-black tracking-wide',
                      isBuy ? 'text-emerald-400' : 'text-red-400',
                    ].join(' ')}
                  >
                    {isBuy ? <ArrowUpRight className="h-10 w-10" /> : <ArrowDownRight className="h-10 w-10" />}
                    {currentSignal.type.toUpperCase()}
                  </div>
                  <div className="mt-3 text-xl font-semibold text-white">{currentSignal.pair}</div>
                  <div className="mt-1 text-sm text-slate-300">
                    {t.expirationLabel}: {currentSignal.expiration}
                  </div>
                </div>

                <div
                  className={[
                    'rounded-2xl px-4 py-3 text-sm font-semibold',
                    isBuy ? 'bg-emerald-500/15 text-emerald-300' : 'bg-red-500/15 text-red-300',
                  ].join(' ')}
                >
                  {isBuy ? t.buyHint : t.sellHint}
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-3xl border border-slate-700 bg-slate-800/50 p-5">
              <div className="text-sm font-medium text-slate-400">{t.insight}</div>
              <p className="mt-3 text-base leading-7 text-slate-200">{currentSignal.reasoning}</p>
            </div>

            <div className="mt-5 text-sm text-slate-400">
              {t.updated}: {new Date(currentSignal.timestamp).toLocaleString(locale === 'ru' ? 'ru-RU' : 'en-US')}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
