import httpInstance from "@/utils/http";

export function getBannerAPI(params = {}) {
    const { distributionSite = "1" } = params;
    return httpInstance({
        method: "get",
        url: "/home/banner",
        params: {
            distributionSite,
        },
    });
}

export function getNewAPI() {
    return httpInstance({
        method: "get",
        url: "/home/new",
    });
}

export function getHotAPI() {
    return httpInstance({
        method: "get",
        url: "/home/hot",
    });
}

export const getGoodsAPI = () => {
    return httpInstance({
        url: "/home/goods",
    });
};
