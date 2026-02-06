import { useState } from "react";
import Section from "../components/Section";
import { profile } from "../data/profile";
import { Briefcase, ChevronDown, ChevronUp } from "lucide-react";

export default function Experience() {
  // store expanded card keys
  const [open, setOpen] = useState<Record<string, boolean>>({});

function toggle(key: string) {
  setOpen((prev) => {
    const next: Record<string, boolean> = {};
    next[key] = !prev[key];
    return next;
  });
}


  return (
    <Section id="experience" title="Experience" subtitle="Relevant professional experience">
      <div className="relative">
        {/* Vertical rail */}
        <div className="absolute left-5 top-0 h-full w-px bg-borderSubtle/70" />

        <div className="space-y-10">
          {profile.experience.map((e) => {
            const key = `${e.company}-${e.role}-${e.dates}`;
            const isOpen = !!open[key];

            return (
              <div key={key} className="relative pl-14">
                {/* Icon node */}
                <div className="absolute left-0 top-6 flex h-10 w-10 items-center justify-center rounded-xl border border-borderSubtle/60 bg-sageSoft">
                  <Briefcase size={18} className="text-ink" />
                </div>

                {/* Card */}
                <div className="rounded-xl border border-borderSubtle/60 bg-surface p-6 border-t-4 border-t-sage">
                  {/* Header row */}
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight">{e.role}</h3>
                      <p className="text-sm text-inkMuted">{e.company}</p>
                    </div>
                    <p className="text-sm text-inkMuted">{e.dates}</p>
                  </div>

                  {/* Summary (always visible) */}
                  {e.summary ? (
                    <p className="mt-4 text-sm text-inkMuted">{e.summary}</p>
                  ) : null}

                  {/* Expand / Collapse */}
                  <div className="mt-5">
                    <button
                      type="button"
                      onClick={() => toggle(key)}
                      className="inline-flex items-center gap-2 rounded-lg border border-borderSubtle/60 bg-surface px-3 py-2 text-sm text-ink hover:bg-sageSoft transition"
                      aria-expanded={isOpen}
                      aria-controls={`${key}-details`}
                    >
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                  </div>

                  {/* Details (collapsible) */}
                  {isOpen ? (
                    <div id={`${key}-details`} className="mt-5 border-t border-borderSubtle/60 pt-5">
                      {e.bullets?.length ? (
                        <ul className="list-disc space-y-2 pl-5 text-sm text-inkMuted leading-relaxed">
                          {e.bullets.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      ) : null}

                      {e.tags?.length ? (
                        <div className="mt-5 flex flex-wrap gap-2">
                          {e.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded-md border border-borderSubtle/60 bg-sageSoft px-2 py-1 text-xs text-inkMuted"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
