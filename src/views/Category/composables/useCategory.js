import { useRoute } from "vue-router";
import { getCategoryAPI } from "@/apis/category";
import { ref, watch } from "vue";

export function useCategory() {
    const route = useRoute();
    // fetch the information when params change
    const categoryData = ref({});
    watch(
        () => route.params.id,
        async (newId) => {
            const res = await getCategoryAPI(newId);
            categoryData.value = res.data.result;
        },
        { immediate: true }
    );
    return { categoryData };
}
