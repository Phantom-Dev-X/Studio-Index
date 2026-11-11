export type PerformanceTier = "high" | "balanced" | "low";

interface NetworkInformationLike {
  saveData?: boolean;
  effectiveType?: string;
}

type NavigatorWithHints = Navigator & {
  deviceMemory?: number;
  connection?: NetworkInformationLike;
};

function applyTier(tier: PerformanceTier): void {
  if (typeof document !== "undefined") {
    document.documentElement.dataset.perf = tier;
  }
}

export function detectInitialTier(): PerformanceTier {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return "balanced";
  }

  const nav = navigator as NavigatorWithHints;
  const reducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
  if (reducedMotion || nav.connection?.saveData) {
    return "low";
  }

  const memory = nav.deviceMemory;
  const cores = nav.hardwareConcurrency;
  const isTouchMobile =
    (window.matchMedia?.("(pointer: coarse)").matches ?? false) ||
    /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if ((memory !== undefined && memory <= 2) || (cores !== undefined && cores <= 2)) {
    return "low";
  }

  if (isTouchMobile || (memory !== undefined && memory <= 4) || (cores !== undefined && cores <= 4)) {
    return "balanced";
  }

  return "high";
}

function stepDownTier(tier: PerformanceTier): PerformanceTier {
  if (tier === "high") return "balanced";
  return "low";
}

export function initAdaptivePerformance(): void {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return;
  }

  let currentTier = detectInitialTier();
  applyTier(currentTier);

  const motionQuery = window.matchMedia?.("(prefers-reduced-motion: reduce)");
  motionQuery?.addEventListener?.("change", (event) => {
    currentTier = event.matches ? "low" : detectInitialTier();
    applyTier(currentTier);
  });

  if (currentTier === "low" || typeof requestAnimationFrame !== "function") {
    return;
  }

  // Lightweight 1.2s runtime frame check (runs once after initial paint, then stops)
  let rafId = 0;
  let startTime = 0;
  let lastFrameTime = 0;
  let frameCount = 0;
  let slowFrames = 0;
  let stopped = false;

  const stopMonitor = () => {
    stopped = true;
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = 0;
    }
  };

  const onVisibilityChange = () => {
    if (document.visibilityState !== "visible") {
      stopMonitor();
    }
  };

  document.addEventListener("visibilitychange", onVisibilityChange, { once: true });

  const sampleFrame = (now: number) => {
    if (stopped || document.visibilityState !== "visible") {
      stopMonitor();
      return;
    }

    if (startTime === 0) {
      // Skip the very first frame right after startup
      startTime = now;
      lastFrameTime = now;
      rafId = requestAnimationFrame(sampleFrame);
      return;
    }

    const delta = now - lastFrameTime;
    lastFrameTime = now;
    frameCount += 1;
    if (delta > 50) {
      slowFrames += 1;
    }

    const elapsed = now - startTime;
    if (elapsed >= 1200) {
      const avgFps = (frameCount * 1000) / elapsed;
      if (frameCount >= 18 && (avgFps < 32 || slowFrames >= 8)) {
        const nextTier = stepDownTier(currentTier);
        if (nextTier !== currentTier) {
          currentTier = nextTier;
          applyTier(currentTier);
        }
      }
      document.removeEventListener("visibilitychange", onVisibilityChange);
      stopMonitor();
      return;
    }

    rafId = requestAnimationFrame(sampleFrame);
  };

  // Start after initial mount settles
  window.setTimeout(() => {
    if (!stopped && document.visibilityState === "visible") {
      rafId = requestAnimationFrame(sampleFrame);
    }
  }, 450);
}
