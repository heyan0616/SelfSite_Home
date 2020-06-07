<template>
    <!-- photos -->
    <div id="contact" ref="heightref" :style="{height:fullHeight + 'px'}">
        <h3 class="w3_head mb-5">联系方式</h3>
        <p class="banp mt-5">
            No need contact me as i know nothing !
        </p>
    </div>
    <!-- //photos -->
</template>
<script>
export default {
    data: function () {
        return {
            fullHeight: null
        }
    },
    mounted: function () {
        this.fullHeight = document.documentElement.clientHeight > (this.$refs.heightref.offsetHeight + 100) ? document.documentElement.clientHeight : (this.$refs.heightref.offsetHeight + 100)
        // console.log('fullHeight: ' + this.fullHeight)
        // console.log('clientHeight: ' + document.documentElement.clientHeight)
        // console.log('offsetHeight: ' + this.$refs.testref.offsetHeight)
        this.$forceUpdate()
    }
}
</script>
<style scoped>
    .new-p{
        color: #515a6e;
        text-align: center;
        font-size: 12px;
    }
</style>
