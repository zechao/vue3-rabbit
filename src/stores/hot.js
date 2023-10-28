import { ref } from "vue";
import { defineStore } from "pinia";
import { getHotAPI } from "@/apis/home";

export const useHotStore = defineStore("hot", () => {
    let hotList = ref([]);

    const getHot = async () => {
        const res = await getHotAPI();
        hotList.value = res.data.result;
    };

    return { hotList, getHot };
});
