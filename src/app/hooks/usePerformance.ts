"use client";

import { useEffect, useState } from "react";

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  isSlowDevice: boolean;
  connectionType: string;
}

export function usePerformance() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    isSlowDevice: false,
    connectionType: "unknown",
  });

  useEffect(() => {
    // Detect slow devices
    const detectSlowDevice = () => {
      try {
        const canvas = document.createElement("canvas");
        const gl =
          canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

        if (!gl) return true;

        const webglContext = gl as WebGLRenderingContext;
        const debugInfo = webglContext.getExtension(
          "WEBGL_debug_renderer_info"
        );
        const renderer = debugInfo
          ? webglContext.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
          : "";

        // Basic heuristics for slow devices
        const slowGPUs = ["mali", "adreno 3", "adreno 4", "powerVR SGX"];
        return slowGPUs.some((gpu) =>
          String(renderer).toLowerCase().includes(gpu)
        );
      } catch {
        // If WebGL detection fails, assume it's a slow device
        return true;
      }
    };

    // Get connection info
    const getConnectionType = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const nav = navigator as any;
      const connection =
        nav.connection || nav.mozConnection || nav.webkitConnection;
      if (!connection) return "unknown";

      if (connection.effectiveType) {
        return connection.effectiveType;
      }

      if (connection.type) {
        return connection.type;
      }

      return "unknown";
    };

    // Measure performance
    const measurePerformance = () => {
      const loadTime = performance.now();

      // Use requestIdleCallback if available
      if ("requestIdleCallback" in window) {
        requestIdleCallback(() => {
          const renderTime = performance.now() - loadTime;

          setMetrics({
            loadTime,
            renderTime,
            isSlowDevice: detectSlowDevice(),
            connectionType: getConnectionType(),
          });
        });
      } else {
        setTimeout(() => {
          const renderTime = performance.now() - loadTime;

          setMetrics({
            loadTime,
            renderTime,
            isSlowDevice: detectSlowDevice(),
            connectionType: getConnectionType(),
          });
        }, 0);
      }
    };

    measurePerformance();
  }, []);

  return metrics;
}

// Hook for adaptive loading based on device capabilities
export function useAdaptiveLoading() {
  const metrics = usePerformance();

  const shouldReduceAnimations =
    metrics.isSlowDevice ||
    metrics.connectionType === "slow-2g" ||
    metrics.connectionType === "2g";

  const shouldLazyLoad =
    metrics.isSlowDevice ||
    metrics.connectionType === "slow-2g" ||
    metrics.connectionType === "2g" ||
    metrics.connectionType === "3g";

  const imageQuality = metrics.isSlowDevice ? "low" : "high";

  return {
    shouldReduceAnimations,
    shouldLazyLoad,
    imageQuality,
    ...metrics,
  };
}
