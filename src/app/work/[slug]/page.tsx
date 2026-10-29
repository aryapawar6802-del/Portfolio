import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BlockRenderer } from "@/components/BlockRenderer";
import { Delta } from "@/components/Delta";
import { SectionNav, type Section } from "@/components/SectionNav";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { ACCENTS } from "@/content/palette";
import { StudyJar } from "@/components/StudyJar";
import { SimulatorHero } from "@/components/SimulatorHero";
import { CpgStillLife } from "@/components/CpgStillLife";
import { RetailStillLife } from "@/components/RetailStillLife";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return { title: `${study.title} — ${study.company}`, description: study.summary };
}

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const index = caseStudies.findIndex((s) => s.slug === slug);
  const next = caseStudies[(index + 1) % caseStudies.length];

  /* Any block with an eyebrow (or a `nav` label) becomes both an anchor and
     a TOC stop. The index suffix keeps ids unique when a framework repeats a
     beat name. */
  const anchors = study.body.map((block, i) => {
    const label =
      ("eyebrow" in block && block.eyebrow) || ("nav" in block && block.nav);
    return label ? { id: `${slugify(label)}-${i}`, label } : null;
  });
  const sections: Section[] = anchors.filter((a): a is Section => a !== null);

  const tint = ACCENTS[study.accent].ink;

  const meta = study.details ?? [
    { label: "Role", value: study.role },
    { label: "Timeline", value: study.timeline },
    { label: "Status", value: `${study.status} · ${study.years}` },
    { label: "Platform", value: study.platform },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 pt-10 sm:px-8">
      <nav aria-label="Breadcrumb">
        <Link
          href="/"
          className="label text-ink-3 transition-colors hover:text-ink"
        >
          ← Work
        </Link>
      </nav>

      {/* One glance: the title, the story so far and the facts side by side,
          then the hero animation. Everything a reader needs before the
          long read starts. */}
      <header className="pt-6 pb-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <h1 className="display max-w-[26ch] text-balance text-[2.3rem] sm:text-[3.2rem]">
            {study.question}
          </h1>
          {study.illustration === "cpg" && (
            <CpgStillLife className="w-full max-w-md shrink-0 lg:w-[40%]" />
          )}
          {study.illustration === "retail" && (
            <RetailStillLife className="w-full max-w-md shrink-0 lg:w-[40%]" />
          )}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16">
          {study.standfirst && (
            <p className="max-w-2xl text-[1.05rem] leading-[1.75] text-ink-2">
              {study.standfirst}
            </p>
          )}

          <div>
            {/* The simulator animation already ends on its 4 → 1 result, so
                its study skips the numbers here (they still show on the
                home page card). */}
            {study.deltas.length > 0 && !study.heroArt && (
              <div className="mb-7 flex flex-wrap gap-x-10 gap-y-5">
                {study.deltas.map((delta) => (
                  <Delta key={delta.label} delta={delta} size="md" tint={tint} />
                ))}
              </div>
            )}

            <dl className="grid grid-cols-2 gap-x-8 gap-y-5">
              {meta.map((item) => (
                <div key={item.label}>
                  <dt className="label text-ink-3">{item.label}</dt>
                  <dd className="mt-1.5 text-[0.9rem] leading-snug text-ink">
                    {item.value}
                  </dd>
                </div>
              ))}

              {study.team && study.team.length > 0 && (
                <div className="col-span-2">
                  <dt className="label text-ink-3">Team</dt>
                  <dd className="mt-1.5 space-y-1.5">
                    {study.team.map((member) => (
                      <p key={member.name} className="text-[0.9rem] leading-snug">
                        <span className="text-ink">{member.name}</span>
                        <span className="text-ink-3"> · {member.scope}</span>
                      </p>
                    ))}
                  </dd>
                </div>
              )}

              {study.tools && study.tools.length > 0 && (
                <div className="col-span-2">
                  <dt className="label text-ink-3">Tools</dt>
                  <dd className="mt-1.5 flex flex-wrap gap-1.5">
                    {study.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-chip bg-paper-deep px-2.5 py-1 text-[0.78rem] text-ink-2"
                      >
                        {tool}
                      </span>
                    ))}
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </div>

        {study.heroVideo ? (
          <figure className="mt-12 overflow-hidden border border-rule bg-paper-deep">
            <video
              autoPlay
              muted
              loop
              playsInline
              aria-label={study.heroVideo.alt}
              className="block h-auto w-full"
              style={{ aspectRatio: String(study.heroVideo.ratio) }}
            >
              <source src={study.heroVideo.mp4} type="video/mp4" />
              {/* Plain img: next/image would re-encode the GIF and drop the
                  animation. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={study.heroVideo.gif}
                alt={study.heroVideo.alt}
                className="block h-auto w-full"
              />
            </video>
          </figure>
        ) : study.heroArt === "simulator" ? (
          <figure className="mt-12 overflow-hidden border border-rule">
            <SimulatorHero label="Animation: the old simulator was one crowded page, run four times for four brands and stitched together in a spreadsheet. The new one starts with three intent cards and runs one five-stage journey, so four runs become one." />
          </figure>
        ) : (
          <div className="mx-auto mt-12 w-full max-w-sm">
            <StudyJar accent={study.accent} />
          </div>
        )}
      </header>

      <div className="lg:flex lg:items-start lg:gap-16">
        <SectionNav sections={sections} />

        <div className="min-w-0 flex-1 space-y-20 pb-20 lg:max-w-3xl">
        {study.body.map((block, i) => (
          <BlockRenderer
            key={i}
            block={block}
            id={anchors[i]?.id}
            accent={study.accent}
          />
        ))}
        </div>
      </div>

      <nav className="border-t border-rule py-12">
        <p className="label text-ink-3">
          Next
        </p>
        <Link href={`/work/${next.slug}`} className="group mt-3 block">
          <span className="display text-[2rem] transition-colors group-hover:text-accent">
            {next.title}
          </span>
          <span className="ml-2 inline-block text-accent transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </nav>
    </div>
  );
}
