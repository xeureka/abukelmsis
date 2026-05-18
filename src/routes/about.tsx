import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Truck, ShieldCheck, MapPin, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — አቡቀለምሲስ" },
      {
        name: "description",
        content: "ስለ አቡቀለምሲስ — በፍቅር የተሰናዳ መንፈሳዊ መጽሐፍት እና ሥጦታዎች ሱቅ።",
      },
    ],
  }),
  component: AboutPage,
});

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background py-24 md:py-32">
      {/* Decorative Background Element */}
      <div className="absolute top-0 -z-10 h-full w-full bg-[radial-gradient(circle_at_50%_-20%,hsl(var(--accent)/0.15),transparent_50%)]" />

      <section className="mx-auto max-w-6xl px-6">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both text-center md:text-left">
          <h1 className="font-display text-7xl font-extrabold tracking-tight text-accent md:text-8xl">
            አቡቀለምሲስ
          </h1>
          <p className="mt-4 text-xl font-medium uppercase tracking-[0.2em] text-muted-foreground/80">
            Abukelemsis Spiritual Gifts
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Main Story */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="space-y-8 text-lg leading-relaxed text-foreground/90"
          >
            <div className="space-y-4 border-l-4 border-accent pl-6">
              <p className="font-semibold text-accent/90 italic">
                "ጥራት መለያችን ✨ ፍጥነት እና ታማኝነት ዘውትር የምንመሰገንበት ነው — ይመርጡናል እንጂ አያወዳድሩንም።"
              </p>
              <p>
                አቡቀለምሲስ — በፍቅር የተሰናዳ{" "}
                <span className="text-accent font-medium text-xl">
                  መንፈሳዊ መጽሐፍት፣ ሥጦታዎች እና ጥበባዊ ንብረቶች።
                </span>
              </p>
            </div>

            <p className="text-muted-foreground">
              Thank you for supporting our journey. Your trust in Abukelemsis is the heartbeat of
              our growth. We curate every item with soul, ensuring that what reaches your hands is
              more than just a product—it's an experience.
            </p>

            <div className="pt-4">
              <p className="mb-2 text-sm font-bold uppercase tracking-widest text-muted-foreground">
                Contact Support
              </p>
              <a
                href="https://t.me/Matiyeyohans"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-accent transition-all"
              >
                {/* The color #24A1DE is the official Telegram Blue */}
                <Send
                  fill="#24A1DE"
                  stroke="#24A1DE"
                  className="h-5 w-5 transition-transform group-hover:rotate-12 group-hover:scale-110"
                />
                <span className="font-medium group-hover:underline decoration-2">
                  @Matiyeyohans
                </span>
              </a>
            </div>
          </motion.div>

          {/* Contact & Location Card */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.3 }}
            className="relative rounded-3xl border border-border/50 bg-card/40 p-8 backdrop-blur-sm shadow-2xl shadow-accent/5"
          >
            <h3 className="mb-8 font-display text-2xl font-bold">Visit Us</h3>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">Our Location</p>
                  <p className="text-muted-foreground">
                    ልደታ ፍርድ ቤት ፊት ለፊት ፖስት የገበያ ማዕከል 2ተኛ ፎቅ (ቁጥር 222)
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">Reach Out</p>
                  <p className="font-display text-2xl font-bold text-accent tracking-tighter">
                    0963469973 <span className="mx-2 text-border">|</span> 0973133334
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Grid */}
        <div className="mt-24 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Feature
            delay={0.4}
            icon={<Sparkles />}
            title="Premium Quality"
            desc="Exclusively curated spiritual pieces from the most trusted sources."
          />
          <Feature
            delay={0.5}
            icon={<Truck />}
            title="Fast Delivery"
            desc="Efficient and reliable shipping that respects your time."
          />
          <Feature
            delay={0.6}
            icon={<ShieldCheck />}
            title="Secure Service"
            desc="Your peace of mind and satisfaction are our absolute priorities."
          />
        </div>
      </section>
    </main>
  );
}

function Feature({
  icon,
  title,
  desc,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      className="group rounded-2xl border border-border/50 bg-card/50 p-8 transition-all hover:border-accent/50 hover:bg-accent/[0.02]"
    >
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent transition-transform group-hover:scale-110">
        {icon}
      </div>
      <h3 className="mb-2 font-display text-xl font-bold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
    </motion.div>
  );
}
