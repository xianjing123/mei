<template>
    <div>shoppingcart</div>
</template>

<script>
export default {
    mounted () {
        this.$store.commit('tabbarFalse')
    },
    destroyed () {
        this.$store.commit('tabbarTrue')
    }
}
</script>