import httpInstance from "@/utils/http";

export function getCategoryAPI() {
    return httpInstance({
        method: "get",
        url: "/home/category/head",
    });
}
