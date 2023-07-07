import { useCallback, useRef } from 'react';

const useDebounce = (callback, delay = 500) => {
    const timer = useRef();

    const debouncedCallback = useCallback(
        (...args) => {
            return new Promise((resolve, reject) => {
                if (timer.current) {
                    clearTimeout(timer.current);
                }
                timer.current = setTimeout(() => {
                    callback(...args)
                        .then(resolve)
                        .catch(reject);
                }, delay);
            });
        },
        [callback, delay],
    );

    return debouncedCallback;
};

export { useDebounce };
