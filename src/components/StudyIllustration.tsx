import { CpgStillLife } from "./CpgStillLife";
import { RetailStillLife } from "./RetailStillLife";
import { TangleToGrid } from "./TangleToGrid";
import type { StudyIllustrationName } from "@/content/types";

const ILLUSTRATIONS = {
  cpg: CpgStillLife,
  retail: RetailStillLife,
  tangle: TangleToGrid,
};

/** A study's illustration by name, used on its card and beside its title. */
export function StudyIllustration({
  name,
  className,
}: {
  name: StudyIllustrationName;
  className?: string;
}) {
  const Illustration = ILLUSTRATIONS[name];
  return <Illustration className={className} />;
}
