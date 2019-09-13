<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Logo</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <router-link tag="li" class="nav-item" to="/" active-class="active" exact><a class="nav-link">Home</a></router-link>
                <router-link tag="li" class="nav-item" to="/user/1" active-class="active"><a class="nav-link">User</a></router-link>
                <router-link tag="li" class="nav-item" to="/user/10" active-class="active"><a class="nav-link">Admin</a></router-link>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="search...">
                <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
</template>

<script>
    export default {}
</script>

<style scoped>

</style>
