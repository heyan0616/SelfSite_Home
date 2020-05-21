<template>
    <!-- blogs -->
    <div id="blogs" ref="heightref" :style="{height:fullHeight + 'px'}">
        <div class="text-left">
            <h3 class="w3_head mb-5 head">个人博客</h3>
        </div>
        <div class="row news-grids">
            <!--latest blog1 -->
            <div class="col-lg-6 news-grids-left">
                <div class="news_top">
                    <h4><a class="new-a" href="https://heyan.site:8001/start/BuildThisSiteTech.html">从0到1搭建个人网站-此网站为例（技术篇）</a></h4>
                    <p class="newsp">
                        个人网站的搭建本身可以不需要什么技术，网上有很多可参考的模板，也有很多详细教程，
                        如果你只是想建个站，请阅读其他文章~ <br>
                        本网站基于主流的前后端分离实践：前端基于Vue框架(Vue纯白，所以只是html模板上加了框子)；后端基于Springboot(后端工程师，这个都知道吧)；
                        然后为了能用markdown写技术文章，博客系统是单独分离出来的一个服务，基于Vuepress；路由、前端服务器都使用Nginx；
                        所有部署相关都基于Docker容器；操作系统是阿里云提供的centos；后端如果用到数据库，使用基于docker的Mongodb或Mysql
                        ... ...
                        <a class="desc-a" href="https://heyan.site:8001/start/BuildThisSiteTech.html">阅读全文</a>
                    </p>
                </div>
            </div>
            <el-divider class="divider"></el-divider>
            <!-- <div>
                <span>
                    <div class="blog-date">By: Demo User</div>
                </span>
            </div> -->
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
            <div>
                <!-- <span>
                    <div class="blog-date">#Date:   2019/11/16</div>
                    <div class="blog-date">#By: Demo User</div>
                </span> -->
            </div>
        </div>
        <a class="btn btn-primary mt-lg-5 mt-3 agile-link-bnr" href="https://heyan.site:8001/" role="button"> > 查看更多博客内容 ... </a>
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
    .head{
        background: #54B689;
        color: white;
        font-weight: 500;
        line-height: 45px;
        text-align: center;
    }
    .new-a{
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
        margin: 12px 20px 12px 15px;
    }
</style>
