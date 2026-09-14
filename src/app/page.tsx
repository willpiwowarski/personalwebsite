import Nav from "@/components/Nav";
import Section from "@/components/Section";
import {
  about,
  education,
  experience,
  projects,
  projectsIntro,
  site,
  skills,
} from "@/content/site";

// One hue per company / project. Full class strings so Tailwind can see them.
const toneText: Record<string, string> = {
  accent: "text-accent",
  violet: "text-violet",
  cyan: "text-cyan",
  rose: "text-rose",
  blue: "text-blue",
  amber: "text-amber",
};

const toneDot: Record<string, string> = {
  accent: "bg-accent",
  violet: "bg-violet",
  cyan: "bg-cyan",
  rose: "bg-rose",
  blue: "bg-blue",
  amber: "bg-amber",
};

/** Renders {chip:Text} as a soft inline chip and {violet:Text} etc. in that hue. */
function AboutText({ text }: { text: string }) {
  const parts = text.split(
    /(\{(?:chip|accent|amber|cyan|rose|blue|violet):[^}]+\})/g
  );
  return (
    <>
      {parts.map((part, i) => {
        const chip = part.match(/^\{chip:([^}]+)\}$/);
        if (chip)
          return (
            <span key={i} className="font-medium text-text">
              {chip[1]}
            </span>
          );
        const hue = part.match(
          /^\{(accent|amber|cyan|rose|blue|violet):([^}]+)\}$/
        );
        if (hue)
          return (
            <span key={i} className={`font-medium ${toneText[hue[1]]}`}>
              {hue[2]}
            </span>
          );
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-line-soft bg-bg px-2.5 py-1 font-mono text-[11.5px] text-muted">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <div id="top" className="relative z-10">
      <Nav />

      <main className="mx-auto max-w-3xl px-6 pb-24">
        {/* ── Hero ───────────────────────────────────────────────────────── */}
        <section className="hero-glow relative isolate flex flex-col-reverse items-start gap-10 pt-20 sm:pt-28 md:flex-row md:items-start md:justify-between">
          <div data-reveal className="min-w-0 flex-1">
            <h1 className="font-serif text-[44px] leading-[1.05] tracking-[-0.015em] text-text sm:text-[58px]">
              {site.name}
              <span className="cursor" aria-hidden="true" />
            </h1>

            <div className="mt-6 space-y-1.5 text-[15px] sm:text-base">
              <p className="text-text">
                {site.headline} at{" "}
                <span className="font-medium text-violet">{site.company}</span>
              </p>
              <p className="text-muted">{site.schoolLine}</p>
              <p className="text-muted">
                Previously{" "}
                {site.previously.map((p, i) => (
                  <span key={p.label}>
                    <span className="font-medium text-blue">{p.label}</span>
                    {i < site.previously.length - 1 && ", "}
                  </span>
                ))}
              </p>
            </div>

            <p className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent-soft px-3.5 py-1.5 text-[13px] text-accent-dim">
              <span className="pulse-dot relative h-1.5 w-1.5 rounded-full bg-accent" />
              {site.seeking}
            </p>
          </div>

          {site.photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={site.photo}
              alt={site.name}
              data-reveal
              className="h-36 w-36 shrink-0 rounded-2xl border border-line object-cover sm:h-40 sm:w-40"
            />
          ) : (
            <div data-reveal className="flex h-36 w-36 shrink-0 items-center justify-center rounded-2xl border border-dashed border-line bg-panel p-4 text-center text-[12px] leading-relaxed text-muted sm:h-40 sm:w-40">
              add a headshot
              <br />
              to /public
            </div>
          )}
        </section>

        {/* ── 01 About ───────────────────────────────────────────────────── */}
        <Section id="about" num="01" title="About">
          <div data-reveal className="space-y-5 text-[17px] leading-[1.7] text-text/85">
            {about.map((p, i) => (
              <p key={i}>
                <AboutText text={p} />
              </p>
            ))}
          </div>
        </Section>

        {/* ── 02 Experience ──────────────────────────────────────────────── */}
        <Section id="experience" num="02" title="Experience">
          <div className="-mt-2">
            {experience.map((job, i) => (
              <div
                key={`${job.org}-${job.role}`}
                data-reveal
                style={{ "--d": `${i * 70}ms` } as React.CSSProperties}
                className="-mx-4 grid gap-x-8 gap-y-1 rounded-xl border-b border-line-soft px-4 py-5 transition-colors duration-300 hover:bg-panel/70 sm:grid-cols-[172px_1fr_auto]"
              >
                <p className="font-mono text-[12.5px] text-muted sm:pt-1">{job.period}</p>
                <div className="min-w-0">
                  <p className="flex items-center gap-2 text-[16px] font-medium text-text">
                    <span
                      className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                        toneDot[job.tone]
                      }`}
                    />
                    {job.org}
                  </p>
                  <p className="mt-1 text-[15px] text-muted">{job.role}</p>
                </div>
                <p className="font-mono text-[12.5px] text-muted sm:pt-1 sm:text-right">
                  {job.location}
                </p>
              </div>
            ))}

            <p data-reveal className="pt-5 text-[14px] leading-relaxed text-muted">
              <span className="font-medium text-text">{education.school}</span>
              {" — "}
              {education.detail}
              {" · "}
              <a
                href={site.transcript}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
              >
                transcript
              </a>
            </p>
          </div>
        </Section>

        {/* ── 03 Projects ────────────────────────────────────────────────── */}
        <Section id="projects" num="03" title="Projects">
          <p data-reveal className="mb-7 text-[16px] leading-relaxed text-muted">
            {projectsIntro}
          </p>

          <div className="space-y-4">
            {projects.map((p, i) => (
              <article
                key={p.name}
                data-reveal
                data-spotlight
                style={{ "--d": `${i * 80}ms` } as React.CSSProperties}
                className="rounded-2xl border border-line bg-panel p-6 transition-colors duration-300 hover:border-accent/30 sm:p-7"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="flex items-center gap-2.5 font-serif text-[22px] text-text">
                    <span
                      className={`h-2 w-2 shrink-0 rounded-full ${
                        toneDot[p.tone]
                      }`}
                    />
                    {p.name}
                  </h3>
                  {p.badge && (
                    <span className="rounded-full border border-line bg-bg px-2.5 py-0.5 text-[12px] text-muted">
                      Live
                    </span>
                  )}
                </div>

                <p className="mt-4 text-[16px] leading-[1.7] text-text/80">
                  {p.blurb}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>

                {p.link && (
                  <a
                    href={p.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-block text-[14px] font-medium text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
                  >
                    {p.link.label}
                  </a>
                )}
              </article>
            ))}
          </div>

          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            data-reveal
            data-spotlight
            className="group mt-4 flex items-center justify-between gap-4 rounded-2xl border border-line bg-panel px-6 py-5 transition-colors duration-300 hover:border-accent/40"
          >
            <span className="min-w-0">
              <span className="block truncate text-[16px] font-medium text-text">
                github.com{site.githubHandle}
              </span>
              <span className="mt-1 block text-[14px] text-muted">
                The complete archive — personal projects, coursework, and
                experiments.
              </span>
            </span>
            <span className="shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </Section>

        {/* ── 04 Skills ──────────────────────────────────────────────────── */}
        <Section id="skills" num="04" title="Skills">
          <div className="space-y-6">
            {skills.map((g, i) => (
              <div
                key={g.group}
                data-reveal
                style={{ "--d": `${i * 60}ms` } as React.CSSProperties}
                className="grid gap-2.5 sm:grid-cols-[150px_1fr] sm:gap-8"
              >
                <p className="text-[14px] font-medium text-text">{g.group}</p>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((i) => (
                    <Tag key={i}>{i}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── 05 Contact ─────────────────────────────────────────────────── */}
        <Section id="contact" num="05" title="Contact">
          <p data-reveal className="mb-7 max-w-xl font-serif text-[24px] leading-[1.4] text-text sm:text-[27px]">
            I&apos;m looking for a Summer 2027 software engineering internship —
            and always happy to talk about anything someone is building.
          </p>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "LinkedIn", value: site.linkedinHandle, href: site.linkedin },
              { label: "GitHub", value: site.githubHandle, href: site.github },
              { label: "Email", value: site.email, href: `mailto:${site.email}` },
              { label: "Resume", value: "View PDF", href: site.resume },
            ].map((c, i) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                data-reveal
                data-spotlight
                style={{ "--d": `${i * 60}ms` } as React.CSSProperties}
                className="rounded-2xl border border-line bg-panel px-5 py-4 transition-colors duration-300 hover:border-accent/40"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted">
                  {c.label}
                </p>
                <p className="mt-2 break-words text-[13.5px] font-medium text-text">
                  {c.value}
                </p>
              </a>
            ))}
          </div>
        </Section>

        <footer className="mt-20 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-7 text-[13px] text-muted">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <span className="flex items-center gap-2 font-mono text-[12px]">
            <span className="pulse-dot relative h-1.5 w-1.5 rounded-full bg-accent" />
            <span id="local-time" />
          </span>
        </footer>
      </main>
    </div>
  );
}
