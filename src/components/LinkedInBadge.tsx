import { useEffect, useRef } from "react";

type Props = {
  vanity: string;
  theme?: "light" | "dark";
};

export default function LinkedInBadge({
  vanity,
  theme = "light",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // LinkedIn script scans DOM on load only.
    // Force a re-scan when component mounts.
    if ((window as any).IN && (window as any).IN.parse) {
      (window as any).IN.parse(ref.current);
    }
  }, []);

  return (
    <div ref={ref}>
      <div
        className="badge-base LI-profile-badge"
        data-locale="en_US"
        data-size="large"
        data-theme={theme}
        data-type="HORIZONTAL"
        data-vanity={vanity}
        data-version="v1"
      >
        <a
          className="badge-base__link LI-simple-link"
          href={`https://www.linkedin.com/in/${vanity}`}
          target="_blank"
          rel="noreferrer"
        >
          {vanity}
        </a>
      </div>
    </div>
  );
}
