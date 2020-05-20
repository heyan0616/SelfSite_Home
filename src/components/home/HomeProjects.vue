<template>
    <!-- projects -->
    <div id="blogs" :style="{height:fullHeight + 'px', width:fullWidth + 'px'}">
        <h3 class="w3_head mb-5 head">我的项目</h3>
        <div class="row service_w3top mt-5">
            <div class="col-lg-6">
                <!-- project 1-->
                <div class="d-flex services-box">
                    <div class="icon">
                        <span class="fa fa-pencil"></span>
                    </div>
                    <div class="service-content">
                        <h4><a class='new-a' href="#home">Demo Project1</a></h4>
                        <p>
                            后续可能会把实践中的一些code,或者学习过程中的code整理成github项目放在这，配合博客使用。 <br>
                            也可能是一些自己觉着有趣的项目... 再看吧~~
                            <a class="desc-a" href="#home">project link</a>
                        </p>
                    </div>
                </div>
                <!-- project 2-->
                <!-- <div class="d-flex services-box">
                    <div class="icon">
                        <span class="fa fa-pencil"></span>
                    </div>
                    <div class="service-content">
                        <h4><a class='new-a' href="http://www.baidu.com">Demo Project2</a></h4>
                        <p>
                            This is a demo spring boot project for test purpose. You can link to github to check the source project code.<br>
                            thanks for checking
                        </p>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
    <!-- //projects -->
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
    .head{
        background: #e6a23c;
        color: white;
        font-weight: 500;
        line-height: 45px;
        text-align: center;
    }
    .new-a{
        color: #515a6e;
    }
    .new-a:hover{
        color: #e6a23c;
    }
    .desc-a{
        background: #e6a23c;
        font-size: 10px;
        color: #fff !important;
        padding: 2px;
    }
</style>
