import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BlockRenderer } from "@/components/BlockRenderer";
import { Delta } from "@/components/Delta";
import { SectionNav, type Section } from "@/components/SectionNav";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { ACCENTS } from "@/content/palette";
import { StudyJar } from "@/components/StudyJar";

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

      <header className="pt-8 pb-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">
          <div className="min-w-0 flex-1">
            <h1 className="display max-w-[19ch] text-[2.3rem] sm:text-[3.2rem]">
              {study.question}
            </h1>

            {!study.details && (
              <div className="mt-10">
                <p className="label text-ink-3">Client</p>
                <p className="label mt-1.5" style={{ color: tint }}>
                  {study.company}
                </p>
              </div>
            )}
          </div>

          {/* A study with its own hero animation shows that full width
              below instead of the jar. */}
          {!study.heroVideo && (
            <div className="w-full max-w-sm shrink-0 self-center lg:w-[38%]">
              <StudyJar accent={study.accent} />
            </div>
          )}
        </div>

        {study.standfirst && (
          <p className="mt-12 max-w-2xl text-[1.02rem] leading-[1.75] text-ink-2">
            {study.standfirst}
          </p>
        )}

        <div className="mt-9 flex flex-wrap gap-x-12 gap-y-6">
          {study.deltas.map((delta) => (
            <Delta key={delta.label} delta={delta} size="lg" tint={tint} />
          ))}
        </div>

        <dl className="mt-14 grid gap-x-10 gap-y-7 border-t border-rule pt-8 sm:grid-cols-2 lg:max-w-4xl">
          {meta.map((item) => (
            <div key={item.label}>
              <dt className="label text-ink-3">
                {item.label}
              </dt>
              <dd className="mt-2 text-[0.95rem] leading-relaxed text-ink">
                {item.value}
              </dd>
            </div>
          ))}

          {study.team && study.team.length > 0 && (
            <div>
              <dt className="label text-ink-3">
                Team
              </dt>
              <dd className="mt-2 space-y-2">
                {study.team.map((member) => (
                  <p key={member.name} className="text-[0.95rem] leading-snug">
                    <span className="text-ink">{member.name}</span>
                    <span className="block text-[0.85rem] text-ink-3">
                      {member.scope}
                    </span>
                  </p>
                ))}
              </dd>
            </div>
          )}

          {study.tools && study.tools.length > 0 && (
            <div>
              <dt className="label text-ink-3">
                Tools
              </dt>
              <dd className="mt-2 flex flex-wrap gap-1.5">
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

        {study.heroVideo && (
          <figure className="mt-14 overflow-hidden border border-rule bg-paper-deep">
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
