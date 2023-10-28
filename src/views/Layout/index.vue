<template>
    <LayoutFixed/>
    <LayoutHeader />
    <LayoutNav />
    <RouterView />
    <LayoutFooter />
</template>

<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFixed from './components/LayoutFixed.vue'
import LayoutFooter from './components/LayoutFooter.vue'

</script>

<style lang="scss" scoped></style>