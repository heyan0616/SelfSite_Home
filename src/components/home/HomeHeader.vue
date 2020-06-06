<template>
    <!-- header -->
    <div id="header" ref="heightref" :style="{height:fullHeight + 'px'}">
        <div class="banner-text-w3ls">
            <div class="container">
                <div class="header-main">
                    <div class="header-section">
                        <h2>Yan Site</h2>
                        <div class="about-section">
                            <p class="site-header">
                                关于网站
                            </p>
                            <p class="banp">
                                Welcome and let's go !                               
                            </p>
                        </div>
                    </div>
                    <div class="header-right-section">
                        <div class="header-right-section-text">
                            {{htmlInfo}}
                        </div>
                         <div class="header-right-section-date">
                            <p style="font-size: 56px; font-weight: 600; height: 56px;
                                    line-height: 56px;margin: 0;text-align: center; color: #01aef0;">
                                    {{cday}}
                            </p>
                            <p style="argin: 0;font-size: 14px; text-align: center; color: #01aef0;">
                                {{cmonth}} {{cyear}}
                            </p>
                        </div>
                    </div>
                    <!-- <div class="test">
                        <iframe src="http://wufazhuce.com/one/2832" width="854" height="180" frameborder="0" scrolling="no"
                        ></iframe>
                    </div> -->
                    <!-- <div id="fream-section" class="ifream-section">
                        <div style="width:760px; height:1000px;margin:-679px -20px 0px 0px;">
                            <iframe v-bind:src="searchUrl" width="770" height="900" frameborder="0" scrolling="no"
                            ></iframe>
                        </div>
                    </div> -->
                </div>
                <el-divider class="divider"></el-divider>
                <div class="module-section">
                    <p class="site-header">
                        主要模块
                    </p>
                    <div class="header-item-container">
                        <li class="header-item-list">
                            <div calss="header-item-main">
                                <a href="#project">
                                    <img class="header-item-img" src="../../assets/images/about_project.png" alt="project">
                                    <div class="header-item-title">项目</div>
                                    <div class="header-item-info">个人项目，博客相关的代码，或者是发现的有意思的项目链接...</div>
                                </a>
                            </div>
                        </li>
                        <li class="header-item-list">
                            <div calss="header-item-main">
                                <a href="#blog">
                                    <img class="header-item-img" src="../../assets/images/about_blog.png" alt="blog">
                                    <div class="header-item-title">博客</div>
                                    <div class="header-item-info">基于Vuepress的个人博客系统，分为技术专题和其他零散博客...</div>
                                </a>
                            </div>
                        </li>
                        <li class="header-item-list">
                            <div calss="header-item-main">
                                <a href="#other">
                                    <img class="header-item-img" src="../../assets/images/about_other.png" alt="other">
                                    <div class="header-item-title">其他</div>
                                    <div class="header-item-info">内容和展现方式都还还不确定，先随便放了几张图片占位...</div>
                                </a>
                            </div>
                        </li>
                        <li class="header-item-list">
                            <div calss="header-item-main">
                                <a href="#contact">
                                    <img class="header-item-img" src="../../assets/images/about_contact.png" alt="contact">
                                    <div class="header-item-title">联系</div>
                                    <div class="header-item-info"></div>
                                </a>
                            </div>
                        </li>
                        <li class="header-item-list">
                            <div calss="header-item-main">
                                <a href="#header">
                                    <img class="header-item-img" src="../../assets/images/about_comments.png" alt="contact">
                                    <div class="header-item-title">Comments</div>
                                    <div class="header-item-info"></div>
                                </a>
                            </div>
                        </li>
                    </div>
                    <div class="header-modules-desc">
                        <p class="banp">
                            <span class="header-span">项目</span> - 可能配合博客，整理学习中的相关代码；
                            也可能会链接到一些有趣的项目；又或者是自己的小项目。<br />
                        </p>
                        <p class="banp">
                            <span class="header-span">博客</span> - 使用markdown写博客，博客分为两大块：以技术专题为主的技术博客,
                            和非专题的一般博客。<br />
                            技术专题博客会根据学习工作需要，转载各种自己觉的有用的知识内容
                            （<span class="header-span-warn">此处涉及转载：一般会标明出处；有时会引用多处文章，可能会遗漏，请谅解并及时告知</span>）
                            ，当然也会有原创内容<br />
                            一般博客就是普通的文章，可能是零散的技术文章、生活随笔，或者是转载的文章<br />
                        </p>
                        <p class="banp">
                            <span class="header-span">其他</span> - 暂时没想好~
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- //header -->
</template>
<script>
export default {
    data: function () {
        return {
            fullHeight: null,
            // searchUrl: null,
            htmlInfo: "愿你有追求卓越的能力和韧劲，更有接受平凡的智慧和勇气",
            cyear: 1900,
            cmonth: 1,
            cday: 1
        }
    },
    mounted: function () {
        this.fullHeight = document.documentElement.clientHeight > (this.$refs.heightref.offsetHeight + 100) ? document.documentElement.clientHeight : (this.$refs.heightref.offsetHeight + 100)

        // call api to get the one text 
        this.$axios
        .get('http://api.youngam.cn/api/one.php')
        .then(response => (this.htmlInfo = response.data.data[0].text))
        .catch(function (error) { // 请求失败处理
            console.log(error);
        });
        // get the date format
        var now = new Date()
        this.cyear = now.getFullYear() //获取完整的年份(4位)
        // var cmonth = now.getMonth() //获取当前月份(0-11,0代表1月)
        this.cmonth = now.toDateString().split(" ")[1]   // 英文month
        this.cday= now.getDate() //获取当前日(1-31)

        // var now = new Date()
        // // 2020/05/28 is the date i found this url and 2832 is the coressponding number - that is why set base as this
        // var baseDate = new Date("2020/05/28")
        // var baseCount = 2832
        // // console.log("fff = " + (parseInt(Math.abs(now.getTime()- baseDate.getTime()) /1000/60/60/24)))
        // var dayOffset = (parseInt(Math.abs(now.getTime()- baseDate.getTime()) /1000/60/60/24))
        // var urlCount = baseCount + dayOffset
        // this.searchUrl = "http://wufazhuce.com/one/" + urlCount

        // console.log('fullHeight: ' + this.fullHeight)
        // console.log('clientHeight: ' + document.documentElement.clientHeight)
        // console.log('offsetHeight: ' + this.$refs.heightref.offsetHeight)

        this.$forceUpdate()

    }
}
</script>
<style scoped>
    .ifream-section{
         width: 760px; 
         height: 180px; 
         overflow: hidden; 
         border: 0px;
    }
    .header-main{
        height: 200px;
        overflow: hidden;
    }
    @media only screen and (max-width:1600px){
        .header-main{
            height: 380px;
        }
    }
    @media only screen and (max-width:1070px){
        .header-main{
            height: 430px;
        }
    }
    @media only screen and (max-width:1180px){
        .ifream-section{
            display: none !important;
        }
    }  
    .header-section{
        float: left;
        width: 450px;
        padding-bottom: 10px;
    }
    @media only screen and (max-width:1180px){
        .header-section{
            width: 100%;
            float: none;
        }
    }
    .header-right-section{
        width: 680px; 
        height: 170px; 
        float: left; 
        background: #fafafa; 
        display: table;
        margin-right: 5%;
    }
    .header-right-section-text{
        width: 560px; 
        text-align: left; 
        vertical-align: middle;
        display: table-cell; 
        font-size: 14px; 
        color: #808695;
        padding: 5px 5%; 
        line-height: 1.67;
    }
    .header-right-section-date{
        width: 120px; 
        float: left; 
        padding: 50px 0;
    }
    @media only screen and (max-width:1070px){
        .header-right-section{
            height: 250px;
            width: 100%;
            display: block;
        }
    }
    @media only screen and (max-width:1070px){
        .header-right-section-text{
            width: 100%;
            display: block;
            padding: 5%;
        }
    }
    @media only screen and (max-width:1070px){
        .header-right-section-date{
            width: 100%;
            display: block;
            padding: 10px 0;
        }
    }
    .banner-text-w3ls h2{
        color: #01aef0;
        font-size: 2em;
        letter-spacing: 1px;
        font-weight: 600;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    }
    /* .header-up{
        height: 200px;
    } */
    .about-section{
        padding-top: 30px;
        padding-bottom: 10px;
    }
    .module-section{
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .site-header{
        position: relative;
        padding-left: 1.5rem;
        color: #515a6e;
        font-size: 18px;
        padding-top: 5px;
        padding-bottom: 5px;
        font-weight: 600;
    }
    .site-header::before{
        content: "";
        display: inline-block;
        width: 5px;
        height: 100%;
        background: #01aef0;
        position: absolute;
        left: 0;
        top: 0;
    }
    .header-span{
        color: #01aef0;
        font-weight: 400;
        font-size: 13px;
    }
    .header-span-warn{
        font-size: 12px;
        color: #ffc4c4;
    }
    .header-item-container{
        height: 250px;
    }
    .header-modules-desc{
        clear:both;
        padding-top: 20px;
    }
    .about-section .banp{
        padding-top: 20px;
    }
    .module-section .banp{
        padding-top: 10px;
    }
    .header-modules-desc .banp{
        font-size: 13px;
    }
    .header-item-list{
        width: 197px;
        position: relative;
        padding: 25px 7px 15px 7px;
        background: #f1fbff;
        margin: 30px 35px 0 0;
        list-style: none;
        float: left;
    }
    .header-item-main{
        text-decoration: none;
        position: relative;
        list-style: none;
        margin: 5px;
        padding-top: 20px;
        padding-bottom: 30px;
        background: rgb(143, 140, 140);
        transition: all .4s ease;
        backface-visibility: hidden;
    }
    .header-item-list:active, .header-item-list:focus, .header-item-list:hover{
        background:#363f48;
        color: #fff;
        transform: translateY(-3px);
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
    }
    a:hover{
        text-decoration: none;
    }
    .header-item-img{
        display: block;
        margin: 0 auto 10px;
        width: 75pt;
        height: 75pt;
        transition: all .4s ease;
        transform: translateZ(0);
        backface-visibility: hidden;
    }
    .header-item-title{
        color: #333;
        font-weight: 500;
        font-size: 15px;
        line-height: 22px;
        transition: all .4s ease;
        margin-block-start: 1em;
        margin-block-end: 1em;
        text-align: center;
    }
    .header-item-info{
        margin: 5px 5px;
        height: 40px;
        color: #777;
        font-size: 12px;
        line-height: 20px;
        transition: all .4s ease;
        margin-block-start: 2em 0.5em;
        margin-block-end: 2em 0.5em;
        /* text-align: center; */
    }
    .header-item-list:hover .header-item-img{
        transform: translateY(-3px);
    }
    .header-item-list:hover .header-item-title{
        color: #fff;
        transform: translateY(-3px);
    }
    .header-item-list:hover .header-item-info{
        color: #fff;
        transform: translateY(-3px);
    }
    .divider{
        margin: 30px 0px 20px 0px;
        background-color: #f2f2f2;
    }
</style>
