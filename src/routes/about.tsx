import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Inside the atelier — Maison Cremisi" },
      {
        name: "description",
        content:
          "Maison Cremisi is a small house designing in numbered editions from a quiet atelier.",
      },
      { property: "og:title", content: "Inside the atelier — Maison Cremisi" },
      {
        property: "og:description",
        content: "A small house designing in numbered editions.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-xs uppercase tracking-[0.3em] text-accent">The house</p>
      <h1 className="mt-4 font-display text-5xl leading-tight text-primary md:text-6xl">
        We make a few things, and we make them carefully.
      </h1>
      <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground">
        <p>
          Maison Cremisi began with a single leather tote and an unhurried
          conviction: that fewer, better objects can shape a more considered
          life. Today the house designs in four disciplines — leather, silk,
          timepieces and fragrance — and never more than a handful of pieces
          at a time.
        </p>
        <p>
          Every edition is numbered. Every box passes through the same pair of
          hands. We choose suppliers we can visit, materials we can name, and
          finishes that gain their character with use.
        </p>
        <p>
          Thank you for being here. We hope what you find feels worth keeping.
        </p>
      </div>
    </section>
  );
}
