import { ref } from "vue";
import { defineStore } from "pinia";
import { getCategoryAPI } from "@/apis/layout";

export const useCategoryStore = defineStore("category", () => {
    let categoryList = ref([]);

    const getCategory = async () => {
        const res = await getCategoryAPI();
        categoryList.value = res.data.result;
    };

    return { categoryList, getCategory };
});
