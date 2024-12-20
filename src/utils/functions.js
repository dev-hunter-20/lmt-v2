const CANT_CONNECT_INTERNET = "Can't connect internet";
export function fetchWithTimeOut(promise, ms = 25000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error(CANT_CONNECT_INTERNET));
    }, ms);
    promise.then(resolve, reject);
  });
}
