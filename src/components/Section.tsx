import type { ReactNode } from "react";
import Container from "./Container";

export default function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <Container>
        <div className="mb-10">
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          {subtitle ? <p className="mt-2 text-inkMuted">{subtitle}</p> : null}
        </div>
        {children}
      </Container>
    </section>
  );
}
