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
    }
    ), {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage),
    })
    );

export default useCart;
