import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

export const Route = createFileRoute("/checkout/success")({
  head: () => ({
    meta: [
      { title: "Order confirmed — Maison Cremisi" },
      { name: "description", content: "Thank you. Your order has been confirmed." },
    ],
  }),
  component: Success,
});

function Success() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-6 py-32 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-elegant">
        <Check className="h-7 w-7" />
      </div>
      <p className="mt-8 text-xs uppercase tracking-[0.3em] text-accent">Order confirmed</p>
      <h1 className="mt-4 font-display text-5xl text-primary">Thank you.</h1>
      <p className="mt-4 text-muted-foreground">
        Your pieces are being prepared at the atelier. A confirmation has been sent to
        your inbox.
      </p>
      <Link
        to="/"
        className="mt-10 inline-flex items-center rounded-sm bg-primary px-8 py-4 text-xs uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-accent"
      >
        Continue browsing
      </Link>
    </section>
  );
}
