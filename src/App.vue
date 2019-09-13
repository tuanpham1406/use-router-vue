<template>
    <div>
        <router-view name="header"></router-view>
        <div class="container col-md-10">
            <transition name="slide">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style>
    .slide-leave-active {
        transition: opacity 1s ease;
        opacity: 0;
        animation: slideout 1s ease-out forwards;
    }

    .slide-leave {
        opacity: 1;
        transform: translateX(0);
    }
</style>
