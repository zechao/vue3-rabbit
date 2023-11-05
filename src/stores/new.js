import { ref } from "vue";
import { defineStore } from "pinia";
import { getNewAPI } from "@/apis/home";

export const useNewStore = defineStore("new", () => {
    let newList = ref([]);

    const getNew = async () => {
        const res = await getNewAPI();
        newList.value = res.result;
    };

    return { newList, getNew };
});
