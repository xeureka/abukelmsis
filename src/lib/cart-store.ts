import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { Product } from "./products";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  add: (product: Product, qty?: number) => { ok: boolean };
  remove: (id: string) => void;
  setQuantity: (id: string, qty: number) => void;
  clear: () => void;
  subtotal: () => number;
  count: () => number;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      add: (product, qty = 1) => {
        const existing = get().items.find((i) => i.id === product.id);
        
        set((state) => {
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === product.id ? { ...i, quantity: i.quantity + qty } : i,
              ),
            };
          }
          return {
            items: [
              ...state.items,
              {
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: qty,
              },
            ],
          };
        });
        return { ok: true };
      },
      remove: (id) =>
        set((state) => ({ items: state.items.filter((i) => i.id !== id) })),

      // ✅ Unlimited quantity logic
      setQuantity: (id, qty) =>
        set((state) => ({
          items: state.items.map((i) =>
            i.id === id 
              ? { ...i, quantity: Math.max(1, qty) } 
              : i
          ),
        })),

      clear: () => set({ items: [] }),
      subtotal: () =>
        get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
      count: () => get().items.reduce((n, i) => n + i.quantity, 0),
    }),
    {
      name: "maison-cart",
      storage: createJSONStorage(() =>
        typeof window === "undefined"
          ? { getItem: () => null, setItem: () => {}, removeItem: () => null }
          : window.localStorage,
      ),
    },
  ),
);