## Web Worker Helper

Developed to use web workers easier.

![npm](https://img.shields.io/npm/v/@mertsolak/web-worker-helper)
![license](https://img.shields.io/npm/l/@mertsolak/web-worker-helper)
![size](https://img.shields.io/bundlephobia/min/@mertsolak/web-worker-helper)
![issue](https://img.shields.io/github/issues/mert-solak/web-worker-helper)

## Installation

Use node package manager to install @mertsolak/web-worker-helper.

```bash
npm i @mertsolak/web-worker-helper
```

## Basic Usage

```typescript
// callback that processes the data
const add = (rawData: number[]) => {
  return rawData[0] + rawData[1];
};

// callback that gets the result as a parameter.
const getResult = (result: number) => {
  console.log(result);
};

createWebWorker([1, 2], add, getResult);
```
