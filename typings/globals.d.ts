declare module '*.svg' {
  const image: string;
  export default image;
}

declare module '*.json' {
  const value: any;
  export default value;
}

interface IDictionary<T> {
  [key: string]: T
}

declare type Booleanum = 0 | 1;

declare const Hls: any;

// tslint:disable-next-line
interface ElementWithDataset extends Element {
  dataset: any;
}
