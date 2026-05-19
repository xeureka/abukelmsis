import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "አቡቀለምሲስ — መንፈሳዊ መጽሐፍት እና ስጦታዎች" },
      {
        name: "description",
        content: "አቡቀለምሲስ — የጥበብ እና የመንፈሳዊነት መገኛ። ጥራት መለያችን።",
      },
      { property: "og:title", content: "አቡቀለምሲስ — መንፈሳዊ መጽሐፍት እና ስጦታዎች" },
      {
        property: "og:description",
        content: "ጥራት መለያችን። ፍጥነት እና ታማኝነት ዘውትር የምንመሰገንበት ነው።",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Home,
});

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.2 } },
};

function Home() {
  // Logic Fix: slice(0, 8) gets the first 8 products. 
  // We remove the second 'handpicked' section entirely to omit the last row duplication.
  const displayedProducts = products.slice(0, 8);

  return (
    <>
      {/* --- MODERN HERO SECTION --- */}
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-20 md:grid-cols-2 md:py-32">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="flex flex-col justify-center"
          >
            <motion.span variants={fadeInUp} className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-accent">
              Established Excellence
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-display text-6xl font-bold leading-[1.1] md:text-8xl">
              <span className="text-foreground">Discover </span>
              <span className="text-gradient-silver italic">አቡቀለምሲስ</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
              ጥራት መለያችን✨<br />
              ፍጥነት እና ታማኝነት ዘውትር የምንመሰገንበት ነው 🎁 <br />
              ይመርጡናል እንጂ አያወዳድሩንም✨
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-10 flex items-center gap-6">
              <Link
                to="/shop"
                className="rounded-full bg-primary px-10 py-4 text-sm font-semibold text-primary-foreground shadow-elegant hover:scale-105 transition-transform"
              >
                Explore Collection
              </Link>
              <div className="h-[1px] w-12 bg-border" />
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            <div className="relative aspect-square w-full max-w-[450px]">
              <div className="absolute inset-0 animate-pulse rounded-full border border-accent/20" />
              <div className="h-full w-full overflow-hidden rounded-full border-8 border-card shadow-2xl">
                <img src={heroImg} className="h-full w-full object-cover scale-110 hover:scale-100 transition-transform duration-[2s]" alt="Legacy Collection" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- ADVANCED CONTACT STRIP --- */}
      <section className="bg-primary py-8 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center font-light tracking-wide md:text-left">
              ለወዳጅ ዘመድዎ የሚሆን ልዩ መንፈሳዊ ስጦታዎችን ለማዘዝ ዝግጁ ነን።
            </p>
            <div className="flex items-center gap-8 font-display text-2xl font-medium tracking-tighter">
              <a href="tel:0963469973" className="hover:text-accent transition-colors">0963 46 99 73</a>
              <span className="opacity-30">|</span>
              <a href="tel:0973133334" className="hover:text-accent transition-colors">0973 13 33 34</a>
            </div>
          </div>
        </div>
      </section>

      {/* --- REFINED PRODUCT GRIDS --- */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex items-end justify-between border-b border-border pb-8"
        >
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent">Soulful Selects</span>
            <h2 className="mt-2 font-display text-4xl font-bold text-primary md:text-5xl">
              Chosen for your Spirit
            </h2>
          </div>
          <Link
            to="/shop"
            className="group hidden text-xs font-bold uppercase tracking-widest text-foreground md:block"
          >
            View full gallery <span className="inline-block transition-transform group-hover:translate-x-2">→</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-20 sm:grid-cols-2 lg:grid-cols-4">
          {displayedProducts.map((p, i) => (
            <motion.div 
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <ProductCard product={p} />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}