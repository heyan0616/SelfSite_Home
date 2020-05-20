<template>
    <!-- photos -->
    <div id="contact" :style="{height:fullHeight + 'px'}">
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
            fullHeight: document.documentElement.clientHeight > 768 ? document.documentElement.clientHeight : 768
        }
    }
    // created: function () {
    //     // `this` 指向 vm 实例
    //     console.log('fullHeight: ' + this.fullHeight)
    // }
}
</script>
<style scoped>
    .new-p{
        color: #515a6e;
        text-align: center;
        font-size: 12px;
    }
</style>
