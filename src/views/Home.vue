<template>
    <div class="home">

        <homenav></homenav>

        <!-- home about -->
        <div class="main" id="home">

            <!-- weixin 弹出框的处理, 具体调用在 HomeNav.vue 组件中-->
            <div id="showweixin" class="white_content">
                <img src='../assets/images/weixin.jpg' />
            </div>
            <div id="claosweixin" class="black_overlay" v-on:click="closeweixin" />

            <!-- header -->
            <homeheader></homeheader>

            <!-- projects -->
            <div class="news" id="project">
                <homeprojects></homeprojects>
            </div>
            <!-- //projects -->

            <!-- blogs -->
            <div class="news" id="blog">
                <homeblogs></homeblogs>
            </div>
            <!-- //blogs -->

            <!-- photos -->
            <div class="news" id="other">
                <homephotos></homephotos>
            </div>
            <!-- //photos -->

            <!-- contact -->
            <section class="wedo" id="contact">
                <homecontact></homecontact>
            </section>
            <!-- //contact -->

            <!-- footer -->
            <section id="footer">
                <homefooter></homefooter>
            </section>
            <!-- //footer -->
        </div>
    </div>
</template>
<script>
import homenav from '../components/home/HomeNav'
import homephotos from '../components/home/HomePhotos'
import homeblogs from '../components/home/HomeBlogs'
import homeprojects from '../components/home/HomeProjects'
import homecontact from '../components/home/HomeContact'
import homeheader from '../components/home/HomeHeader'
import homefooter from '../components/home/HomeFooter'
export default {
    name: 'HomePhotos',
    components: {
        homenav,
        homephotos,
        homeblogs,
        homeprojects,
        homecontact,
        homeheader,
        homefooter
    },
    // weixin弹出框的close处理
    methods: {
        closeweixin: function () {
            document.getElementById('showweixin').style.display = 'none'
            document.getElementById('claosweixin').style.display = 'none'
        }
    }
}
</script>
<style scoped>
    @import '../assets/css/bootstrap.css';
    @import '../assets/css/style.css';
    @import '../assets/css/fontawesome-all.min.css';
    /* weixin 弹出框的样式处理 */
    .white_content {
        border-radius: 20px;
        display: none;
        position: absolute;
        top: 30%;
        left: 42%;
        background-color: #FFFFFF;
        z-index: 2001;
        overflow: auto;
    }
    /* weixin 弹出框的样式处理 */
    .black_overlay {
        display: none;
        position: absolute;
        top: 0%;
        left: 0%;
        width: 100%;
        height: 100%;
        background-color: #363f48;
        z-index: 2000;
        -moz-opacity: 0.8;
        opacity: .80;
        filter: alpha(opacity=50);
    }
</style>
