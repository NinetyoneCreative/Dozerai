import Image from "next/image";
import type { AssetBucket } from "@/content/assets";

/**
 * The single image primitive for the site. Every photo, screenshot, and clip
 * renders through AssetSlot so real assets drop in later without touching
 * layout, and every slot reserves its exact aspect ratio up front (zero CLS).
 *
 * Resolution order:
 *   video -> muted autoplay loop with poster (playsInline)
 *   src   -> next/image at the declared dimensions
 *   neither -> a labeled placeholder at the exact aspect ratio, showing the
 *              slot id, bucket, and required pixel dimensions in Share Tech Mono
 *
 * Slots are declared in /content/assets.ts and usually spread in:
 *   <AssetSlot {...ASSETS.heroIncab} priority />
 */
export interface AssetSlotProps {
  id: string;
  bucket: AssetBucket;
  width: number;
  height: number;
  alt: string;
  src?: string;
  video?: string;
  poster?: string;
  /** Extra classes on the rendered media/placeholder (e.g. object-fit). */
  className?: string;
  /** Pass on the LCP slot (hero) so next/image preloads it. */
  priority?: boolean;
  /** Not part of the manifest spec; ignored here, accepted so {...spec} spreads cleanly. */
  media?: "image" | "video";
  location?: string;
}

export function AssetSlot({
  id,
  bucket,
  width,
  height,
  alt,
  src,
  video,
  poster,
  className = "",
  priority = false,
}: AssetSlotProps) {
  const aspectRatio = `${width} / ${height}`;

  if (video) {
    return (
      <video
        className={`block h-auto w-full ${className}`}
        style={{ aspectRatio }}
        width={width}
        height={height}
        poster={poster}
        muted
        loop
        autoPlay
        playsInline
        aria-label={alt}
        data-asset-slot={id}
      >
        <source src={video} type="video/mp4" />
      </video>
    );
  }

  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes="100vw"
        className={`block h-auto w-full ${className}`}
        data-asset-slot={id}
      />
    );
  }

  // Placeholder: exact aspect ratio, so dropping in the real asset shifts nothing.
  return (
    <div
      role="img"
      aria-label={`${alt}. Asset pending.`}
      data-asset-slot={id}
      style={{ aspectRatio }}
      className={`flex w-full items-center justify-center rounded-md border border-dashed border-medium-grey/60 bg-dozer-white ${className}`}
    >
      <div className="p-4 text-center font-mono">
        <span className="inline-block rounded-sm bg-medium-grey/20 px-2 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-darker-grey">
          {bucket}
        </span>
        <p className="mt-3 text-sm text-dark-grey">{id}</p>
        <p className="mt-1 text-xs text-medium-grey">
          {width} &times; {height}
        </p>
      </div>
    </div>
  );
}
