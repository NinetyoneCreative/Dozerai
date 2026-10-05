/**
 * Content for /platform, the web Command Center. No price, no em dashes.
 */
export const PLATFORM = {
  eyebrow: "Command Center",
  h1: "Alerts in the cab. Answers on the dashboard.",
  opening:
    "The Command Center is the web side of Dozer AI. The same cameras that warn the operator feed one dashboard, so supervisors see the whole yard from the trailer or the office: where every machine is, how it is running, and what happened when.",
  features: [
    {
      title: "Live operations and equipment tracking",
      body: "See every machine on a site map in real time, with status, location, and current activity.",
    },
    {
      title: "Utilization and production versus plan",
      body: "Track utilization, cycle times, and production against the plan for the day, by machine and by crew.",
    },
    {
      title: "Automated site summaries and exception alerts",
      body: "The AI writes the daily summary and flags the exceptions, so you read what changed instead of scrolling raw logs.",
    },
    {
      title: "Safety events, clipped and tied to a machine",
      body: "Every flagged proximity event is a time-stamped clip attached to a specific machine and location, easy to find and review.",
    },
    {
      title: "Cost codes and time allocation",
      body: "Machine hours map to your cost codes and split working time from idle and travel.",
    },
    {
      title: "ERP export",
      body: "Send utilization and cost-code data to Procore, Viewpoint, and Oracle, so it lands where your team already works.",
    },
  ],
  integrations: ["Procore", "Viewpoint", "Oracle"],
};
