import { create } from "zustand";
import toast from "react-hot-toast";
import prisma from "@/lib/db";
import axios from "axios";

const useCart = create((set, get) => ({
  items: [],
  async loadCart(email) {
    console.log("the email in the useCart is ", email)
    const cart = await axios.get(`/api/cart/${email}`)
      console.log("the cart in hook ", cart)
      set({ items: cart.data.items });
  },
 async addItem(item, email) {
  const currentItems = get().items;
  const existingItem = currentItems.find((i) => i.id === item.id);
  if (existingItem) {
    return toast.error("Item already in cart");
  }

  const updatedItems = [...currentItems, item];
  console.log("updated items are", updatedItems, email);

  try {
    const response = await axios.patch("/api/cart", { updatedItems, email });
    if (response.status === 200) {
      set({ items: updatedItems });
      toast.success("Item added to cart");
    } else {
      console.error(`Error adding item to cart: ${response.status}`);
    }
  } catch (error) {
    console.error("Error adding item to cart:", error);
  }
},
  async removeItem(id, email) {
    const updatedItems = get().items.filter((i) => i.id !== id);
     await axios.patch(`/api/cart`, { updatedItems,  email }).then((res) => {
      set({ items: updatedItems });
      toast.success("Item removed from cart");
    }
    );
  },
  async clearCart(email) {
    try {
    const updatedItems = [];
    const response = await axios.patch("/api/cart", { updatedItems, email });
    if (response.status === 200) {
      set({ items: updatedItems });
      toast.success("Cart Empty");
    } else {
      console.error(`Error in cart: ${response.status}`);
    }
  } catch (error) {
    console.error("Error in cart:", error);
  }
  },
  async incrementQuantity(id, email) {
    const updatedItems = get().items.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    try {
    const response = await axios.patch("/api/cart", { updatedItems, email });
    if (response.status === 200) {
      set({ items: updatedItems });
      toast.success("Item incremented in cart");
    } else {
      console.error(`Error in cart: ${response.status}`);
    }
  } catch (error) {
    console.error("Error adding item to cart:", error);
  }
  },
  async decrementQuantity(id, email) {
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

    try {
    const response = await axios.patch("/api/cart", { updatedItems, email });
    if (response.status === 200) {
      set({ items: updatedItems });
      toast.success("Item added to cart");
    } else {
      console.error(`Error in cart: ${response.status}`);
    }
  } catch (error) {
    console.error("Error in decrementing quantity", error);
  }
  },
}));

export default useCart;