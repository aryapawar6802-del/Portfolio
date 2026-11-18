"use client";

import { useState } from "react";
import { STICKY } from "@/content/palette";
import type { Sticky } from "@/content/types";

/** Text still in [square brackets] is a note to self, not copy. */
function Line({ text }: { text: string }) {
  return /^\[.*\]$/.test(text) ? (
    <span className="italic text-ink-2">{text}</span>
  ) : (
    <>{text}</>
  );
}

/**
 * One sticky note. A real button: click, Enter or Space flips it between
 * the title and the reasoning behind it. Each note leans a little, by an
 * amount taken from its ID so it never changes between loads, and
 * straightens when you point at it or tab to it.
 */
export function StickyNote({ note }: { note: Sticky }) {
  const [back, setBack] = useState(false);
  const tilt = TILTS[[...note.id].reduce((sum, c) => sum + c.charCodeAt(0), 0) % TILTS.length];

  return (
    <button
      type="button"
      aria-pressed={back}
      onClick={() => setBack((b) => !b)}
      className="flex min-h-[10.5rem] w-full flex-col gap-2 rounded-[3px] p-4 text-left text-ink shadow-[0_1px_2px_rgba(0,0,0,0.06),0_6px_16px_rgba(0,0,0,0.07)] transition-transform duration-200 rotate-(--tilt) hover:rotate-0 focus-visible:rotate-0"
      style={{ backgroundColor: STICKY[note.kind].bg, ["--tilt" as string]: `${tilt}deg` }}
    >
      <span className="label text-ink-2">{note.id}</span>
      {back ? (
        <span className="space-y-2.5 text-[0.85rem] leading-[1.5]">
          <span className="block">
            <span className="label block text-ink-2">Why</span>
            <Line text={note.why} />
          </span>
          {note.pushback && (
            <span className="block">
              <span className="label block text-ink-2">Pushback</span>
              <Line text={note.pushback} />
            </span>
          )}
        </span>
      ) : (
        <span className="font-hand text-[1.45rem] font-semibold leading-[1.1]">{note.front}</span>
      )}
      <span aria-hidden="true" className="label mt-auto pt-2 text-ink-2">
        {back ? "← Flip back" : "Why? →"}
      </span>
    </button>
  );
}

const TILTS = [-1.4, 1.1, -0.8, 1.5, -1.2, 0.9, -1.5, 1.2];
