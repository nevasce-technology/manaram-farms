import {
  type ComponentType,
  type ReactNode,
  type Ref,
  useRef,
} from "react";

type AnimHandle = {
  startAnimation: () => void;
  stopAnimation: () => void;
};

type AnimatedIconProps = {
  size?: number;
  color?: string;
  className?: string;
  isAnimated?: boolean;
  duration?: number;
};

export type AnimatedIconComponent = ComponentType<
  AnimatedIconProps & { ref?: Ref<AnimHandle> }
>;

type HoverIconProps = {
  icon: AnimatedIconComponent;
  size?: number;
  className?: string;
  iconClassName?: string;
  children?: ReactNode;
};

/** Path-animated icon from @animateicons/react — animates on hover. */
export function HoverIcon({
  icon: Icon,
  size = 28,
  className = "",
  iconClassName = "",
  children,
}: HoverIconProps) {
  const ref = useRef<AnimHandle>(null);

  return (
    <div
      className={className}
      onMouseEnter={() => ref.current?.startAnimation()}
      onMouseLeave={() => ref.current?.stopAnimation()}
    >
      <span
        className={`inline-flex items-center justify-center text-steel ${iconClassName}`}
      >
        <Icon color="currentColor" ref={ref} size={size} />
      </span>
      {children}
    </div>
  );
}
