<template>
    <div>
        <h1>User Details</h1>
        <p>ID User: {{id}} </p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: this.$route.params.id
            }
        },
        watch: {
            '$route'(to) {
                this.id = to.params.id
            }
        }
    }
</script>

<style scoped>

</style>
