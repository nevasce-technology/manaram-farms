import type { ReactNode } from "react";

/**
 * Lifts the first post-hero section up over the pinned hero so it emerges from
 * soft mist. Fringe uses the alpha cloud plate : no screen-blend, no dark seam.
 */
export default function CloudRiser({ children }: { children: ReactNode }) {
  return (
    <div className="cloud-riser relative z-10 bg-white">
      <div
        className="cloud-fringe pointer-events-none absolute inset-x-0 top-0 z-10 h-[36vh] -translate-y-[60%] overflow-hidden"
        aria-hidden
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.55) 30%, #ffffff 52%, rgba(255,255,255,0.7) 72%, transparent 100%)",
          }}
        />
        <img
          src="/clouds/alpha.png"
          alt=""
          className="absolute inset-x-0 top-[10%] h-[90%] w-full scale-110 object-cover object-bottom opacity-55"
          style={{ filter: "blur(8px)" }}
        />
      </div>
      {children}
    </div>
  );
}
