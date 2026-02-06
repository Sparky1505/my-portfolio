import Section from "../components/Section";
import { profile } from "../data/profile";

export default function Projects() {
  const top = profile.projects.slice(0, 9);

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Top projects that represent my work"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {top.map((p) => (
          <div
            key={p.name}
className="rounded-xl border border-borderSubtle bg-surface p-6 border-t-4 border-t-sage"
          >
            <h3 className="font-semibold">{p.name}</h3>
            <p className="mt-3 text-sm text-inkMuted">{p.description}</p>

            <p className="mt-4 text-xs text-inkMuted">{p.tech.join(" • ")}</p>

            <div className="mt-5 flex gap-4 text-sm">
              {p.links.github ? (
                <a className="underline underline-offset-4" href={p.links.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              ) : (
                <span className="text-inkMuted">GitHub</span>
              )}

              {p.links.live ? (
                <a className="underline underline-offset-4" href={p.links.live} target="_blank" rel="noreferrer">
                  Live
                </a>
              ) : (
                <span className="text-inkMuted">Live</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
