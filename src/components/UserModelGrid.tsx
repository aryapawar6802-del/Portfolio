/**
 * The discovery study's user model: 6 capabilities across 5 levels, with
 * the user types that sit in each cell. A real table, so the rows and
 * columns stay readable to a screen reader; the block around it scrolls
 * sideways on phones rather than shrinking the type, with the capability
 * names pinned and the title and footnote wrapped to the screen.
 */

type Cell = { types: string[]; note?: string } | null;

const LEVELS = [
  { name: "Plant", reach: "1+ plants" },
  { name: "Bottler region", reach: "a region" },
  { name: "Bottler", reach: "1 whole bottler" },
  { name: "Regional team", reach: "many bottlers" },
  { name: "Global", reach: "~2,000 plants" },
];

const CAPABILITIES: { name: string; does: string; cells: Cell[] }[] = [
  {
    name: "Data operator",
    does: "Submit data, see results",
    cells: [
      { types: ["Plant teams"] },
      { types: ["Regional heads"] },
      { types: ["Bottler central", "Bottler admins"] },
      { types: ["OU users (TBD)", "OU admins"] },
      { types: ["Global admin", "Global viewers"] },
    ],
  },
  {
    name: "Access manager",
    does: "Add users, assign plants",
    cells: [
      null,
      null,
      { types: ["Bottler admins"] },
      { types: ["OU admins"] },
      { types: ["Global admin"] },
    ],
  },
  {
    name: "Content manager",
    does: "Edit forms and rules",
    cells: [null, null, null, null, { types: ["Global admin", "Content team"] }],
  },
  {
    name: "Deployment manager",
    does: "Coordinate rollouts",
    cells: [
      null,
      null,
      { types: ["Bottler head"], note: "view only" },
      { types: ["OU users"], note: "view only" },
      { types: ["Global admin", "Deploy leads"] },
    ],
  },
  {
    name: "Programme monitor",
    does: "Mission Control",
    cells: [null, null, null, null, { types: ["Global admin", "Global viewers"] }],
  },
  {
    name: "System maintainer",
    does: "Backend and code",
    cells: [null, null, null, null, { types: ["Tech team only"] }],
  },
];

export function UserModelGrid({ tint, wash }: { tint: string; wash: string }) {
  return (
    <div>
      <table className="w-full table-fixed border-collapse">
        <caption className="pb-6 text-left">
          <span className="block max-w-[calc(100vw-6.5rem)] sm:max-w-none text-[1.05rem] font-semibold leading-snug text-ink">
            Everyone can enter data. Only the global team can change the rules.
          </span>
          <span className="mt-1.5 block max-w-[calc(100vw-6.5rem)] sm:max-w-none text-[0.85rem] leading-snug text-ink-3">
            17 user types, 6 capabilities, 5 levels. A filled cell means that role
            can do that, at that level.
          </span>
        </caption>

        <thead>
          <tr>
            <th scope="col" className="w-[23%] pb-3 text-left align-bottom text-[0.78rem] font-normal text-ink-3">
              Capability
            </th>
            {LEVELS.map((level) => (
              <th key={level.name} scope="col" className="px-1 pb-3 align-bottom font-normal">
                <span className="block text-[0.82rem] font-semibold leading-snug text-ink">
                  {level.name}
                </span>
                <span className="mt-0.5 block text-[0.74rem] leading-snug text-ink-3">
                  {level.reach}
                </span>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {CAPABILITIES.map((capability) => (
            <tr key={capability.name} className="border-t border-rule">
              <th scope="row" className="sticky left-0 z-10 bg-white py-1.5 pr-3 text-left align-middle font-normal sm:static sm:bg-transparent">
                <span className="block text-[0.85rem] font-semibold leading-snug text-ink">
                  {capability.name}
                </span>
                <span className="mt-0.5 block text-[0.74rem] leading-snug text-ink-3">
                  {capability.does}
                </span>
              </th>
              {capability.cells.map((cell, i) => (
                <td key={LEVELS[i].name} className="h-[4.25rem] p-1 align-middle">
                  {cell && (
                    <div
                      className="flex h-full min-h-[3.75rem] flex-col items-center justify-center rounded-lg border-[1.5px] px-1 text-center text-[0.74rem] leading-[1.35] text-ink"
                      style={{ borderColor: tint, backgroundColor: wash }}
                    >
                      {cell.types.map((type) => (
                        <span key={type}>{type}</span>
                      ))}
                      {cell.note && <span className="text-ink-3">{cell.note}</span>}
                    </div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <p className="mt-5 border-t border-rule pt-4 text-[0.8rem] leading-snug text-ink-3">
        <span className="block max-w-[calc(100vw-6.5rem)] sm:max-w-none">
          OU = the regional operating team. What OU users can do in data entry was
          still unconfirmed when discovery ended.
        </span>
      </p>
    </div>
  );
}
