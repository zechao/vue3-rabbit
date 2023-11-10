import httpInstance from "@/utils/http";

export const getCheckInfoAPI = () => {
    return httpInstance({
        url: "/member/order/pre",
    });
};

export const deleteAddressAPI = (id) => {
    return httpInstance({
        url: `/member/address/${id}`,
        method: "DELETE",
    });
};

export const getAddressAPI = () => {
    return httpInstance({
        url: "/member/address",
    });
};

export const addAddressAPI = () => {
    return httpInstance({
        url: "/member/address",
    });
};

export const createOrderAPI = (data) => {
    return httpInstance({
        url: "/member/order",
        method: "POST",
        data,
    });
};
