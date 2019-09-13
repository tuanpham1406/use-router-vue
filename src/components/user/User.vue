<template>
    <div class="mt-3">
        <h1 class="text-center">User Manager</h1>
        <p class="text-center">This is area to manage user of webside</p>
        <hr>
        <button class="btn btn-primary btn-block" @click="backHome">Go to Home</button>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        methods: {
            backHome() {
                this.$router.push('/');
            },
            // goDetail() {
            //     this.$router.push('/user/1')
            // }
        }
    }
</script>

<style scoped>

</style>
