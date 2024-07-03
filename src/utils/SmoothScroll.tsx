import Lenis from "lenis";
import { ReactNode, useEffect, useMemo } from "react";
import { useIsLoading } from "../stores/LoadingStore";

const SmoothScroll = ({ children }: { children: ReactNode }) => {
  const lenis = useMemo(
    () =>
      new Lenis({
        duration: 1.3,
      }),
    []
  );
  const isLoading = useIsLoading();

  useEffect(() => {
    if (isLoading) lenis.stop();
    else lenis.start();
  }, [isLoading, lenis]);

  useEffect(() => {
    const raf = (cb: any) => {
      lenis.raf(cb);
      requestAnimationFrame(raf);

      return 0;
    };

    requestAnimationFrame(raf);
  }, []);

  return children;
};

export default SmoothScroll;
