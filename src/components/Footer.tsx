import Container from "./Container";
import { profile } from "../data/profile";
import { Linkedin, Github } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-borderSubtle bg-background">
      <Container>
        <div className="py-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Left */}
          <div>
           <div className="text-xs text-inkMuted">
              © {year} {profile.headlineName} • {profile.location}
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-3 sm:items-end">
            <div className="flex items-center gap-4 text-inkMuted">
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
className="p-1 rounded hover:bg-sageSoft transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={25} />
              </a>

              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
className="p-1 rounded hover:bg-sageSoft transition"
                aria-label="GitHub"
              >
                <Github size={25} />
              </a>

              {profile.links.resume ? (
                <a
                  href={profile.links.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm hover:text-ink transition"
                >
                  Resume
                </a>
              ) : null}
            </div>

            
          </div>
        </div>
      </Container>
    </footer>
  );
}
