"use client";

import { ReactLenis } from "lenis/react";
import { MotionConfig } from "motion/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ autoRaf: true, lerp: 0.1, anchors: { offset: -72 } }}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </ReactLenis>
  );
}
