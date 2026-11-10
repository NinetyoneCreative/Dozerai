"use client";

import { YouTubeLite } from "@/components/YouTubeLite";
import { dataLayerPush } from "@/lib/analytics";

/** Smith Denison testimonial facade for /demo, with the demo_video_play event. */
export function DemoVideo() {
  return (
    <YouTubeLite
      id="LniqXy8HlL0"
      title="Smith Denison Construction on Dozer AI, customer testimonial"
      trackId="demo_customer_story"
      onPlay={() => dataLayerPush("demo_video_play")}
    />
  );
}
