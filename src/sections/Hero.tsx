import { profile } from "../data/profile";
import QuickInfoCard from "../components/QuickInfoCard";

export default function Hero() {
  return (
    <section className="mx-6 mt-10 rounded-xl bg-sageSoft border border-borderSubtle/60">
      {/* Option A: wider hero wrapper (does not affect other sections) */}
      <div className="mx-auto w-full max-w-[1600px] px-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-20 items-start">
          {/* LEFT: main hero */}
          <div className="min-w-0">
            <p className="text-sm text-inkMuted">{profile.location}</p>

            <div className="mt-4 flex items-start gap-4">
              <div className="mt-2 h-14 w-1 rounded-full bg-sage" />
              <div className="min-w-0">
                <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight text-ink sm:whitespace-nowrap">
                  {profile.headlineName}
                </h1>

                <h2 className="mt-3 text-2xl font-medium text-inkMuted">
                  {profile.roleLine}
                </h2>
              </div>
            </div>

            <p className="mt-6 text-lg text-inkMuted">
               Full-stack engineer focused on building reliable APIs and clean, maintainable user interfaces.<br/>
React + TypeScript, Spring Boot, AWS, PostgreSQL.
            </p>

            <div className="mt-10 flex flex-wrap gap-3 text-sm">
              <a
                href="#projects"
                className="rounded-xl bg-ink text-white px-4 py-2 hover:opacity-90 transition"
              >
                View Projects
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="rounded-xl border border-borderSubtle/60 bg-surface px-4 py-2 hover:bg-sageSoft transition"
              >
                Email
              </a>
            </div>
          </div>

          {/* RIGHT: quick info card */}
          <div className="lg:pt-6 lg:pl-6 flex justify-end">
            <QuickInfoCard />
          </div>
        </div>
      </div>
    </section>
  );
}
