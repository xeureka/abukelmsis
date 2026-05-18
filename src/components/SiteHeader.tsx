import { Link, useRouterState, useNavigate } from "@tanstack/react-router";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart-store";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.jpg";

const links = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/categories", label: "Categories" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const { location } = useRouterState();
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const update = () => setCount(useCart.getState().count());
    update();
    return useCart.subscribe(update);
  }, []);

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    navigate({ to: "/shop", search: q ? { q } : undefined } as never);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl antialiased">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6">
        {/* Mobile Menu Toggle: Visible ONLY on very small screens (below sm) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card transition-colors hover:border-primary sm:hidden"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>

        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="አቡቀለምሲስ logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-contain shadow-sm sm:h-11 sm:w-11"
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-semibold tracking-tight text-primary sm:text-xl">
              አቡቀለምሲስ
            </span>
            <span className="hidden text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground xs:block">
              Abukelemsis
            </span>
          </span>
        </Link>

        {/* Navigation: Hidden on small mobile, flex on Tablet (sm) and Desktop */}
        <nav className="hidden items-center gap-4 sm:flex md:gap-8">
          {links.map((l) => {
            const active = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`text-[10px] font-bold uppercase tracking-[0.15em] transition-colors md:text-[11px] ${
                  active ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions (Search & Cart) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <form
            onSubmit={onSearch}
            className="hidden items-center rounded-full border border-border bg-card px-3 py-1.5 lg:flex"
          >
            <Search className="h-3.5 w-3.5 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search…"
              className="ml-2 w-24 bg-transparent text-xs font-medium outline-none placeholder:text-muted-foreground/50 xl:w-36"
            />
          </form>
          <Link
            to="/cart"
            className="relative inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-sm font-semibold transition-colors hover:border-primary hover:text-primary sm:px-4"
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="hidden md:inline text-xs">Bag</span>
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[9px] font-bold text-accent-foreground shadow-sm">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Slide-down Navigation (Visible ONLY when toggled on mobile) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-border bg-background sm:hidden"
          >
            <div className="flex flex-col space-y-1 p-6">
              {links.map((l) => {
                const active = location.pathname === l.to;
                return (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-[0.2em] transition-colors ${
                      active
                        ? "bg-accent/10 text-primary"
                        : "text-muted-foreground hover:bg-secondary/50"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
