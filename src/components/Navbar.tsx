import Container from "./Container";
import { profile } from "../data/profile";

export default function Navbar() {


  return (
    <header className="sticky top-0 z-50 border-b border-borderSubtle bg-background/90 backdrop-blur">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <div>
            <div className="font-medium text-sm text-ink">
              {profile.headlineName}
            </div>
            <div className="text-xs text-inkMuted">{profile.roleLine}</div>
          </div>

          <nav className="flex items-center gap-5 text-sm text-inkMuted">
           <a className="hover:text-ink" href="#projects">Projects</a>
<a className="hover:text-ink" href="#experience">Experience</a>
<a className="hover:text-ink" href="#contact">Contact</a>


            <a className="hover:text-ink" href={profile.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="hover:text-ink" href={profile.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            {profile.links.resume && (
              <a className="hover:text-ink" href={profile.links.resume} target="_blank" rel="noreferrer">
                Resume
              </a>
            )}
          </nav>
        </div>
      </Container>
    </header>
  );
}

