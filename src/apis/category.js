import httpInstance from "@/utils/http";

export function getCategoryAPI(id) {
    return httpInstance({
        method: "get",
        url: "/category",
        params: {
            id,
        },
    });
}
