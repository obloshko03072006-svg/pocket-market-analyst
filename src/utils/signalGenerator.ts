export interface Signal {
  type: 'buy' | 'sell'
  pair: string
  expiration: string
  confidence: number
  reasoning: string
  timestamp: number
}

const reasonsEn = [
  'Strong bullish momentum detected on the 15-minute timeframe with increasing volume.',
  'RSI indicates oversold conditions, suggesting a potential reversal upward.',
  'Price bounced off key support level with a strong rejection candle.',
  'Moving averages are aligning for a continued upward trend.',
  'Breakout above resistance confirmed with high volume spike.',
  'Bearish divergence detected on MACD, suggesting potential downside.',
  'Price approaching major resistance level with weakening momentum.',
  'Death cross formation on the 1-hour chart indicates bearish trend.',
  'Sustained selling pressure observed below the 50-period EMA.',
  'Failure to break through resistance led to a rejection pattern.',
]

const reasonsRu = [
  'Обнаружен сильный бычий импульс на 15-минутном таймфрейме с увеличением объема.',
  'RSI указывает на перепроданность, что предполагает потенциальный разворот вверх.',
  'Цена отскочила от ключевого уровня поддержки с сильной свечой отклонения.',
  'Скользящие средние выстраиваются для продолжения восходящего тренда.',
  'Пробой сопротивления подтвержден резким ростом объема.',
  'Обнаружена медвежья дивергенция на MACD, что предполагает потенциальное снижение.',
  'Цена приближается к основному уровню сопротивления с ослаблением импульса.',
  'Формирование «креста смерти» на 1-часовом графике указывает на медвежий тренд.',
  'Наблюдается устойчивое давление продавцов ниже EMA за 50 периодов.',
  'Неудачная попытка пробить сопротивление привела к формированию паттерна отклонения.',
]

export function generateSignal(params: { asset: string; expiration: string; lang: string }): Signal {
  const isBuy = Math.random() > 0.5
  const confidence = Math.floor(Math.random() * (95 - 75 + 1)) + 75

  const reasons = params.lang === 'ru' ? reasonsRu : reasonsEn
  const reasoning = reasons[Math.floor(Math.random() * reasons.length)]

  return {
    type: isBuy ? 'buy' : 'sell',
    pair: params.asset,
    expiration: params.expiration,
    confidence,
    reasoning,
    timestamp: Date.now(),
  }
}
