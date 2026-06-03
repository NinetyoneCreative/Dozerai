import { type ReactNode } from "react";
import { SafeImage } from "@/components/SafeImage";
import { SafeVideo } from "@/components/SafeVideo";

interface FeatureRowProps {
  kicker?: string;
  title: string;
  body: ReactNode;
  /** Bullet points beneath the body. */
  points?: string[];
  media:
    | { type: "image"; src: string; alt: string }
    | { type: "video"; src: string; label: string; trackId?: string };
  /** Place media on the left instead of the right. */
  reverse?: boolean;
}

/**
 * Alternating media + copy row used to lay out product features. Media
 * degrades gracefully via SafeImage/SafeVideo.
 */
export function FeatureRow({
  kicker,
  title,
  body,
  points,
  media,
  reverse = false,
}: FeatureRowProps) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className={reverse ? "lg:order-2" : ""}>
        {kicker && <p className="kicker">{kicker}</p>}
        <h3 className="mt-3 text-2xl font-bold text-darker-grey sm:text-3xl">
          {title}
        </h3>
        <div className="mt-4 text-lg text-dark-grey">{body}</div>
        {points && (
          <ul className="mt-5 space-y-2.5">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-dark-grey">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-dozer-yellow"
                  aria-hidden="true"
                />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div
        className={`overflow-hidden rounded-md border border-medium-grey/30 bg-white ${
          reverse ? "lg:order-1" : ""
        }`}
      >
        {media.type === "image" ? (
          <SafeImage
            src={media.src}
            alt={media.alt}
            width={760}
            height={500}
            className="h-auto w-full"
          />
        ) : (
          <SafeVideo
            src={media.src}
            label={media.label}
            trackId={media.trackId}
            ambient
            className="h-auto w-full"
          />
        )}
      </div>
    </div>
  );
}
