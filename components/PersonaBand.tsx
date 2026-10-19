import { SafeImage } from "@/components/SafeImage";
import { SafeVideo } from "@/components/SafeVideo";
import type { Persona } from "@/lib/personas";

/** Optional media override (lets a page show different media than the persona's default). */
export type PersonaMedia =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; label: string };

/**
 * Alternating media + copy band for one persona (field / cab / office).
 * Media resolution: `media` override → the persona's own photo → a labeled
 * placeholder that keeps the layout intact until a photo is supplied.
 */
export function PersonaBand({
  persona,
  reverse = false,
  media,
}: {
  persona: Persona;
  reverse?: boolean;
  media?: PersonaMedia;
}) {
  return (
    <div id={persona.id} className="grid scroll-mt-24 items-center gap-10 lg:grid-cols-2 lg:gap-16">
      {/* Copy */}
      <div className={reverse ? "lg:order-2" : ""}>
        <p className="kicker">{persona.eyebrow}</p>
        <p className="mt-3 text-sm font-medium uppercase tracking-wide text-medium-grey">
          {persona.who}
        </p>
        <h3 className="mt-2 text-2xl font-bold text-darker-grey sm:text-3xl">{persona.title}</h3>
        <p className="mt-4 text-lg text-dark-grey">{persona.body}</p>
        <ul className="mt-6 space-y-3">
          {persona.points.map((point) => (
            <li key={point} className="flex items-start gap-3 text-dark-grey">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                className="mt-1 shrink-0 text-dozer-yellow"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 0 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0z" />
              </svg>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Media */}
      <div className={reverse ? "lg:order-1" : ""}>
        <PersonaMediaSlot persona={persona} media={media} />
      </div>
    </div>
  );
}

function PersonaMediaSlot({ persona, media }: { persona: Persona; media?: PersonaMedia }) {
  if (media?.type === "video") {
    return (
      <div className="overflow-hidden rounded-md border border-medium-grey/30 bg-black">
        <SafeVideo src={media.src} label={media.label} ambient className="aspect-video w-full object-cover" />
      </div>
    );
  }

  const image = media?.type === "image" ? media : persona.image;
  if (image) {
    return (
      <div className="overflow-hidden rounded-md border border-medium-grey/30 bg-black">
        <SafeImage
          src={image.src}
          alt={image.alt}
          width={1600}
          height={900}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className="flex aspect-[16/10] items-center justify-center rounded-md border border-dashed border-medium-grey/60 bg-dozer-white"
      role="img"
      aria-label={`${persona.eyebrow} photo coming soon`}
    >
      <div className="text-center">
        <p className="kicker">{persona.placeholder}</p>
        <p className="mt-3 text-sm text-medium-grey">Photo coming soon</p>
      </div>
    </div>
  );
}
