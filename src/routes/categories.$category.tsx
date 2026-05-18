import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useMemo } from "react";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/categories/$category")({
  component: CategoryDetailPage,
});

function CategoryDetailPage() {
  const { category } = Route.useParams();

  // 2. Critical Fix: Double decoding and strict trimming
  // Sometimes routers encode characters twice (e.g., % becomes %25)
  const decodedCategory = useMemo(() => {
    try {
      return decodeURIComponent(category).trim();
    } catch (e) {
      return category.trim();
    }
  }, [category]);

  // 3. Robust Filtering
  // We trim BOTH sides to ensure a hidden space in products.ts doesn't break the match
  const filteredItems = useMemo(() => {
    return products.filter((p) => {
      const productCat = p.category ? p.category.trim() : "";
      return productCat === decodedCategory;
    });
  }, [decodedCategory]);

  // 4. Handle Not Found
  if (filteredItems.length === 0) {
    // Log to console so you can see what actually failed
    console.error("No products found for category:", decodedCategory);
    throw notFound();
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-12">
        <Link
          to="/categories"
          className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
        >
          ← Back to All Categories
        </Link>
        <h1 className="mt-4 font-display text-4xl font-bold text-foreground md:text-5xl">
          {decodedCategory}
        </h1>
        <p className="mt-2 text-muted-foreground">Showing {filteredItems.length} items</p>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {filteredItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
