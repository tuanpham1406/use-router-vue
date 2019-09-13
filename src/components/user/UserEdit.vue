<template>
    <div>
        <h1>User Edit</h1>
        <p>User Info Client:</p>
        <ul>
            <li>Locate: {{$route.query.locate}}</li>
            <li>Locate: {{$route.query.browser}}</li>
        </ul>
        <hr>
        <button class="btn btn-block btn-danger"
                @click="status = true"
        >Something</button>
        <div style="height: 700px"></div>
        <h3 id="vue">Learn VueJs with me</h3>
        <div style="height: 1700px"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                status: false
            }
        },
        beforeRouteLeave(to, from, next) {
            if (this.status) {
                next()
            } else {
                if (confirm('Bạn có chắc chắn muốn thoát không ? Bạn chưa lưu dữ liệu của trang')) {
                    next()
                } else next(false)
            }
        }
    }
</script>

<style scoped>

</style>
