# Dozer AI, asset manifest

This is the shot list for the site. Every image on the site is a **named slot**
rendered through `components/AssetSlot.tsx` at a **fixed pixel size**, so a real
file drops in with zero layout shift. The source of truth is
[`content/assets.ts`](content/assets.ts); this file is the human-readable copy
for the photographer and design team.

## The four buckets

Only these four kinds of imagery appear on the site. No stock photography, no
AI-generated jobsite imagery, no abstract illustration.

| Bucket | What goes in it |
| --- | --- |
| `hardware` | The camera unit, edge computer, in-cabin tablet, mounting brackets. Neutral or white background. None exist yet, so every hardware slot ships as a placeholder. |
| `ui` | Real Command Center screenshots, shown inside a browser frame. |
| `incab` | The in-cabin tablet showing FRONT / RIGHT / REAR feeds with PERSON, TRUCK, and REAR BODY boxes and distance readouts. |
| `footage` | Real Smith Denison jobsite stills or video. Backgrounds only. |

To drop in a real asset: put the file in `/public`, then set `src` (image) or
`video` (+ optional `poster`) on that slot in `content/assets.ts`.

## Slots

| Slot id | Bucket | Size (px) | Ratio | Media | Page / section |
| --- | --- | --- | --- | --- | --- |
| `hero-incab` | incab | 1200 x 900 | 4:3 | video | Home / Hero (right) |
| `hero-hardware` | hardware | 400 x 400 | 1:1 | image | Home / Hero (overlap, bottom-left) |
| `operator-incab` | incab | 1600 x 1000 | 8:5 | video | Home / What the operator sees; also reused on /demo and /industries/[slug] |
| `office-dashboard` | ui | 1600 x 1000 | 8:5 | image | Home / What the office sees; reused on /product |
| `suite-safety-ui` | ui | 800 x 600 | 4:3 | image | Home / Two suites (Safety card) |
| `suite-productivity-ui` | ui | 800 x 600 | 4:3 | image | Home / Two suites (Productivity card) |
| `hardware-camera` | hardware | 600 x 600 | 1:1 | image | Home lineup; /hardware; /hardware/camera |
| `hardware-edge-computer` | hardware | 600 x 600 | 1:1 | image | Home lineup; /hardware; /hardware/edge-computer |
| `hardware-tablet` | hardware | 600 x 600 | 1:1 | image | Home lineup; /hardware; /hardware/tablet |
| `system-diagram` | ui | 1400 x 600 | 7:3 | image | Home / How it works; /product |
| `product-incab` | incab | 1200 x 900 | 4:3 | video | /product / Hero |
| `safety-incab` | incab | 1200 x 900 | 4:3 | video | /product/safety / Hero |
| `safety-dashboard` | ui | 1400 x 900 | 14:9 | image | /product/safety / Safety event dashboard |
| `productivity-dashboard` | ui | 1400 x 900 | 14:9 | image | /product/productivity / Hero dashboard |
| `productivity-report` | ui | 1200 x 800 | 3:2 | image | /product/productivity / AI reporting |
| `platform-dashboard` | ui | 1600 x 1000 | 8:5 | image | /platform / Hero |
| `platform-map` | ui | 1200 x 800 | 3:2 | image | /platform / Live operations |
| `platform-report` | ui | 1200 x 800 | 3:2 | image | /platform / Automated reporting |

## Alt text (write for the real asset, never "image of camera")

- **hero-incab**: The in-cabin tablet showing live FRONT, RIGHT, and REAR camera feeds, with a worker on foot and a haul truck outlined by detection boxes and distance readouts.
- **hero-hardware**: The Dozer AI 360-degree stereoscopic camera unit, a rugged sensor bar that mounts to heavy equipment.
- **operator-incab**: The in-cabin tablet during a swing, a worker on foot flagged in the rear camera feed with a live distance readout.
- **office-dashboard**: The Command Center dashboard showing live machine locations on a site map, utilization, and a feed of flagged safety events.
- **suite-safety-ui**: The safety event dashboard listing time-stamped proximity events by machine, with a near-miss clip selected.
- **suite-productivity-ui**: The productivity dashboard showing cycle times, utilization, and cost codes broken out by machine and shift.
- **hardware-camera**: The 360-degree stereoscopic camera unit on a neutral background, showing its dual lenses and rugged housing.
- **hardware-edge-computer**: The onboard edge computer that runs detection locally on the machine, on a neutral background.
- **hardware-tablet**: The in-cabin tablet on a neutral background, showing the camera-feed interface used by the operator.
- **system-diagram**: A diagram of the Dozer AI system, from cameras and the edge computer on the machine to the in-cab tablet and the Command Center.
- **product-incab**: The in-cabin tablet showing all camera feeds with people and equipment outlined, as the operator works.
- **safety-incab**: The in-cabin tablet flagging a worker on foot in a blind spot with a distance readout and an alert.
- **safety-dashboard**: The safety event dashboard listing time-stamped proximity events by machine, site, and shift.
- **productivity-dashboard**: The productivity dashboard showing utilization, cycle times, and cost codes by machine and shift.
- **productivity-report**: An automated jobsite summary in the Command Center, flagging the day's exceptions.
- **platform-dashboard**: The Command Center overview with a live site map, machine list, and a feed of flagged events.
- **platform-map**: The live operations map showing every machine's location and current activity across the site.
- **platform-report**: An automated daily site summary in the Command Center with utilization and exception alerts.

## Other assets, tracked outside the slot system

- **Trust bar logos** (`content/trust.ts`): approved customer logos, drop files into `/public/logos` and set `logoSrc`. Ships with Smith Denison plus placeholder name chips.
- **Spec sheets** (`/public/spec-sheets/camera.pdf`, `edge-computer.pdf`, `tablet.pdf`): placeholder PDFs behind the HubSpot gate. Replace with the real spec sheets.
- **Testimonial video**: Smith Denison, YouTube `LniqXy8HlL0`, click-to-play facade. Needs Doug Burkhart's verbatim pull quote (`PROOF.quote` in `content/home.ts`) and the real `uploadDate` in the VideoObject JSON-LD.
