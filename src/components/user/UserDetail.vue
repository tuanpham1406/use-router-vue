<template>
    <div>
        <h1>User Details</h1>
        <p>ID User: {{$route.params.id}} </p>
        <hr>
        <router-link tag="button"
                     class="btn btn-block btn-warning"
                     :to="link"
        >Edit
        </router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: this.$route.params.id,
                link: {
                    name: 'useredit',
                    params: {id: this.$route.params.id},
                    query: {
                        locate: 'vi',
                        browser: 'chrome'
                    }
                },
                hash: '#vue'
            }
        },
        beforeRouteEnter(to, from, next) {
            if (true) {
                next()
            } else {
                next(false)
            }
        }
    }
</script>

<style scoped>

</style>
