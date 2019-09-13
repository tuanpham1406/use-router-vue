<template>
    <div>
        <h1>User Details</h1>
        <p>ID User: {{$route.params.id}} </p>
        <hr>
        <router-link tag="button"
                     class="btn btn-block btn-warning"
                     :to="{name: 'useredit', params: {id: $route.params.id}, query: {locate: 'vi', browser: 'chrome'}}"
        >Edit
        </router-link>
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
