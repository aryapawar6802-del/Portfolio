import { site } from "@/content/site";

/**
 * First-paint curtain: a black screen with the name in the middle. The name
 * fades in and holds, then the whole screen dissolves into the page.
 *
 * Server-rendered with a pure CSS animation on purpose. Driving this from
 * JS would mean the page paints first and the curtain drops over it a frame
 * later, which reads as a glitch rather than an entrance.
 */
export function IntroCurtain() {
  return (
    <div className="curtain" aria-hidden="true">
      <span className="curtain-mark display text-[2rem] text-white sm:text-[3rem]">
        {site.name}
      </span>
    </div>
  );
}
