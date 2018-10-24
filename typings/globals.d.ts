declare module '*.svg' {
  const image: string;
  export default image;
}

interface IDictionary<T> {
  [key: string]: T
}

declare type Booleanum = 0 | 1;
