import { create } from "zustand";
import toast from "react-hot-toast";
import prisma from "@/lib/db";

const useCart = create((set, get) => ({
  items: [],
  async loadCart(userId) {
    const cart = await prisma.cart.findUnique({ where: { userId } });
    if (cart) {
      set({ items: cart.items });
    }
  },
  async addItem(item, userId) {
    const currentItems = get().items;
    const existingItem = currentItems.find((i) => i.id === item.id);
    if (existingItem) {
      return toast.error("Item already in cart");
    }

    const updatedItems = [...currentItems, item];
    await prisma.cart.upsert({
      where: { userId },
      update: { items: updatedItems },
      create: { userId, items: updatedItems },
    });

    set({ items: updatedItems });
    toast.success("Item added to cart");
  },
  async removeItem(id, userId) {
    const updatedItems = get().items.filter((i) => i.id !== id);
    await prisma.cart.upsert({
      where: { userId },
      update: { items: updatedItems },
      create: { userId, items: updatedItems },
    });

    set({ items: updatedItems });
    toast.success("Item removed from cart");
  },
  async clearCart(userId) {
    await prisma.cart.upsert({
      where: { userId },
      update: { items: [] },
      create: { userId, items: [] },
    });

    set({ items: [] });
  },
  async incrementQuantity(id, userId) {
    const updatedItems = get().items.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    await prisma.cart.upsert({
      where: { userId },
      update: { items: updatedItems },
      create: { userId, items: updatedItems },
    });

    set({ items: updatedItems });
  },
  async decrementQuantity(id, userId) {
    const updatedItems = get().items
      .map((item) => {
        if (item.id === id) {
          if (item.quantity === 1) {
            // Remove item from cart if quantity becomes 0
            return null;
          }
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
      .filter(Boolean); // Remove null values from the array

    await prisma.cart.upsert({
      where: { userId },
      update: { items: updatedItems },
      create: { userId, items: updatedItems },
    });

    set({ items: updatedItems });
  },
}));

export default useCart;