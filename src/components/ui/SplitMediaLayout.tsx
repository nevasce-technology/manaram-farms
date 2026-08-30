import type { ReactNode } from "react";

type SplitMediaLayoutProps = {
  children: ReactNode;
  media: ReactNode;
  mediaFirst?: boolean;
  align?: "stretch" | "start";
  contentAlign?: "center" | "start";
  mediaWrapperClassName?: string;
};

export function SplitMediaLayout({
  children,
  media,
  mediaFirst = false,
  align = "stretch",
  contentAlign = "center",
  mediaWrapperClassName = "",
}: SplitMediaLayoutProps) {
  return (
    <div
      className={[
        "grid gap-10 lg:grid-cols-2 lg:gap-14",
        align === "start" ? "items-start" : "items-stretch",
      ].join(" ")}
    >
      <div
        className={[
          "flex flex-col",
          contentAlign === "start" ? "justify-start" : "justify-center",
          mediaFirst ? "lg:order-2" : "lg:order-1",
        ].join(" ")}
      >
        {children}
      </div>
      <div
        className={[
          "relative min-h-[18rem] sm:min-h-[22rem]",
          mediaFirst ? "lg:order-1" : "lg:order-2",
        ].join(" ")}
      >
        <div
          className={[
            "h-full min-h-[inherit] overflow-hidden rounded-[1.35rem]",
            mediaWrapperClassName,
          ].join(" ")}
        >
          {media}
        </div>
      </div>
    </div>
  );
}

type SplitMediaImageProps = {
  alt: string;
  src: string;
  className?: string;
  loading?: "eager" | "lazy";
};

export function SplitMediaImage({
  alt,
  src,
  className = "",
  loading = "lazy",
}: SplitMediaImageProps) {
  return (
    <img
      alt={alt}
      className={[
        "h-full min-h-[18rem] w-full object-cover sm:min-h-[22rem] lg:min-h-full",
        className,
      ].join(" ")}
      decoding="async"
      loading={loading}
      src={src}
    />
  );
}
