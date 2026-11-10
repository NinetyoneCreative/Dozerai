/**
 * Content for the /demo conversion page. Kept here so copy is easy to edit and
 * the page stays a thin layout. Copy rules: no em or en dashes, brand is
 * "Dozer AI", no coverage numbers, no scarcity, the only price is the $2,500
 * pilot fee, and lists of three or more are bullets.
 */

/** Module 1: credibility strip. */
export const CREDIBILITY = [
  "spARK Labs Innovation Showcase winner",
  "Capital Factory",
  "spARK Labs by ARK Invest",
  "$2.5M pre-seed",
];

/** Module 2: customer pull quotes. */
export const PULL_QUOTES = [
  {
    quote:
      "We can review the video and see exactly what led up to the incident. We have documented evidence of what really happened.",
    name: "Doug Burkhart",
    role: "Owner, Smith Denison Construction",
  },
  {
    quote: "As soon as you get too close it's going to start beeping, and you stop right away.",
    name: "Jose Munoz",
    role: "Operator and Foreman, Smith Denison",
  },
  {
    quote: "The fact that Dozer can identify idle time versus production time is fantastic.",
    name: "Doug Burkhart",
    role: "Owner, Smith Denison Construction",
  },
];

/** Module 3: the Offer. */
export const OFFER_INCLUDED = [
  "Dozer AI cameras and sensors on one machine",
  "In-person install by the Dozer team",
  "Hands-on training so your crew can handle future installs",
  "Real-time in-cab audio and visual alerts",
  "Proximity and exclusion-zone detection",
  "PPE compliance checks",
  "Safety event clips with full incident history",
  "Idle time vs. production time and utilization data",
  "Dashboard access for the office",
  "Works online or offline, with data options available",
];

export const OFFER_CARDS = [
  {
    title: "We install it. You run your job.",
    desc: "The Dozer team installs your first unit in person and trains your crew.",
  },
  {
    title: "45 days on your jobsite.",
    desc: "Long enough to capture real safety events, not a staged demo.",
  },
  {
    title: "$2,500, credited toward purchase.",
    desc: "One fee. No long-term contract.",
  },
  {
    title: "Walk away anytime after.",
    desc: "Not the right fit? Step away. No strings attached.",
  },
];

/** Module 4: timeline. */
export const TIMELINE = [
  {
    day: "Day 0",
    title: "15-min intro",
    desc: "We look at your fleet and pick the right machine.",
  },
  {
    day: "Day 1",
    title: "We install it",
    desc: "The Dozer team comes out in person, installs your first unit, and trains your crew for future installs.",
  },
  {
    day: "Days 1 to 45",
    title: "Real data",
    desc: "Safety events, clips, and utilization land on your dashboard.",
  },
  {
    day: "Day 45",
    title: "Your call",
    desc: "Keep it with the $2,500 credited, or walk away.",
  },
];

/** Module 6: cost stats (same figures and sources as the homepage). */
export const COST_STATS = [
  { stat: "~1 in 5", label: "U.S. worker deaths happen in construction", source: "Source: OSHA" },
  { stat: "Struck-by", label: "is a leading cause of construction fatalities", source: "Source: OSHA Focus Four" },
  {
    stat: "35%",
    label: "of a construction pro's time goes to non-optimal work",
    source: "Source: PlanGrid & FMI, Construction Disconnected (2018)",
  },
];

/** Module 7: FAQ. */
export interface FaqItem {
  q: string;
  a: string;
}
export const FAQ: FaqItem[] = [
  {
    q: "What does the pilot cost?",
    a: "$2,500 for one machine for 45 days. If you keep Dozer AI after the pilot, the $2,500 goes toward your purchase.",
  },
  {
    q: "What happens after 45 days?",
    a: "You decide. Keep it and roll your pilot fee into the purchase, or step away. No strings attached.",
  },
  {
    q: "Is there a long-term contract?",
    a: "No. The pilot is a one-time fee with no long-term commitment.",
  },
  {
    q: "Who installs it?",
    a: "We do. The Dozer team comes out in person to install your first unit, then trains your team so you can handle future installs yourselves.",
  },
  {
    q: "Does it need Wi-Fi or a cell signal?",
    a: "No. Dozer AI works online or offline, and we have data options for sites with poor coverage.",
  },
  {
    q: "What machines does it work on?",
    a: "Excavators, dozers, loaders, haul trucks, graders, and more. We'll pick the right machine with you on the intro call.",
  },
  {
    q: "Will my operators get buried in alerts?",
    a: "Dozer AI tells people apart from equipment and objects, so alerts fire when a person or hazard is actually in the way.",
  },
  {
    q: "Is it just safety?",
    a: "No. The same cameras track utilization, idle time vs. production time, and job cost data, so the office gets productivity numbers too.",
  },
  {
    q: "What happens on the 15-minute call?",
    a: "We look at your fleet, show live footage from machines in the field, and walk you through the pilot. No obligation.",
  },
  {
    q: "Can I just call?",
    a: "Yes. Call us at (707) 563-9898.",
  },
];
