<template>
    <div  class="text-center">
        <h3>Errors</h3>
        <p>Have some errors ...</p>
        <button class="btn btn-primary" @click="$router.push({name: 'homepage'})">Back to Home</button>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
    .text-center {
        color: red;
    }
</style>
