// components/MetaPixel.tsx
"use client"; // if using app router

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    fbq: any;
  }
}

function MetaPixelContent({ pixelId }: { pixelId: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Initialize pixel
    import("react-facebook-pixel")
      .then((module) => module.default)
      .then((ReactPixel) => {
        ReactPixel.init(pixelId);
        ReactPixel.pageView();
      });
  }, [pixelId]);

  useEffect(() => {
    // Track route changes
    if (window.fbq) {
      window.fbq("track", "PageView");
    }
  }, [pathname, searchParams]);

  return null;
}

export default function MetaPixel({ pixelId }: { pixelId: string }) {
  return (
    <Suspense fallback={null}>
      <MetaPixelContent pixelId={pixelId} />
    </Suspense>
  );
}
