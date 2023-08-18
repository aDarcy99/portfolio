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

/**
 * @summary Returns true if the value parameter is undefined or null
 * @param value
 * @returns
 */
export const isNil = (value: any) => {
  if (value === undefined || value === null) {
    return true;
  } else {
    return false;
  }
};
