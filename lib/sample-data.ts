import { MarketData, ChartData } from "./types";

export const marketData: MarketData[] = [
  {
    id: "1",
    rank: 1,
    name: "Bitcoin",
    symbol: "BTC",
    price: "$60,123.45",
    change24h: 2.5,
    change7d: 5.8,
    marketCap: "$1.12T",
    volume: "$28.5B"
  },
  {
    id: "2",
    rank: 2,
    name: "Ethereum",
    symbol: "ETH",
    price: "$3,245.67",
    change24h: 1.8,
    change7d: 3.2,
    marketCap: "$386.5B",
    volume: "$15.2B"
  },
  {
    id: "3",
    rank: 3,
    name: "Binance Coin",
    symbol: "BNB",
    price: "$415.89",
    change24h: -0.5,
    change7d: 2.1,
    marketCap: "$64.8B",
    volume: "$2.1B"
  },
  {
    id: "4",
    rank: 4,
    name: "Solana",
    symbol: "SOL",
    price: "$124.56",
    change24h: 3.2,
    change7d: 8.4,
    marketCap: "$48.7B",
    volume: "$3.6B"
  },
  {
    id: "5",
    rank: 5,
    name: "Cardano",
    symbol: "ADA",
    price: "$0.58",
    change24h: -1.2,
    change7d: -4.3,
    marketCap: "$18.9B",
    volume: "$925M"
  },
  {
    id: "6",
    rank: 6,
    name: "XRP",
    symbol: "XRP",
    price: "$0.52",
    change24h: -0.8,
    change7d: -2.5,
    marketCap: "$26.3B",
    volume: "$1.4B"
  },
  {
    id: "7",
    rank: 7,
    name: "Polkadot",
    symbol: "DOT",
    price: "$7.41",
    change24h: 1.5,
    change7d: -1.2,
    marketCap: "$8.9B",
    volume: "$345M"
  },
  {
    id: "8",
    rank: 8,
    name: "Dogecoin",
    symbol: "DOGE",
    price: "$0.082",
    change24h: 4.7,
    change7d: 12.5,
    marketCap: "$11.2B",
    volume: "$1.8B"
  },
  {
    id: "9",
    rank: 9,
    name: "Avalanche",
    symbol: "AVAX",
    price: "$28.75",
    change24h: 2.3,
    change7d: 5.7,
    marketCap: "$9.6B",
    volume: "$612M"
  },
  {
    id: "10",
    rank: 10,
    name: "Chainlink",
    symbol: "LINK",
    price: "$14.23",
    change24h: 1.9,
    change7d: 3.8,
    marketCap: "$7.3B",
    volume: "$485M"
  },
  {
    id: "11",
    rank: 11,
    name: "Polygon",
    symbol: "MATIC",
    price: "$0.79",
    change24h: -1.3,
    change7d: -3.2,
    marketCap: "$7.1B",
    volume: "$412M"
  },
  {
    id: "12",
    rank: 12,
    name: "Litecoin",
    symbol: "LTC",
    price: "$76.35",
    change24h: 0.5,
    change7d: 1.2,
    marketCap: "$5.6B",
    volume: "$380M"
  },
  {
    id: "13",
    rank: 13,
    name: "Tron",
    symbol: "TRX",
    price: "$0.097",
    change24h: 0.2,
    change7d: 1.4,
    marketCap: "$8.7B",
    volume: "$420M"
  },
  {
    id: "14",
    rank: 14,
    name: "Stellar",
    symbol: "XLM",
    price: "$0.105",
    change24h: -0.9,
    change7d: -2.1,
    marketCap: "$2.8B",
    volume: "$122M"
  },
  {
    id: "15",
    rank: 15,
    name: "Uniswap",
    symbol: "UNI",
    price: "$7.32",
    change24h: 2.1,
    change7d: 4.5,
    marketCap: "$4.2B",
    volume: "$310M"
  },
  {
    id: "16",
    rank: 16,
    name: "Cosmos",
    symbol: "ATOM",
    price: "$9.83",
    change24h: 1.3,
    change7d: 3.7,
    marketCap: "$3.4B",
    volume: "$198M"
  },
  {
    id: "17",
    rank: 17,
    name: "Monero",
    symbol: "XMR",
    price: "$143.25",
    change24h: 0.7,
    change7d: 2.6,
    marketCap: "$2.6B",
    volume: "$87M"
  },
  {
    id: "18",
    rank: 18,
    name: "Algorand",
    symbol: "ALGO",
    price: "$0.173",
    change24h: -0.5,
    change7d: -1.8,
    marketCap: "$1.3B",
    volume: "$68M"
  },
  {
    id: "19",
    rank: 19,
    name: "VeChain",
    symbol: "VET",
    price: "$0.027",
    change24h: 1.2,
    change7d: 2.9,
    marketCap: "$1.9B",
    volume: "$85M"
  },
  {
    id: "20",
    rank: 20,
    name: "Tezos",
    symbol: "XTZ",
    price: "$1.05",
    change24h: -0.4,
    change7d: -1.5,
    marketCap: "$1.0B",
    volume: "$42M"
  }
];

export const lineChartData = [
  { name: "Jan", value: 10 },
  { name: "Feb", value: 15 },
  { name: "Mar", value: 12 },
  { name: "Apr", value: 18 },
  { name: "May", value: 22 },
  { name: "Jun", value: 20 },
  { name: "Jul", value: 25 },
  { name: "Aug", value: 28 },
  { name: "Sep", value: 30 },
  { name: "Oct", value: 32 },
  { name: "Nov", value: 35 },
  { name: "Dec", value: 40 }
];

export const barChartData = [
  { name: "Category A", value: 35 },
  { name: "Category B", value: 55 },
  { name: "Category C", value: 20 },
  { name: "Category D", value: 45 },
  { name: "Category E", value: 30 }
];

export const pieChartData: ChartData[] = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 100 }
];