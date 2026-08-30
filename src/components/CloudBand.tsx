import { easeOutCubic, lerp, phase } from "../lib/anim";

type Layer = {
  from: number;
  to: number;
  y: [number, number];
  x: [number, number];
  scale: [number, number];
  opacity: number;
  height: string;
  spread: string;
  blur: number;
  flip?: boolean;
};

/** Matches WelcomeFarm white floor so the mist handoff stays continuous. */
const PAPER = "#ffffff";

const LAYERS: Layer[] = [
  {
    from: 0,
    to: 0.85,
    y: [32, -14],
    x: [2, -1],
    scale: [1.1, 1.22],
    opacity: 0.42,
    height: "48%",
    spread: "-10%",
    blur: 18,
  },
  {
    from: 0,
    to: 0.95,
    y: [42, -24],
    x: [-2, 2],
    scale: [1.14, 1.32],
    opacity: 0.52,
    height: "58%",
    spread: "-14%",
    blur: 14,
    flip: true,
  },
  {
    from: 0.06,
    to: 1,
    y: [56, -34],
    x: [1, -2],
    scale: [1.18, 1.42],
    opacity: 0.68,
    height: "72%",
    spread: "-8%",
    blur: 8,
  },
];

export default function CloudBand({ t }: { t: number }) {
  const rise = phase(t, 0, 1);
  const densify = phase(t, 0.12, 0.9);
  const floor = phase(t, 0.28, 1);

  return (
    <div className="pointer-events-none absolute inset-0 z-30 overflow-hidden" aria-hidden>
      {/* Soft atmospheric wash — no hard top edge */}
      <div
        className="absolute inset-x-0 bottom-0"
        style={{
          height: `${lerp(22, 88, rise)}%`,
          opacity: lerp(0.28, 1, densify),
          background: `
            linear-gradient(
              to top,
              ${PAPER} 0%,
              color-mix(in srgb, ${PAPER} 92%, transparent) 18%,
              color-mix(in srgb, ${PAPER} 55%, transparent) 42%,
              color-mix(in srgb, ${PAPER} 18%, transparent) 68%,
              transparent 100%
            )
          `,
        }}
      />

      {LAYERS.map((layer, i) => {
        const raw = phase(t, layer.from, layer.to);
        const alpha = lerp(0.22, 1, easeOutCubic(raw)) * layer.opacity;
        // Feather both top and bottom so stacked plates never print a hard seam
        const feather =
          "linear-gradient(to top, transparent 0%, #000 18%, #000 58%, transparent 100%)";

        return (
          <div
            key={i}
            className="absolute bottom-0"
            style={{
              left: layer.spread,
              right: layer.spread,
              height: layer.height,
              transform: `translate3d(${lerp(layer.x[0], layer.x[1], raw)}%, ${lerp(layer.y[0], layer.y[1], raw)}%, 0) scale(${lerp(layer.scale[0], layer.scale[1], raw)})`,
              transformOrigin: "bottom center",
              opacity: alpha,
              filter: `blur(${layer.blur}px)`,
              WebkitMaskImage: feather,
              maskImage: feather,
              willChange: "transform, opacity",
            }}
          >
            <img
              src="/clouds/alpha.png"
              alt=""
              className={`h-full w-full object-cover object-bottom ${layer.flip ? "-scale-x-100" : ""}`}
            />
          </div>
        );
      })}

      {/* Solid paper floor that fully owns the bottom of the sticky stage */}
      <div
        className="absolute inset-x-0 bottom-0"
        style={{
          height: `${lerp(10, 58, floor)}%`,
          background: `
            linear-gradient(
              to top,
              ${PAPER} 0%,
              ${PAPER} 42%,
              color-mix(in srgb, ${PAPER} 70%, transparent) 72%,
              transparent 100%
            )
          `,
          opacity: lerp(0.55, 1, floor),
        }}
      />
    </div>
  );
}
