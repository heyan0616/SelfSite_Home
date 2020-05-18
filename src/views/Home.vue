<template>
    <div class="home">

        <homenav></homenav>

        <!-- home about -->
        <div class="main" id="home">

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
    }
}
</script>
<style scoped>
    @import '../assets/css/bootstrap.css';
    @import '../assets/css/style.css';
    @import '../assets/css/fontawesome-all.min.css';
</style>
