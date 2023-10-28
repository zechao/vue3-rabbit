<template>
    <div class="container">
        <HomeCategory />
        <HomeBanner />
    </div>
    <HomeNew />
    <HomeHot />
    <HomeProduct />
    <HomePanel title="人气推荐" subTitle="人气推荐 好多商品">
        <div></div>
    </HomePanel>
</template>

<script setup>
import HomeBanner from './components/HomeBanner.vue'
import HomeCategory from './components/HomeCategory.vue'
import HomeNew from './components/HomeNew.vue'
import HomeProduct from './components/HomeProduct.vue'
import HomeHot from './components/HomeHot.vue'
import HomePanel from './components/HomePanel.vue'



import { onMounted } from 'vue'
import { useBannerStore } from '@/stores/banner'

const bannerStore = useBannerStore()

onMounted(() => {
    bannerStore.getBanner()
})
</script>


<style lang="scss" scoped></style>
