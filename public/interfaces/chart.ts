export interface IChartStyle {
  water: string
  electricity: string
  gas: string
  default: string
  [key: string]: string
}

declare type TChartDataPoint = [string, number];

interface IElectricityData {
  'electricity': TChartDataPoint[]
}

interface IGasData {
  'gas': TChartDataPoint[]
}

interface IWaterData {
  'water': TChartDataPoint[]
}

type TChartDataItem = (IElectricityData | IGasData | IWaterData) & {[key: string]: string};

export type TChartData = TChartDataItem[];
