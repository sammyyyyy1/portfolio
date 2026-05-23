import "@testing-library/jest-dom/vitest";
import React from "react";
import { vi } from "vitest";

vi.mock("next/font/google", () => ({
  Geist: () => ({ variable: "--font-geist-sans" }),
  Geist_Mono: () => ({ variable: "--font-geist-mono" }),
  Cormorant_Garamond: () => ({ variable: "--font-display" }),
}));

vi.mock("framer-motion", () => {
  type MotionElementProps = React.HTMLAttributes<HTMLElement> & {
    children?: React.ReactNode;
    animate?: unknown;
    exit?: unknown;
    initial?: unknown;
    layout?: unknown;
    transition?: unknown;
    variants?: unknown;
    viewport?: unknown;
    whileHover?: unknown;
    whileInView?: unknown;
    whileTap?: unknown;
  };

  const motionProps = new Set([
    "animate",
    "exit",
    "initial",
    "layout",
    "transition",
    "variants",
    "viewport",
    "whileHover",
    "whileInView",
    "whileTap",
  ]);

  const make = (tag: string) => {
    const component = React.forwardRef<HTMLElement, MotionElementProps>(
      ({ children, ...props }, ref) => {
        const domProps = Object.fromEntries(
          Object.entries(props).filter(([key]) => !motionProps.has(key)),
        );

        return React.createElement(tag, { ref, ...domProps }, children);
      },
    );

    component.displayName = `motion.${tag}`;

    return component;
  };

  return {
    motion: new Proxy(
      {},
      {
        get: (_, tag: string) => make(tag),
      },
    ),
    AnimatePresence: ({ children }: { children: React.ReactNode }) =>
      React.createElement(React.Fragment, null, children),
  };
});
