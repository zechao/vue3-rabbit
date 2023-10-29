import { ref } from "vue";
import { defineStore } from "pinia";
import { getGoodsAPI } from "@/apis/home";

export const useGoodsStore = defineStore("good", () => {
    let goodsList = ref([]);

    const getGoods = async () => {
        const res = await getGoodsAPI();
        goodsList.value = res.data.result;
    };

    return { goodsList, getGoods };
});
