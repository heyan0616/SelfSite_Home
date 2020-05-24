<template>
    <!-- header -->
    <div id="header" ref="heightref" class="header-section" :style="{height:fullHeight + 'px'}">
        <div class="banner-text-w3ls">
            <div class="container">
                <div class="mx-auto text-left">
                    <h2>Yan Site</h2>
                    <p class="site-header">
                        关于网站
                    </p>
                    <p class="banp">
                        let's go !
                    </p>
                </div>
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
                                <div class="header-item-info">if u want..</div>
                            </a>
                        </div>
                    </li>
                </div>
                <div class="header-modules-desc">
                    <p class="banp">
                        <span class="header-span">项目</span> - 可能配合博客，整理学习中的相关代码；
                        也可能会链接到一些有趣的项目；又或者是自己的小项目。<br />
                        <span class="header-span">博客</span> - 以技术内容为主，会根据学习工作需要，转载各种自己觉的有用的知识内容
                        （<span class="header-span-warn">此处涉及转载：一般会标明出处；有时会引用多处文章，可能会遗漏，请谅解并及时告知</span>）；
                        当然也会有原创内容。<br />
                        <span class="header-span">其他</span> - 没想好~
                    </p>
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
    /* .header-section{
        min-width: 1000px;
    } */
    .site-header{
        color: #515a6e;
        font-size: 18px;
        padding-top: 40px;
        padding-bottom: 10px;
        font-weight: 600;
    }
    .header-span{
        color: #2b85e4;
        font-weight: 400;
        font-size: 13px;
    }
    .header-span-warn{
        color: #F56C6C;
    }
    .header-item-container{
        height: 250px;
    }
    .header-modules-desc{
        clear:both;
        padding-top: 20px;
    }
    .header-modules-desc .banp{
        font-size: 13px;
    }
    .header-item-list{
        width: 197px;
        position: relative;
        padding: 25px 7px 15px 7px;
        background: #f9f9f9;
        margin: 30px 30px 0 0;
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
</style>
