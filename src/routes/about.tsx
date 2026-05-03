import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Truck, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — አቡቀለምሲስ" },
      {
        name: "description",
        content: "ስለ አቡቀለምሲስ — በፍቅር የተሰናዳ መንፈሳዊ መጽሐፍት እና ሥጦታዎች ሱቅ።",
      },
      { property: "og:title", content: "About — አቡቀለምሲስ" },
      { property: "og:description", content: "ስለ አቡቀለምሲስ — በፍቅር የተሰናዳ።" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="font-display text-6xl font-bold text-accent md:text-7xl">
        አቡቀለምሲስ
      </h1>

      <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-foreground md:text-lg">
        <p>
          ውድ ደንበኞቻችን ✨ ለአገልግሎት ጥራት እንዲያመች የበዓል ትዕዛዞቻችሁን ቀደም ብላችሁ ብታዙን
          ስንል በትህትና እንጠይቃለን 🤍
        </p>
        <p>
          አቡቀለምሲስ — በፍቅር የተሰናዳ <strong>መንፈሳዊ መጽሐፍት፣ ሥጦታዎች እና ጥበባዊ
          ንብረቶች።</strong>
        </p>
        <p>
          ጥራት መለያችን ✨ ፍጥነት እና ታማኝነት ዘውትር የምንመሰገንበት ነው 🎁 —
          <strong> ይመርጡናል እንጂ አያወዳድሩንም።</strong>
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
        <Feature
          icon={<Sparkles className="h-5 w-5" />}
          title="Premium Quality"
          desc="Curated from the best sources."
        />
        <Feature
          icon={<Truck className="h-5 w-5" />}
          title="Fast Delivery"
          desc="Shipping that keeps up with you."
        />
        <Feature
          icon={<ShieldCheck className="h-5 w-5" />}
          title="Secure Service"
          desc="Your trust is always protected."
        />
      </div>

      <div className="mt-16 max-w-3xl space-y-3 text-foreground">
        <p>የሱቃችን አድራሻ ስታዲየም ቤተዛታ ሆስፒታል ጀርባ</p>
        <p>
          አን ቢዝነስ ሴንተር (የድሮ ጫካ ቡና የነበረበት) የመጀመሪያው ፎቅ ላይ ነው — ይምጡ እና
          ይጎብኙን 🤗
        </p>
        <p className="font-display text-2xl text-accent">
          0963469973 · 0973133334
        </p>
      </div>
    </section>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-lg border-l-2 border-accent bg-card/60 p-6">
      <div className="flex items-center gap-3">
        <span className="text-accent">{icon}</span>
        <h3 className="font-display text-xl font-semibold text-accent">
          {title}
        </h3>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}
