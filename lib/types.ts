export interface MarketData {
  id: string;
  rank: number;
  name: string;
  symbol: string;
  price: string;
  change24h: number;
  change7d: number;
  marketCap: string;
  volume: string;
}

export interface ChartData {
  name: string;
  value: number;
}

export interface CSVData {
  [key: string]: string | number;
}