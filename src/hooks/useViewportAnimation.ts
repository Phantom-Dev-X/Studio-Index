import { useEffect, useRef } from "react";

let sharedObserver: IntersectionObserver | null = null;

function getSharedObserver(): IntersectionObserver | null {
  if (typeof IntersectionObserver === "undefined") {
    return null;
  }

  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          el.dataset.animPaused = entry.isIntersecting ? "false" : "true";
        }
      },
      { rootMargin: "180px 0px", threshold: 0 }
    );
  }

  return sharedObserver;
}

export function useViewportAnimation<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = getSharedObserver();
    if (!observer) return;

    observer.observe(el);
    return () => {
      observer.unobserve(el);
    };
  }, []);

  return ref;
}
