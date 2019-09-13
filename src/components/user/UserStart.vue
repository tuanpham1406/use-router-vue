<template>
    <div>
        <h3>Please select one user to manage:</h3>
        <ul class="list-group">
            <router-link tag="li" to="/user/1" class="list-group-item" style="cursor: pointer">User 01</router-link>
            <router-link tag="li" to="/user/2" class="list-group-item" style="cursor: pointer">User 02</router-link>
            <router-link tag="li" to="/user/3" class="list-group-item" style="cursor: pointer">User 03</router-link>
        </ul>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>

</style>
