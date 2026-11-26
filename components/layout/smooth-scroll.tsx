"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "lenis/react";

import { ScrollToTop } from "@/components/scroll-to-top";

function ScrollToTopOnRoute() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (window.location.hash) return;
    if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
    else window.scrollTo(0, 0);
  }, [pathname, lenis]);

  return null;
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, anchors: true }}>
      {children}
      <ScrollToTopOnRoute />
      <ScrollToTop />
    </ReactLenis>
  );
}
