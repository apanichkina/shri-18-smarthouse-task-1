import {TChartData} from './chart';

export interface IIndicatorDataMeta {
  temperature: string
  humidity: string
  [key: string]: string
}

export interface IIndicatorData {
  temperature: number
  humidity: number
  [key: string]: number
}

export interface IIndicatorValue {
  key: string
  value: number
}

export interface ICardDataGraph {
  type: string
  values: TChartData
}

interface ICardDataTrack {
  name: string,
  length: string
}

export interface ICardDataMusic {
  albumcover: string
  artist: string
  track: ICardDataTrack
  volume: number
}

export interface ICardDataButtons {
  buttons: string[]
}

export interface ICardDataCamera {
  image: string
}

export type TCardData = ICardDataGraph | IIndicatorData | ICardDataMusic | ICardDataButtons | ICardDataCamera;

export interface ICardContent {
  type: string
  title: string
  icon: string
  source: string
  time: string
  description: string | null
  data?: TCardData
  size: string
}
