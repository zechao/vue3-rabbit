import { createRouter, createWebHistory } from "vue-router";

import Login from "@/views/Login/index.vue";
import Layout from "@/views/Layout/index.vue";
import Home from "@/views/Home/index.vue";
import Category from "@/views/Category/index.vue";
import SubCategory from "@/views/SubCategory/index.vue";
import Detail from "@/views/Detail/index.vue";
import CartList from "@/views/CartList/index.vue";
import Checkout from "@/views/Checkout/index.vue";
import Pay from "@/views/Pay/index.vue";
import PayBack from "@/views/Pay/PayBack.vue";
import Member from "@/views/Member/index.vue";
import UserInfo from "@/views/Member/components/UserInfo.vue";
import UserOrder from "@/views/Member/components/UserOrder.vue";
import { ElMessage } from "element-plus";
import { useUserStore } from "@/stores/user";
import {computed} from 'vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: Layout,
            children: [
                {
                    path: "",
                    component: Home,
                },
                {
                    path: "category/:id",
                    component: Category,
                },
                {
                    path: "category/sub/:id",
                    component: SubCategory,
                },
                {
                    path: "cartlist",
                    component: CartList,
                },
                {
                    path: "detail/:id",
                    component: Detail,
                },
                {
                    path: "checkout",
                    component: Checkout,
                    meta: {
                        requireLogin: true,
                    },
                },
                {
                    path: "pay",
                    component: Pay,
                    meta: {
                        requireLogin: true,
                    },
                },
                {
                    path: "paycallback",
                    component: PayBack,
                    meta: {
                        requireLogin: true,
                    },
                },

                {
                    path: "/member",
                    component: Member,
                    meta: {
                        requireLogin: true,
                    },
                    children: [
                        {
                            path: "",
                            component: UserInfo,
                            meta: {
                                requireLogin: true,
                            },
                        },
                        {
                            path: "order",
                            component: UserOrder,
                            meta: {
                                requireLogin: true,
                            },
                        },
                    ],
                },
            ],
        },
        {
            path: "/login",
            component: Login,
        },
    ],
    // router behaviour
    scrollBehavior() {
        return {
            top: 0,
        };
    },
});

router.beforeEach((to) => {
    const userStore = useUserStore();
    const isLoging = computed(() => userStore.userInfo.token);

    if (to.meta.requireLogin && !isLoging.value && to.path !== "/login") {
        ElMessage({
            type: "warning",
            message: "请先登陆",
        });
        return { path: "/login" };
    }
});

export default router;
