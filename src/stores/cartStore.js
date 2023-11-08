import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { useUserStore } from "./user";
import {
    insertCartAPI,
    findNewCartListAPI,
    delCartAPI,
    updateCartAPI,
} from "@/apis/cart";

export const useCartStore = defineStore(
    "cart",
    () => {
        const userStore = useUserStore();
        const isLoging = computed(() => userStore.userInfo.token);
        const cartList = ref([]);
        const addCart = async (sku) => {
            if (isLoging.value) {
                //loging api
                await insertCartAPI({ skuId: sku.skuId, count: sku.count });
                await updateNewList();
            } else {
                const item = cartList.value.find(
                    (item) => sku.skuId === item.skuId
                );
                if (item) {
                    item.count += sku.count;
                } else {
                    cartList.value.push(sku);
                }
            }
        };

        const updateNewList = async () => {
            const res = await findNewCartListAPI();
            cartList.value = res.result;
        };

        const delCart = async (skuId) => {
            if (isLoging.value) {
                await delCartAPI([skuId]);
                await updateNewList();
            } else {
                const idx = cartList.value.findIndex(
                    (item) => skuId === item.skuId
                );
                cartList.value.splice(idx, 1);
            }
        };

        const singleCheck = (skuId, selected) => {
            const item = cartList.value.find((item) => item.skuId == skuId);
            item.selected = selected;
        };

        const clearCart = () => {
            cartList.value = [];
        };

        const changeAllSelection = (selected) => {
            cartList.value.forEach((element) => {
                element.selected = selected;
            });
        };

        const updateCart = (skuId) => {
            if (isLoging.value) {
                const item = cartList.value.find((item) => item.skuId == skuId);
                if (item) {
                    updateCartAPI(skuId, item.selected, item.count);
                }
            }
        };

        const totalCount = computed(() => {
            return cartList.value.reduce(
                (accumulator, curretnItem) => accumulator + curretnItem.count,
                0
            );
        });

        const totalPrice = computed(() => {
            return cartList.value
                .reduce(
                    (accumulator, curretnItem) =>
                        accumulator + curretnItem.count * curretnItem.price,
                    0
                )
                .toFixed(2);
        });

        const isAllSelected = computed(() => {
            return cartList.value.every((item) => item.selected);
        });

        const selectedCount = computed(() => {
            return cartList.value.reduce(
                (acc, item) => (item.selected ? acc + item.count : acc),
                0
            );
        });
        const selectedTotalPrice = computed(() => {
            return cartList.value.reduce(
                (acc, item) =>
                    item.selected ? acc + item.count * item.price : acc,
                0
            );
        });

        const someSelected = computed(() => {
            return cartList.value.some((item) => item.selected);
        });

        return {
            someSelected,
            cartList,
            totalCount,
            totalPrice,
            selectedCount,
            selectedTotalPrice,
            isAllSelected,
            clearCart,
            addCart,
            delCart,
            changeAllSelection,
            singleCheck,
            updateNewList,
            updateCart,
        };
    },
    { persist: true }
);
