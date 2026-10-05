/**
 * Homepage FAQ. Each answer is written to stand alone as a quotable paragraph
 * that carries the specific number and the customer name where it applies, so
 * it reads well on the page and as a rich result. Feeds the FAQPage JSON-LD.
 *
 * Copy rules: no em dashes, no price, plainspoken trade language.
 */
export interface FaqItem {
  q: string;
  a: string;
}

export const FAQ: FaqItem[] = [
  {
    q: "What is Dozer AI?",
    a: "Dozer AI is an on-machine perception system for heavy equipment. Rugged 360-degree stereoscopic cameras, depth sensors, and an onboard edge computer mount directly to an excavator, dozer, loader, grader, or haul truck. The operator gets real-time proximity alerts on an in-cabin tablet, and supervisors get live operations, utilization, and safety data in a web Command Center.",
  },
  {
    q: "How is this different from a dash cam?",
    a: "A dash cam records one view for later. Dozer sees 360 degrees around the machine, measures the distance to a person or object with stereoscopic depth, and warns the operator in the cab in under 150 milliseconds, while there is still time to stop. The same footage then becomes utilization and cost-code data, which a dash cam cannot do.",
  },
  {
    q: "Does it work on any brand of equipment?",
    a: "Yes. Dozer is OEM agnostic. The cameras and edge computer mount to any make or model of heavy equipment, so a mixed fleet runs one system instead of several.",
  },
  {
    q: "How long does install take?",
    a: "Under one hour per machine. The system mounts without drilling into the cab, so a machine is back to work the same day.",
  },
  {
    q: "Does it work without cell service?",
    a: "Yes. The AI runs locally on the onboard edge computer, so detection and in-cab alerts work with no connection at all. When the machine reaches coverage, events sync to the Command Center.",
  },
  {
    q: "What does the operator see?",
    a: "The in-cabin tablet shows the FRONT, RIGHT, and REAR camera feeds at once, with people, trucks, and equipment outlined and their distance shown on screen. When a hazard enters a blind spot, the operator gets an audible and visual warning right away.",
  },
  {
    q: "What does the office see?",
    a: "Supervisors use the web Command Center for live equipment tracking, utilization and production versus plan, cost codes, and automated site summaries with exception alerts. Every flagged safety event is clipped, time-stamped, and tied to a specific machine and location.",
  },
  {
    q: "What is included in the Productivity & Analytics Suite?",
    a: "The Productivity & Analytics Suite is live today and includes job cost codes, time allocation, cycle times, utilization, shift benchmarking, AI jobsite reporting, and ERP export to Procore, Viewpoint, and Oracle. It runs on the same cameras and the same install as the Safety Intelligence Suite.",
  },
  {
    q: "How does the 45-day pilot work?",
    a: "You put Dozer on one machine for 45 days with no long-term contract. You see real safety events and real production data from your own jobsite, then decide. Smith Denison Construction started with a single prototype and expanded to three units.",
  },
  {
    q: "What does it integrate with?",
    a: "The Productivity & Analytics Suite exports to common construction ERP and project systems, including Procore, Viewpoint, and Oracle, so cost-code and utilization data lands where your team already works.",
  },
  {
    q: "How is footage stored and for how long?",
    a: "Footage is captured on the machine and synced to the Command Center, where flagged events are clipped, time-stamped, and tied to a machine and location so they are easy to find. Retention is set to match your policy. Ask us for the current default during your walkthrough.",
  },
  {
    q: "Who is this for?",
    a: "Dozer is built for heavy civil contractors, and for the Safety Directors, EHS Managers, Operations and Project Executives, and Fleet and Equipment Managers who answer for both worker safety and jobsite productivity.",
  },
];
