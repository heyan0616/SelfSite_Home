<template>
    <!-- photos -->
    <div id="photos" ref="heightref" :style="{height:fullHeight + 'px'}">
        <div class="text-left">
            <h3 class="w3_head mb-5 head">其他</h3>
        </div>
        <!--demo1 - element 走马灯效果-->
        <div class="sub-title-word">Demo1 - 走马灯效果</div>
        <div>
            <!--动态将图片轮播图的容器高度设置成与图片一致-->
            <!-- <el-carousel :interval="4000" type="card" height="zmdHeight + 'px'">
                <el-carousel-item v-for="item in imagebox" :key="item.id">
                    <img :src="item.idView" class="image">
                </el-carousel-item>
            </el-carousel> -->
            <el-carousel :interval="4000" type="card" height="350px">
                <el-carousel-item v-for="item in imagebox" :key="item.id">
                    <img :src="item.idView" class="image">
                </el-carousel-item>
            </el-carousel>
        </div>
        <!--分隔符-->
        <el-divider class="divider"></el-divider>
        <!--demo2 - 正常图文混合（左图片 右文字 效果）-->
        <div class="sub-title-word">Demo2 - 图文混合效果</div>
        <div class="row news-grids mt-lg-5 mt-4 text-center">
            <div class="col-md-6 gal-img">
                <a href="#home"><img src="../../assets/images/other_test.jpg" alt="news image" class="img-fluid"></a>
            </div>
            <div class="word">
                还没想好放什么在 <br>
                也许是照片 <br>
                也许是文字 <br>
                ... <br>
                也没想好怎样展示 <br>
                内容上 <br>
                形式上 <br>
                技术上 <br>
                ... <br>
                <br>
                let's see
            </div>
        </div>
        <!-- <a class="btn btn-primary mt-lg-5 mt-3 agile-link-bnr" href="#home" role="button">更多 ... </a> -->
    </div>
    <!-- //photos -->
</template>
<script>
    export default {
        name: 'zmd',
        data () {
            return {
                imagebox: [
                    { id: 0, idView: require('../../assets/images/other_test.jpg') },
                    { id: 1, idView: require('../../assets/images/other_test1.jpg') },
                    { id: 2, idView: require('../../assets/images/other_test2.jpg') },
                    { id: 4, idView: require('../../assets/images/other_test3.jpg') },
                    { id: 5, idView: require('../../assets/images/other_test4.jpg') }
                ],
                // 图片父容器高度
                zmdHeight: 700,
                // 浏览器宽度
                screenWidth: 0,
                // the height of this component
                fullHeight: null
            }
        },
        methods: {
            setSize: function () {
                // 通过浏览器宽度(图片宽度)计算高度
                this.bannerHeight = 400 / 1920 * this.screenWidth
            }
        },
        mounted () {
            // 首次加载时,需要调用一次
            this.screenWidth = window.innerWidth
            this.setSize()
            // 窗口大小发生改变时,调用一次
            window.onresize = () => {
                this.screenWidth = window.innerWidth
                this.setSize()
            }
            // reset the height of this component
            this.fullHeight = document.documentElement.clientHeight > (this.$refs.heightref.offsetHeight + 100) ? document.documentElement.clientHeight : (this.$refs.heightref.offsetHeight + 100)
            // console.log('this.$refs.heightref.offsetHeight: ' + this.$refs.heightref.offsetHeight)
            this.$forceUpdate()
        }
    }
</script>
<style scoped>
    .head{
        background: #666666;
        color: white;
        font-weight: 500;
        line-height: 45px;
        text-align: center;
    }
    .word{
        color: #515a6e;
        padding: 40px 40px;
        text-align: left;
        font-size: 14px;
    }
    .sub-title-word{
        color: #515a6e;
        padding: 10px;
        text-align: left;
        font-size: 14px;
        font-weight: 600;
    }
    img{
        /*设置图片宽度和浏览器宽度一致*/
        width:100%;
        height:inherit;
    }
</style>
