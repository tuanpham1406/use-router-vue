<template>
    <div>
        <page-header></page-header>
        <div class="container col-md-10">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Header from "@/components/layout/Header";

    export default {
        component: {
            pageHeader: Header
        }
    }
</script>

<style>

</style>
