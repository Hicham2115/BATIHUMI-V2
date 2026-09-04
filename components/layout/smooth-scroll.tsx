"use client";

import { ReactLenis } from "lenis/react";

import { ScrollToTop } from "@/components/scroll-to-top";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, anchors: true }}>
      {children}
      <ScrollToTop />
    </ReactLenis>
  );
}
