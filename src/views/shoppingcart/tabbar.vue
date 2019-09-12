<template>
    <div class="nav">
        <div @click="historyGo"><i class="iconfont icon-sdf"></i></div>
        <p><slot name="content"></slot></p>
        <slot name="result"></slot>
    </div>
</template>

<script>
export default {
    methods: {
        historyGo () {
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="scss" scoped>
    .nav{
        width:100%;
        height: 0.5rem;
        background:white;
        display:flex;
        justify-content: space-between;
        text-align:center;
        line-height:.5rem;
        font-weight: bold;
        box-sizing: border-box;
        border-bottom:1px solid #f1f1f1;
        div{
            width:.5rem;
            .iconfont{
                font-size:.26rem;
            }
        }
        p{
            flex:1;
            font-size:.18rem;
        }
    }
</style>