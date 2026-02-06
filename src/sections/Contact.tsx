import Section from "../components/Section";
import { profile } from "../data/profile";

export default function Contact() {
  return (
    <Section id="contact" title="Contact" subtitle="Fastest way to reach me">
      <div className="rounded-xl border border-borderSubtle bg-surface p-6">
        <p className="text-inkMuted">
          Email:{" "}
          <a className="underline underline-offset-4" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <br/>Mobile: +1 (514) 814-2085
        </p>
      </div>
    </Section>
  );
}
