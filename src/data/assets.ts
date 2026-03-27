export type AssetCategory =
  | 'forex'
  | 'crypto'
  | 'commodities'
  | 'stocks'
  | 'indices'

export const assets: Record<AssetCategory, string[]> = {
  forex: [
    'AUD/NZD OTC','CAD/CHF OTC','CHF/JPY OTC','EUR/USD OTC','GBP/AUD OTC','OMR/CNY OTC',
    'USD/BRL OTC','USD/CLP OTC','USD/MXN OTC','USD/PKR OTC','EUR/USD','EUR/AUD','USD/DZD OTC',
    'EUR/JPY OTC','KES/USD OTC','USD/CAD','USD/RUB OTC','AUD/CAD','CAD/CHF','EUR/CAD',
    'EUR/CHF','EUR/HUF OTC','UAH/USD OTC','USD/COP OTC','EUR/NZD OTC','EUR/TRY OTC',
    'USD/CNH OTC','AUD/JPY','GBP/JPY OTC','USD/CHF OTC','USD/JPY','USD/PHP OTC',
    'GBP/CAD','GBP/USD OTC','USD/MYR OTC','GBP/AUD','USD/ARS OTC','AUD/USD OTC',
    'GBP/USD','USD/SGD OTC','AED/CNY OTC','USD/CAD OTC','AUD/CHF','NZD/JPY OTC',
    'TND/USD OTC','EUR/GBP OTC','GBP/JPY','CAD/JPY','MAD/USD OTC','QAR/CNY OTC',
    'AUD/USD','CHF/NOK OTC','USD/JPY OTC','YER/USD OTC','JOD/CNY OTC','BHD/CNY OTC',
    'LBP/USD OTC','EUR/GBP','NGN/USD OTC','SAR/CNY OTC','USD/THB OTC','CHF/JPY',
    'USD/EGP OTC','USD/IDR OTC','AUD/CAD OTC','USD/BDT OTC','EUR/CHF OTC',
    'NZD/USD OTC','GBP/CHF','EUR/RUB OTC','USD/CHF','AUD/JPY OTC'
  ],
  crypto: [
    'Polkadot OTC','Solana OTC','Bitcoin ETF OTC','Polygon OTC','Dogecoin OTC',
    'Bitcoin OTC','Chainlink OTC','Litecoin OTC','Ethereum OTC','Avalanche OTC',
    'BNB OTC','TRON OTC','Cardano OTC'
  ],
  commodities: [
    'Brent Oil OTC','WTI Crude Oil OTC','Gold OTC','Natural Gas OTC',
    'Palladium spot OTC','Platinum spot OTC'
  ],
  stocks: [
    "McDonald's OTC","Tesla OTC","Advanced Micro Devices OTC","Amazon OTC",
    'GameStop Corp OTC','Cisco OTC','Alibaba OTC','Netflix OTC','Apple OTC',
    'Intel OTC','Citigroup Inc OTC','Palantir Technologies OTC','VIX OTC',
    'Boeing Company OTC','Marathon Digital Holdings OTC','FedEx OTC',
    'VISA OTC','American Express OTC','ExxonMobil OTC','FACEBOOK INC OTC',
    'Johnson & Johnson OTC','Coinbase Global OTC'
  ],
  indices: [
    'US100 OTC','SMI 20','SP500','SP500 OTC'
  ]
}

export const expirationOptions = ['S3', 'S15', 'S30', 'M1', 'M3', 'M5', 'M30', 'H1', 'H4']
