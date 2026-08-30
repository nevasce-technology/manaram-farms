import type { ReactNode } from "react";

/**
 * Lifts the first post-hero section into the pinned mist so the handoff reads as
 * one continuous cloud floor, not a stacked seam. (Samaya Holidays pattern,
 * dissolving into the white Welcome floor.)
 */
export default function CloudRiser({ children }: { children: ReactNode }) {
  return (
    <div className="cloud-riser relative z-10 -mt-[22vh] bg-white pt-[22vh]">
      <div
        className="cloud-fringe pointer-events-none absolute inset-x-0 top-0 z-10 h-[48vh] -translate-y-[58%]"
        aria-hidden
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, #000 18%, #000 62%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, #000 18%, #000 62%, transparent 100%)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgb(255 255 255 / 0.4) 22%, #fff 48%, #fff 78%, transparent 100%)",
          }}
        />
        <img
          src="/clouds/alpha.png"
          alt=""
          className="absolute inset-x-[-6%] top-[6%] h-[95%] w-[112%] object-cover object-bottom opacity-50"
          style={{ filter: "blur(14px)" }}
        />
        <img
          src="/clouds/alpha.png"
          alt=""
          className="absolute inset-x-[-4%] top-[18%] h-[88%] w-[108%] -scale-x-100 object-cover object-bottom opacity-35"
          style={{ filter: "blur(10px)" }}
        />
      </div>
      {children}
    </div>
  );
}
