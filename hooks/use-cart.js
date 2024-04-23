import {create} from "zustand";


import {persist, createJSONStorage} from "zustand/middleware";
import toast from "react-hot-toast";


const useCart = create(
    persist((set, get) => ({ 
        items: [],
        addItem: (item) => {
            const currentItems = get().items;
            const existingItem = currentItems.find((i) => i.id === item.id);

            if(existingItem){
                return toast.error("Item already in cart");
            }

            set({items: [...currentItems, item]});
            toast.success("Item added to cart");
        },
        removeItem: (id) => {
            set({items: get().items.filter((i) => i.id !== id)});
            toast.success("Item removed from cart");
        },
        clearCart: () => {
            set({ items: [] });
        },
        incrementQuantity: (id) => {
        const updatedItems = get().items.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });

        set({ items: updatedItems });
      },
      decrementQuantity: (id) => {
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

        set({ items: updatedItems });
      },
    }),
     {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage),
    })
    );

export default useCart;
