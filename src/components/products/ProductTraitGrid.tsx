import type { Icon } from "@phosphor-icons/react";
import {
  Atom,
  Barbell,
  Check,
  Heart,
  Leaf,
  Lightning,
  Mountains,
  ShieldCheck,
  Tooth,
} from "@phosphor-icons/react";
import type { ProductHighlight } from "../../utils/parseProductDescription";

export function pickBenefitIcon(title: string, body = ""): Icon {
  const text = `${title} ${body}`.toLowerCase();

  if (/protein|stamina|strength/i.test(text)) return Barbell;
  if (/calcium/i.test(text)) return Atom;
  if (/fat|low fat/i.test(text)) return Heart;
  if (/energy|endurance/i.test(text)) return Lightning;
  if (/dental|tooth/i.test(text)) return Tooth;
  if (/natural|preservative|additive|pure|vegetarian/i.test(text)) return Leaf;
  if (/vitamin|immunity|wellness|nutrient/i.test(text)) return ShieldCheck;
  if (/nepal|himalayan|authentic|traditional/i.test(text)) return Mountains;

  return Check;
}

type ProductTraitGridProps = {
  items: ProductHighlight[];
};

export default function ProductTraitGrid({ items }: ProductTraitGridProps) {
  if (!items.length) return null;

  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => {
        const Icon = pickBenefitIcon(item.title, item.body);

        return (
          <li
            key={item.title}
            className="flex gap-3.5 rounded-[var(--radius-soft)] border border-ink/8 bg-gradient-to-b from-white to-[#f6f9fc] p-4"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-steel/10 text-steel">
              <Icon size={20} weight="duotone" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="text-[15px] font-semibold leading-snug text-ink">{item.title}</p>
              {item.body ? (
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{item.body}</p>
              ) : null}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
