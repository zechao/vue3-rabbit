import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCartStore = defineStore(
    "cart",
    () => {
        const cartList = ref([]);
        const addCart = (sku) => {
            const item = cartList.value.find(
                (item) => sku.skuId === item.skuId
            );
            if (item) {
                item.count += sku.count;
            } else {
                cartList.value.push(sku);
            }
        };

        const delCart = (skuId) => {
            const idx = cartList.value.findIndex(
                (item) => skuId === item.skuId
            );
            cartList.value.splice(idx, 1);
        };

        const totalCount = computed(() => {
            return cartList.value.reduce(
                (accumulator, curretnItem) => accumulator + curretnItem.count,
                0
            );
        });

        const totalPrice = computed(() => {
            return cartList.value.reduce(
                (accumulator, curretnItem) =>
                    accumulator + curretnItem.count * curretnItem.price,
                0
            );
        });

        return {
            cartList,
            totalCount,
            totalPrice,
            addCart,
            delCart,
        };
    },
    { persist: true }
);
