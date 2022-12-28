/**
 * @summary (https://www.joshwcomeau.com/snippets/javascript/debounce/)
 * @param callback
 * @param millisecondsToWait
 * @returns
 */
export const debounce = (callback: any, millisecondsToWait: number) => {
  let timeoutId: any = null;
  return (...args: any) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback.apply(null, args);
    }, millisecondsToWait);
  };
};
