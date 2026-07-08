import Image from "next/image";

/**
 * Theme-aware app screenshot. Renders the light and dark captures and lets
 * CSS pick the right one, so it works with SSR and without JavaScript.
 * The source PNGs already include the iPhone hardware frame.
 */
export function AppShot({
  light,
  dark,
  alt,
  priority = false,
  sizes = "(max-width: 768px) 70vw, 360px",
  className = "",
}) {
  const shared = {
    width: 1419,
    height: 2796,
    sizes,
    quality: 75,
  };

  return (
    <span className={`block ${className}`}>
      <Image
        {...shared}
        alt={alt}
        src={light}
        priority={priority}
        className="block h-auto w-full dark:hidden"
      />
      <Image
        {...shared}
        alt={alt}
        src={dark}
        loading={priority ? "eager" : "lazy"}
        className="hidden h-auto w-full dark:block"
      />
    </span>
  );
}

/** Scanner-style corner brackets — the site's signature framing device. */
export function ScanFrame({ children, className = "", inset = "-0.875rem" }) {
  return (
    <span className={`relative block ${className}`}>
      <span
        aria-hidden="true"
        className="absolute"
        style={{ inset }}
      >
        <span className="scan-corner scan-corner-tl" />
        <span className="scan-corner scan-corner-tr" />
        <span className="scan-corner scan-corner-bl" />
        <span className="scan-corner scan-corner-br" />
      </span>
      {children}
    </span>
  );
}
