import type { ReactNode } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { cutoutObjectPosition } from "../../data/cutout-positions";

type SplitProductCardShellProps = {
  visual: ReactNode;
  title: string;
  subtitle?: string;
  shadow?: "hero" | "default";
  tall?: boolean;
  fill?: boolean;
  className?: string;
};

export function SplitProductCardShell({
  visual,
  title,
  subtitle,
  shadow = "default",
  tall = false,
  fill = false,
  className = "",
}: SplitProductCardShellProps) {
  return (
    <div
      className={[
        "split-product-card group relative flex w-full flex-col text-left",
        fill ? "h-full" : "",
        tall ? "split-product-card--tall" : fill ? "" : "aspect-[4/5]",
        shadow === "hero" ? "split-product-card-hero" : "split-product-card-default",
        className,
      ].join(" ")}
    >
      <div className="split-product-card__visual relative z-[1] flex min-h-0 flex-1 flex-col">
        {visual}
      </div>

      <div className="relative z-[2] mt-auto shrink-0 flex items-end justify-between gap-3 px-5 pb-5 pt-2">
        <div className="min-w-0">
          <h3 className="font-display text-[1.05rem] font-semibold leading-snug tracking-[-0.03em] text-ink md:text-[1.12rem]">
            {title}
          </h3>
          {subtitle ? (
            <p className="mt-1 text-[0.82rem] text-ink-soft">{subtitle}</p>
          ) : null}
        </div>
        <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-steel text-white transition-transform duration-300 group-hover:scale-105 group-hover:bg-steel-deep">
          <ArrowUpRight size={15} weight="bold" />
        </span>
      </div>
    </div>
  );
}

export function SplitProductCardVisual({
  src,
  alt,
  priority,
  fallbackLabel,
  align = "floor",
  size = "default",
}: {
  src?: string | null;
  alt: string;
  priority?: boolean;
  fallbackLabel?: string;
  align?: "floor" | "center";
  size?: "default" | "lead" | "compact";
}) {
  if (!src && fallbackLabel) {
    return (
      <span className="font-display text-3xl font-semibold tracking-[-0.03em] text-white/90">
        {fallbackLabel}
      </span>
    );
  }

  if (!src) return null;

  const stageClass = [
    "split-product-card__stage",
    align === "center" ? "split-product-card__stage--center" : "",
    size === "lead" ? "split-product-card__stage--lead" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const cutoutClass = [
    "split-product-card__cutout",
    size === "lead" ? "split-product-card__cutout--lead" : "",
    size === "compact" ? "split-product-card__cutout--compact" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={stageClass}>
      <img
        src={src}
        alt={alt}
        width={420}
        height={420}
        className={cutoutClass}
        style={{ objectPosition: cutoutObjectPosition(src, align) }}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
      />
    </div>
  );
}
