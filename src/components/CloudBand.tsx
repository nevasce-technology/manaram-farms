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

const LAYERS: Layer[] = [
  {
    from: 0,
    to: 0.8,
    y: [28, -10],
    x: [2, -1],
    scale: [1.08, 1.18],
    opacity: 0.4,
    height: "42%",
    spread: "-8%",
    blur: 16,
  },
  {
    from: 0,
    to: 0.9,
    y: [38, -20],
    x: [-2, 2],
    scale: [1.12, 1.28],
    opacity: 0.5,
    height: "52%",
    spread: "-12%",
    blur: 12,
    flip: true,
  },
  {
    from: 0.08,
    to: 1,
    y: [52, -30],
    x: [1, -2],
    scale: [1.16, 1.38],
    opacity: 0.65,
    height: "64%",
    spread: "-6%",
    blur: 7,
  },
];

export default function CloudBand({ t }: { t: number }) {
  const rise = phase(t, 0, 1);
  const densify = phase(t, 0.15, 0.85);

  return (
    <div className="pointer-events-none absolute inset-0 z-30 overflow-hidden" aria-hidden>
      <div
        className="absolute inset-x-0 bottom-0"
        style={{
          height: `${lerp(18, 78, rise)}%`,
          opacity: lerp(0.35, 0.95, densify),
          background: `
            linear-gradient(
              to top,
              rgba(255,255,255,0.98) 0%,
              rgba(255,255,255,0.72) 28%,
              rgba(255,255,255,0.28) 62%,
              rgba(255,255,255,0) 100%
            )
          `,
        }}
      />

      {LAYERS.map((layer, i) => {
        const raw = phase(t, layer.from, layer.to);
        const alpha = lerp(0.28, 1, easeOutCubic(raw)) * layer.opacity;
        const feather = "linear-gradient(to top, #000 0%, #000 50%, transparent 100%)";

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
      <div
        className="absolute inset-x-0 bottom-0"
        style={{
          height: `${lerp(6, 48, phase(t, 0.35, 1))}%`,
          background:
            "linear-gradient(to top, #ffffff 0%, #ffffff 50%, rgba(255,255,255,0) 100%)",
          opacity: phase(t, 0.3, 0.95),
        }}
      />
    </div>
  );
}
