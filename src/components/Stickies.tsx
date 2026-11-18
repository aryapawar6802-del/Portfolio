import { STICKY } from "@/content/palette";
import type { Sticky } from "@/content/types";
import { StickyNote } from "./StickyNote";

/**
 * Lays a section out with its sticky notes in a right-hand margin on wide
 * screens. Below that the notes drop under the section as a small grid.
 * With `on` false (a study with no notes) it adds nothing at all, so those
 * pages keep their full reading width.
 */
export function NoteMargin({
  on,
  notes,
  children,
}: {
  on: boolean;
  notes: Sticky[];
  children: React.ReactNode;
}) {
  if (!on) return <>{children}</>;
  return (
    <div className="xl:grid xl:grid-cols-[minmax(0,1fr)_12rem] xl:gap-8">
      <div className="min-w-0">{children}</div>
      {notes.length > 0 && (
        <aside
          aria-label="Sticky notes for this section"
          className="mt-8 grid grid-cols-[repeat(auto-fill,minmax(11.5rem,1fr))] items-start gap-5 xl:mt-1 xl:grid-cols-1 xl:gap-6 xl:self-start"
        >
          {notes.map((note) => (
            <StickyNote key={note.id} note={note} />
          ))}
        </aside>
      )}
    </div>
  );
}

/** The key above the first section: what each colour means. */
export function StickyLegend() {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3 rounded-control border border-dashed border-rule-strong px-4 py-3">
      <p className="font-hand text-[1.3rem] font-semibold leading-tight text-ink">
        The sticky notes are the real calls from this project. Click one to flip it.
      </p>
      <ul className="flex flex-wrap gap-x-5 gap-y-2">
        {Object.values(STICKY).map((kind) => (
          <li key={kind.label} className="flex items-center gap-2 text-[0.85rem] text-ink-2">
            <span aria-hidden="true" className="h-3.5 w-3.5 rounded-[2px]" style={{ backgroundColor: kind.bg }} />
            {kind.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Every note from the study, together, the way the wall looked at the end. */
export function StickyBoard({ notes }: { notes: Sticky[] }) {
  return (
    <section aria-labelledby="board-title" className="rounded-panel bg-paper-deep px-6 py-10 sm:px-10">
      <h2 id="board-title" className="display text-[1.9rem] sm:text-[2.4rem]">
        The board, at the end
      </h2>
      <p className="mt-3 max-w-prose leading-[1.7] text-ink-2">
        Every call from this project in one place, the way the wall looked when it shipped.
      </p>
      <div className="mt-9 grid grid-cols-[repeat(auto-fill,minmax(11.5rem,1fr))] items-start gap-6">
        {notes.map((note) => (
          <StickyNote key={note.id} note={note} />
        ))}
      </div>
    </section>
  );
}
