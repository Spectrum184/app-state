export const DEBOUNCE_TIME = 300; //ms

export const debounce = (fn) => {
  let timerId;
  return () => {
    if (timerId) {
      clearTimeout(timerId);
      timerId = null;
    }

    timerId = setTimeout(() => fn(), DEBOUNCE_TIME);
  };
};
