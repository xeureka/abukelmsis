import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { products } from "@/lib/products";

export const Route = createFileRoute("/categories/")({
  component: CategoriesPage,
});

function CategoriesPage() {
  // Group products by category to get one cover image per category
  const grouped = useMemo(() => {
    const map = new Map();
    products.forEach((p) => {
      const cat = p.category.trim();
      if (!map.has(cat)) map.set(cat, p.image);
    });
    return Array.from(map.entries());
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="font-display text-4xl font-bold mb-10">Shop by Category</h1>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {grouped.map(([category, image]) => (
          <Link
            key={category}
            to="/categories/$category"
            params={{ category: category }} // Passing the category to the URL
            className="group relative aspect-square overflow-hidden rounded-xl border bg-muted"
          >
            <img
              src={image}
              alt={category}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <h2 className="text-white font-bold text-center text-lg drop-shadow-md">
                {category}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
