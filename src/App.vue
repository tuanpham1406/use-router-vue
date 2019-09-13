<template>
    <div>
        <router-view name="header"></router-view>
        <div class="container col-md-10">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style>

</style>
