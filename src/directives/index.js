import { useIntersectionObserver } from "@vueuse/core";

export const lazyPlugin = {
    install(app) {
        app.directive("img-lazy", {
            mounted(el, biding) {
                const { stop } = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        if (isIntersecting) {
                            el.src = biding.value;
                            stop(); // unsubscribe observer
                        }
                    }
                );
            }
        });
    },
};
