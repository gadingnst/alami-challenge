import { useRef, useState, useCallback } from 'react';

function useLoader() {
  const refIntervalId = useRef<number>(0);
  const [isLoading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const stop = useCallback(() => {
    if (isLoading) {
      setLoading(false);
      clearInterval(refIntervalId.current);
      refIntervalId.current = 0;
    }
  }, [isLoading]);

  const doProgress = useCallback(
    (value = 1) => {
      setProgress(current => {
        if (current >= 100) {
          stop();
          return current;
        }
        return current + value;
      });
    },
    [stop]
  );

  const start = useCallback(() => {
    if (!isLoading) {
      setLoading(true);
      const newIntervalId = setInterval(doProgress, 50);
      refIntervalId.current = newIntervalId;
    }
  }, [doProgress, isLoading]);

  const restart = useCallback(() => {
    setProgress(0);
    start();
  }, [start]);

  return {
    progress,
    isLoading,
    start,
    stop,
    restart
  };
}

export default useLoader;
