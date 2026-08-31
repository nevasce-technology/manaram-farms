import { foodSafetyCert } from "../../data/about-data";

type FoodSafetyCertLayout = "feature" | "strip" | "seal";

type FoodSafetyCertProps = {
  layout?: FoodSafetyCertLayout;
  className?: string;
};

function CertBadges({
  className = "",
  maxHeight = "max-h-16",
}: {
  className?: string;
  maxHeight?: string;
}) {
  return (
    <img
      src={foodSafetyCert.image}
      alt={foodSafetyCert.imageAlt}
      className={`h-auto w-full object-contain object-left ${maxHeight} ${className}`}
      loading="lazy"
      decoding="async"
      width={600}
      height={200}
    />
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
      <div className="w-full max-w-[15rem] shrink-0 rounded-xl bg-white p-3 ring-1 ring-ink/6 md:max-w-[17rem] md:p-4">
        <CertBadges maxHeight="max-h-[4.25rem] md:max-h-[4.75rem]" />
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
      <div className="w-full max-w-[11.5rem] shrink-0 sm:max-w-[12.5rem]">
        <CertBadges maxHeight="max-h-14" />
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
      <div className="w-[7.5rem] shrink-0 rounded-lg bg-white/95 p-2">
        <CertBadges maxHeight="max-h-11" className="object-center" />
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
