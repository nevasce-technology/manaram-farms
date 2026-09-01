import { foodSafetyCert } from "../../data/about-data";

type FoodSafetyCertLayout = "feature" | "strip" | "seal";

type FoodSafetyCertProps = {
  layout?: FoodSafetyCertLayout;
  className?: string;
};

type CertLogosProps = {
  className?: string;
  logoHeight?: string;
  logoWidths?: string[];
};

export function CertLogos({
  className = "",
  logoHeight = "h-11",
  logoWidths = ["max-w-[9rem]", "max-w-[7.5rem]"],
}: CertLogosProps) {
  return (
    <div className={`cert-logos flex flex-nowrap items-center gap-3 sm:gap-4 ${className}`}>
      {foodSafetyCert.logos.map((logo, index) => (
        <img
          key={logo.src}
          src={logo.src}
          alt={logo.alt}
          className={`${logoHeight} w-auto shrink-0 object-contain ${logoWidths[index] ?? ""}`}
          loading="lazy"
          decoding="async"
        />
      ))}
    </div>
  );
}

/** Full editorial band — About facility section only. */
function FeatureLayout({ className = "" }: { className?: string }) {
  return (
    <aside
      className={`grid gap-6 border-t border-ink/10 pt-8 md:grid-cols-[1fr_auto] md:items-center md:gap-10 ${className}`}
      aria-label={`${foodSafetyCert.standard} food safety certification`}
    >
      <div className="max-w-lg">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-steel">
          {foodSafetyCert.eyebrow}
        </p>
        <h3 className="mt-2 font-display text-2xl font-semibold tracking-[-0.03em] text-ink md:text-[1.65rem]">
          {foodSafetyCert.standard}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{foodSafetyCert.body}</p>
        <p className="mt-3 text-[0.68rem] text-ink-soft/75">
          {foodSafetyCert.accreditation}
          <span className="mx-1.5 opacity-40" aria-hidden="true">
            ·
          </span>
          {foodSafetyCert.certificate}
        </p>
      </div>
      <div className="w-full max-w-[26rem] shrink-0 rounded-xl bg-white p-5 ring-1 ring-ink/6 md:max-w-[30rem] md:p-6">
        <CertLogos
          logoHeight="h-16 md:h-[4.75rem]"
          logoWidths={["max-w-[12rem]", "max-w-[10rem]"]}
          className="gap-4 md:gap-5"
        />
      </div>
    </aside>
  );
}

/** Left-accent strip — home welcome facility column. */
function StripLayout({ className = "" }: { className?: string }) {
  return (
    <aside
      className={`flex flex-col gap-4 border-l-2 border-steel pl-5 sm:flex-row sm:items-center sm:gap-6 ${className}`}
      aria-label={`${foodSafetyCert.standard} food safety certification`}
    >
      <div className="min-w-0 flex-1">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-steel">
          {foodSafetyCert.eyebrow}
        </p>
        <p className="mt-1 font-display text-lg font-semibold tracking-[-0.02em] text-ink">
          {foodSafetyCert.standard}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-ink-soft">
          Certified at our Jhapa facility.
        </p>
      </div>
      <div className="w-full max-w-[16rem] shrink-0 sm:max-w-[17rem]">
        <CertLogos logoHeight="h-11" />
      </div>
    </aside>
  );
}

/** Minimal seal — footer brand column. */
function SealLayout({ className = "" }: { className?: string }) {
  return (
    <aside
      className={`flex items-center gap-4 ${className}`}
      aria-label={`${foodSafetyCert.standard} food safety certification`}
    >
      <div className="shrink-0 rounded-lg bg-white px-3 py-2.5">
        <CertLogos logoHeight="h-10 sm:h-11" className="gap-3 sm:gap-4" />
      </div>
      <div className="min-w-0">
        <p className="font-display text-sm font-semibold text-white">{foodSafetyCert.standard}</p>
        <p className="mt-0.5 text-xs leading-relaxed text-white/60">
          IAS · MSCB-113 · G-CERT2
        </p>
      </div>
    </aside>
  );
}

export function FoodSafetyCert({ layout = "strip", className = "" }: FoodSafetyCertProps) {
  switch (layout) {
    case "feature":
      return <FeatureLayout className={className} />;
    case "seal":
      return <SealLayout className={className} />;
    case "strip":
    default:
      return <StripLayout className={className} />;
  }
}
