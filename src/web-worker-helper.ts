export const createWebWorker = <T extends unknown, K extends unknown>(
  inputData: T,
  processCallback: (data: T) => K,
  resultCallback: (data: K) => void,
): Worker | null => {
  if (!window?.Worker || !window?.URL?.createObjectURL || !window?.Blob) {
    return null;
  }

  const workerJS = `onmessage = function(event) {
    const result = (${processCallback.toString()})(event?.data);
    postMessage(result);
  }`;
  const blob = new window.Blob([workerJS], { type: 'text/javascript' });

  const worker = new window.Worker(window.URL.createObjectURL(blob));
  worker.onmessage = (event: MessageEvent<any>) => {
    resultCallback(event?.data);
  };

  worker.postMessage(inputData);

  return worker;
};
