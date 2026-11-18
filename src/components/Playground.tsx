import Image from "next/image";
import { ACCENTS } from "@/content/palette";
import { playground } from "@/content/playground";

/** Text still in [square brackets] is a note to self, not copy. */
const isDraft = (text: string) => /^\[.*\]$/.test(text);

/**
 * Side projects: data drawings, tools and things made by hand. Cards sit in
 * a loose grid on the paper, each tinted from the riso palette so they read
 * as a different shelf from the client work above.
 */
export function Playground() {
  return (
    <section
      id="playground"
      aria-labelledby="playground-title"
      className="mx-auto max-w-6xl scroll-mt-24 px-6 pb-24 sm:px-8 sm:pb-32"
    >
      <header className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-10">
        <h2 id="playground-title" className="display text-[2rem] sm:text-[2.6rem]">
          Playground
        </h2>
        <p className="max-w-[46ch] leading-[1.7] text-ink-2 sm:pb-1.5">
          Things I make when nobody asked: data drawings from my own life, tools
          for my own workflow, and things made by hand.
        </p>
      </header>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {playground.map((item, i) => {
          const tint = item.accent ? ACCENTS[item.accent] : null;
          return (
            <li
              key={i}
              className="flex flex-col rounded-panel p-5"
              style={{ backgroundColor: tint ? tint.wash : "var(--color-paper-deep)" }}
            >
              <p className="label" style={{ color: tint ? tint.ink : "var(--color-ink-3)" }}>
                {item.kind}
              </p>
              <div className="relative mt-3 aspect-4/3 overflow-hidden rounded-control bg-paper">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 grid place-items-center rounded-control border border-dashed border-rule-strong p-4 text-center text-[0.85rem] text-ink-3">
                    {item.placeholder}
                  </div>
                )}
              </div>
              <h3 className={`mt-4 text-[1.1rem] font-semibold ${isDraft(item.title) ? "italic text-ink-2" : "text-ink"}`}>
                {item.title}
              </h3>
              <p className={`mt-1.5 text-[0.92rem] leading-[1.6] ${isDraft(item.line) ? "italic text-ink-3" : "text-ink-2"}`}>
                {item.line}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
