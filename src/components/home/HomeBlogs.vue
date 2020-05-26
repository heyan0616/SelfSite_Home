<template>
    <!-- blogs -->
    <div id="blogs" ref="heightref" :style="{height:fullHeight + 'px'}">
        <div class="text-left">
            <h3 class="w3_head mb-5 head">个人博客</h3>
        </div>
        <div class="row news-grids">
            <div class="sample-blog-header">
            置顶文章
            </div>
            <!-- <el-divider class="divider"></el-divider> -->
            <!--latest blog1 -->
            <div class="col-lg-6 news-grids-left">
                <div class="news_top">
                    <h4><a class="new-a" href="https://heyan.site:8001/start/BuildThisSiteTech.html">从0到1搭建个人网站-此网站为例（技术篇）</a></h4>
                    <p class="newsp">
                        个人网站的搭建本身可以不需要什么技术，网上有很多可参考的模板，也有很多详细教程，
                        如果你只是想建个站，请阅读其他文章~ <br>
                        本网站基于主流的前后端分离实践：前端基于Vue框架(Vue纯白，所以只是html模板上加了框子)；后端基于Springboot(如果需要用到的话)；
                        然后为了能用markdown写技术文章，博客系统是单独分离出来的一个服务，基于Vuepress；路由、前端服务器都使用Nginx；
                        所有部署相关都基于Docker容器；操作系统是阿里云提供的centos；后端如果用到数据库，使用基于docker的Mongodb或Mysql
                        ... ...
                        <a class="desc-a" href="https://heyan.site:8001/start/BuildThisSiteTech.html">阅读全文</a>
                    </p>
                </div>
            </div>
            <!-- <el-divider class="divider"></el-divider> -->
            <!--latest blog2 -->
            <div class="col-lg-6-1 news-grids-left">
                <div class="news_top">
                    <h4><a class='new-a' href="https://heyan.site:8001/start/BuildThisSiteNonTech.html">从0到1搭建个人网站-此网站为例（非技术篇）</a></h4>
                    <p class="newsp">
                        这是个人网站搭建的前置篇，可以想象，你要建一个网站，总得有域名吧，网站内容得有地方放吧。
                        文章会大概描述下所需环节以及简单的过程，算是给完全不在线的人一点提示吧。 <br>
                        另外，此文基于阿里云，细节、名称什么的会有所不同。但基本思路应该也大差不差。
                        <a class="desc-a" href="https://heyan.site:8001/start/BuildThisSiteNonTech.html">阅读全文</a>
                    </p>
                </div>
            </div>
            <el-divider class="divider"></el-divider>
        </div>
        <div class="link-blog-header">
        博客链接
        </div>
        <a class="btn_more btn btn-primary mt-lg-5 mt-3 agile-link-bnr" href="https://heyan.site:8001/" role="button"> 博客首页 </a>
        <a class="btn_more btn btn-primary mt-lg-5 mt-3 agile-link-bnr" href="https://heyan.site:8001/index/" role="button"> 技术专题博客 </a>
        <a class="btn_more btn btn-primary mt-lg-5 mt-3 agile-link-bnr" href="https://heyan.site:8003/" role="button">  其他博客 </a>
    </div>
    <!-- //blogs -->
</template>
<script>
export default {
    data: function () {
        return {
            fullHeight: null
        }
    },
    // created: function () {
    //     // `this` 指向 vm 实例
    //     console.log('test: ' + document.documentElement.clientHeight)
    // },
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
    .sample-blog-header{
        position: relative;
        padding-left: 2.5rem;
        color: #515a6e;
        font-size: 18px;
        padding-top: 5px;
        padding-bottom: 5px;
        font-weight: 400;
    }
    .sample-blog-header::before{
        margin-left: 1rem;
        content: "";
        display: inline-block;
        width: 5px;
        height: 100%;
        background: #54B689;
        position: absolute;
        left: 0;
        top: 0;
    }
    .link-blog-header{
        margin-top: 30px;
        position: relative;
        padding-left: 1.5rem;
        color: #515a6e;
        font-size: 18px;
        padding-top: 5px;
        padding-bottom: 5px;
        font-weight: 400;
    }
    .link-blog-header::before{
        content: "";
        display: inline-block;
        width: 5px;
        height: 100%;
        background: #54B689;
        position: absolute;
        left: 0;
        top: 0;
    }
    .head{
        background: #54B689;
        color: white;
        font-weight: 500;
        line-height: 45px;
        text-align: center;
    }
    .new-a{
        font-size: 0.8em;
        color: #515a6e;
    }
    .new-a:hover{
        color: #54B689;
    }
    .blog-date{
        padding-left: 15px;
        padding-right: 30px;
        padding-bottom: 15px;
        float: left;
        font-size: 12px;
        color: #787878;;
    }
    .desc-a{
        background: #54B689;
        font-size: 10px;
        color: #fff !important;
        padding: 2px;
    }
    .divider{
        background-color: #f2f2f2;
        margin: 20px 12px 20px 12px;
    }
    .btn_more{
        margin-top: 2rem !important;
        margin-right: 3rem;
        width: 200px;
    }
</style>
