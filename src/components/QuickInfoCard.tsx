import { profile } from "../data/profile";

export default function QuickInfoCard() {
  return (
    <div className="rounded-xl border border-borderSubtle/60 bg-surface p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          {/* <div className="text-sm font-semibold text-ink">Quick Info</div>
          <div className="mt-1 text-xs text-inkMuted">Recruiter shortcuts</div> */}
        </div>
        {/* <span className="rounded-full bg-sageSoft px-2 py-1 text-xs text-ink">
          Available
        </span> */}
      </div>

      <div className="mt-4 space-y-2 text-sm text-ink">
        <div className="flex justify-between gap-4">
          <span className="text-inkMuted">Location</span>
          <span>{profile.location}</span>
        </div>

        <div className="flex justify-between gap-4">
          <span className="text-inkMuted">Role</span>
          <span>Java Full Stack</span>
        </div>

        <div className="flex justify-between gap-4">
          <span className="text-inkMuted">Stack</span>
          <span>Java • Spring Boot • React • AWS</span>
        </div>

        {/* OPTIONAL: edit this line with your status */}
        <div className="flex justify-between gap-4">
          <span className="text-inkMuted">Work status</span>
          <span>Open to full-time</span>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <a
          href={profile.links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-borderSubtle px-3 py-2 text-sm hover:bg-sageSoft transition"
        >
          LinkedIn
        </a>

        <a
          href={profile.links.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-borderSubtle px-3 py-2 text-sm hover:bg-sageSoft transition"
        >
          GitHub
        </a>

        {profile.links.resume ? (
          <a
            href={profile.links.resume}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-ink text-white px-3 py-2 text-sm hover:opacity-90 transition"
          >
            Resume
          </a>
        ) : null}

        <a
          href={`mailto:${profile.email}`}
          className="rounded-lg bg-ink text-white px-3 py-2 text-sm hover:opacity-90 transition"
        >
          Email
        </a>
      </div>
    </div>
  );
}
