import { ref } from "vue";
import { defineStore } from "pinia";
import { getBannerAPI } from "@/apis/home";

export const useBannerStore = defineStore("banner", () => {
    let bannerList = ref([]);

    const getBanner = async () => {
        const res = await getBannerAPI();
        bannerList.value = res.data.result;
    };

    return { bannerList, getBanner };
});
