import { HoverIcon, type AnimatedIconComponent } from "./HoverIcon";

const ICON_HOVER =
  "shrink-0 text-steel transition-colors duration-300 group-hover:text-steel-soft";

type IconTitleProps = {
  icon: AnimatedIconComponent;
  title: string;
  titleClassName?: string;
  iconClassName?: string;
  size?: number;
};

export function IconTitle({
  icon,
  title,
  titleClassName = "font-display text-xl font-semibold text-ink sm:text-2xl",
  iconClassName = ICON_HOVER,
  size = 22,
}: IconTitleProps) {
  return (
    <HoverIcon
      className="group flex cursor-default items-center gap-3"
      icon={icon}
      iconClassName={iconClassName}
      size={size}
    >
      <span className={titleClassName}>{title}</span>
    </HoverIcon>
  );
}

type IconCopyProps = {
  icon: AnimatedIconComponent;
  title: string;
  body: string;
  titleClassName?: string;
  bodyClassName?: string;
  iconClassName?: string;
  size?: number;
};

export function IconCopyBlock({
  icon,
  title,
  body,
  titleClassName = "font-display text-xl font-semibold tracking-[-0.02em] text-ink",
  bodyClassName = "mt-2 text-sm leading-relaxed text-ink-soft",
  iconClassName = ICON_HOVER,
  size = 22,
}: IconCopyProps) {
  return (
    <div className="group">
      <HoverIcon
        className="flex cursor-default items-center gap-3"
        icon={icon}
        iconClassName={iconClassName}
        size={size}
      >
        <h3 className={titleClassName}>{title}</h3>
      </HoverIcon>
      <p className={bodyClassName}>{body}</p>
    </div>
  );
}
