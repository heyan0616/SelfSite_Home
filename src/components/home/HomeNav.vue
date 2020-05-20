<template>
    <div class="sidenav">
        <div class="site-header">Yan He</div>
        <div class="side_top">
            <img src="../../assets/images/nav_logo.jpg" alt="news image" class="header-image">
            <div class="header-text">Hi, my name is Yan He and I'm a software engineer. Welcome to my personal website!</div>
            <ul class="header-ul">
                <li class="header-li">
                    <a href="#" class="header-a" v-on:click="showweixin">
                        <svg viewBox="0 0 24 20" width="1em" height="1em" fill="currentColor" class="ewspj560 css-17lvbxj-Svg-SocialIcon ea8ky5j0"><path fill-rule="evenodd" d="M16.053 9.336c3.35 0 6.072 2.295 6.072 5.108 0 1.573-.833 2.962-2.13 3.906a.45.45 0 00-.184.48l.296 1.204c.037.11-.092.204-.185.148l-1.5-.814a.836.836 0 00-.518-.056 6.53 6.53 0 01-1.832.24c-3.35 0-6.072-2.294-6.072-5.108 0-2.813 2.703-5.108 6.053-5.108zM9.205 3.8c3.61 0 6.608 2.166 7.2 4.998h-.277c-3.665 0-6.627 2.536-6.627 5.664 0 .481.074.962.223 1.425-.185.018-.352.018-.518.018a9.119 9.119 0 01-2.259-.296.554.554 0 00-.481.056L4.3 16.96c-.13.075-.277-.055-.24-.185l.555-1.962c.018-.13-.019-.259-.13-.333-1.592-1.11-2.61-2.776-2.61-4.627 0-3.35 3.276-6.053 7.33-6.053zm4.683 8.312a.83.83 0 00-.833.833c0 .462.37.832.833.832a.83.83 0 00.833-.832.83.83 0 00-.833-.833zm4.09 0a.83.83 0 00-.832.833c0 .462.37.832.833.832.444 0 .833-.37.833-.832a.83.83 0 00-.833-.833zm-6.311-5.11a.988.988 0 00-.981.981c0 .538.444.982.98.982a.987.987 0 00.982-.982.987.987 0 00-.981-.98zm-4.924 0a.987.987 0 00-.981.981c0 .538.444.982.98.982a.975.975 0 00.982-.982.987.987 0 00-.981-.98z"></path></svg>
                    </a>
                </li>
                <li class="header-li">
                    <a href="https://github.com/heyan0616" class="header-a">
                        <svg viewBox="0 0 24 20" width="1em" height="1em" fill="currentColor" class="ewspj560 css-mlllvu-Svg-SocialIcon ea8ky5j0"><path fill-rule="evenodd" d="M11.322 21a1.646 1.646 0 01-1.652-1.635l-.007-1.17c-3.246.706-3.931-1.377-3.931-1.377-.531-1.348-1.296-1.706-1.296-1.706-1.059-.725.08-.71.08-.71 1.17.081 1.788 1.202 1.788 1.202 1.04 1.784 2.73 1.268 3.395.97.105-.754.408-1.269.741-1.56-2.592-.295-5.316-1.297-5.316-5.767 0-1.274.456-2.315 1.203-3.132-.121-.295-.52-1.481.113-3.088 0 0 .98-.313 3.21 1.196a11.197 11.197 0 012.92-.393c.991.005 1.99.134 2.923.393 2.228-1.51 3.206-1.196 3.206-1.196.635 1.608.236 2.794.115 3.088.748.816 1.2 1.858 1.2 3.132 0 4.482-2.73 5.469-5.327 5.757.418.363.791 1.072.791 2.161 0 1.562-.006 2.2-.006 2.2A1.647 1.647 0 0113.822 21h-2.5z"></path></svg>
                    </a>
                </li>
                <li class="header-li">
                    <a href="#" class="header-a">
                        <svg viewBox="0 0 24 20" width="1em" height="1em" fill="currentColor" class="ewspj560 css-1vt1gru-Svg-SocialIcon ea8ky5j0"><path fill-rule="evenodd" d="M20.174 14.188a9.983 9.983 0 00-.63-1.166 7.287 7.287 0 00-.555-.768c-.335-.397-.663-.645-.949-.765.045-.37.067-.802.067-1.217 0-.957-.127-1.839-.337-2.484a6.196 6.196 0 00-6.192-5.77c-3.279 0-5.964 2.551-6.194 5.772-.212.647-.344 1.516-.344 2.485 0 .44.027.825.076 1.216-.281.159-.596.489-.913.886-.205.257-.41.558-.607.89-.167.284-.33.592-.48.92-.83 1.806-1.004 3.498-.388 3.782.39.18 1.006-.252 1.616-1.054a7.991 7.991 0 001.982 2.63c-.964.323-1.605.892-1.605 1.544 0 1.007 1.538.895 3.437.895 1.574 0 2.9.076 3.309-.47h.109c.053 0 .107 0 .16-.003.407.55 1.735.471 3.309.471 1.897 0 3.437.112 3.437-.895 0-.658-.656-1.234-1.643-1.556a7.98 7.98 0 002.02-2.732c.637.873 1.293 1.355 1.701 1.168.619-.28.444-1.974-.386-3.78z"></path></svg>
                    </a>
                </li>
                <li class="header-li">
                    <a href="#" class="header-a">
                        <svg viewBox="0 0 24 20" width="1em" height="1em" fill="currentColor" class="ewspj560 css-179e59o-Svg-SocialIcon ea8ky5j0"><path fill-rule="evenodd" d="M11.525 6.394c.505.507.553 1.382.23 2.43-.173.524.493.235.493.235 2.117-.887 3.964-.939 4.638.025.362.517.327 1.237-.005 2.072-.153.384.048.441.34.53 1.194.37 2.522 1.265 2.52 2.843 0 2.608-3.761 5.892-9.415 5.892-4.312 0-8.721-2.091-8.721-5.528 0-1.798 1.139-3.878 3.098-5.837 2.62-2.62 5.674-3.813 6.822-2.662zm-1.997 4.612c-3.44.342-6.05 2.447-5.826 4.708.224 2.257 3.196 3.815 6.638 3.474 3.44-.339 6.05-2.447 5.823-4.708-.22-2.257-3.192-3.815-6.635-3.474zm1.153 1.739c1.696.439 2.562 2.036 1.868 3.591-.703 1.587-2.722 2.436-4.438 1.882-1.652-.533-2.355-2.169-1.63-3.64.712-1.443 2.562-2.26 4.2-1.833zm-3.187 2.9c-.332.52-.175 1.136.353 1.377.537.244 1.25.011 1.584-.52.327-.536.155-1.147-.385-1.38-.533-.223-1.222.007-1.552.523zm2.29-.846c-.118.2-.055.433.152.516.206.086.473-.011.593-.218.115-.21.04-.442-.166-.516-.204-.08-.459.017-.58.218zm5.955-11.1a5.498 5.498 0 015.238 1.696 5.49 5.49 0 011.15 5.379.795.795 0 11-1.514-.488 3.91 3.91 0 00-4.541-5.031.794.794 0 11-.333-1.555zm.59 2.766a2.679 2.679 0 013.11 3.445.686.686 0 01-1.305-.421 1.31 1.31 0 00-1.52-1.684.684.684 0 11-.284-1.34z"></path></svg>
                    </a>
                </li>
            </ul>
            <hr>
            <!-- header -->
            <!-- <header>
                <div class="container-fluid px-lg-5 ">
                    <nav class="mnu mx-auto">
                        <label for="drop" class="toggle">Menu</label>
                        <input type="checkbox" id="drop">
                            <ul class="menu">
                                <li class="mt-sm-3"><a href="#home">Home</a></li>
                                <li class="mt-sm-3"><a href="#project" class="scroll">Projects</a></li>
                                <li class="mt-sm-3"><a href="#blog" class="scroll">Yan's Blog</a></li>
                                <li class="mt-sm-3"><a href="#other" class="scroll">Others</a></li>
                                <li class="mt-sm-3"><a href="#contact" class="scroll">Contact</a></li>
                            </ul>
                    </nav>
                </div>
            </header> -->
            <ul class="nav-ul">
                <li class="nav-item">
                    <a class="nav-link" href="#home">
                        <svg class="nav-svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
                        About Me
                    </a>
				</li>
                <li class="nav-item">
					<a class="nav-link" href="#project">
                        <svg class="nav-svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="briefcase" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"></path></svg><!-- <i class="fas fa-briefcase fa-fw mr-2"></i> -->
                        Projects
                    </a>
				</li>
                <li class="nav-item">
					<a class="nav-link" href="#blog">
                        <svg class="nav-svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="blog" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M172.2 226.8c-14.6-2.9-28.2 8.9-28.2 23.8V301c0 10.2 7.1 18.4 16.7 22 18.2 6.8 31.3 24.4 31.3 45 0 26.5-21.5 48-48 48s-48-21.5-48-48V120c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24v248c0 89.5 82.1 160.2 175 140.7 54.4-11.4 98.3-55.4 109.7-109.7 17.4-82.9-37-157.2-112.5-172.2zM209 0c-9.2-.5-17 6.8-17 16v31.6c0 8.5 6.6 15.5 15 15.9 129.4 7 233.4 112 240.9 241.5.5 8.4 7.5 15 15.9 15h32.1c9.2 0 16.5-7.8 16-17C503.4 139.8 372.2 8.6 209 0zm.3 96c-9.3-.7-17.3 6.7-17.3 16.1v32.1c0 8.4 6.5 15.3 14.8 15.9 76.8 6.3 138 68.2 144.9 145.2.8 8.3 7.6 14.7 15.9 14.7h32.2c9.3 0 16.8-8 16.1-17.3-8.4-110.1-96.5-198.2-206.6-206.7z"></path></svg><!-- <i class="fas fa-blog fa-fw mr-2"></i> -->
                        Yan's Blog
                    </a>
				</li>
                <li class="nav-item">
					<a class="nav-link" href="#other">
                        <svg class="nav-svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="laptop-code" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path></svg><!-- <i class="fas fa-laptop-code fa-fw mr-2"></i> -->
                        Others
                    </a>
				</li>
                <li class="nav-item">
					<a class="nav-link" href="#contact">
                        <svg class="nav-svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope-open-text" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z"></path></svg><!-- <i class="fas fa-envelope-open-text fa-fw mr-2"></i> -->
                        Contact
                    </a>
				</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'wechat',
    methods: {
        // weixin click事件处理
        showweixin: function (event) {
            document.getElementById('showweixin').style.display = 'block'
            document.getElementById('closeweixin').style.display = 'block'
        }
    }
}
</script>
<style scoped>
    .site-header{
        color: #fff;
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
        --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    }
    .header-image{
        width: 140px;
        border-radius: 50% !important;
        vertical-align: middle;
        border-style: none;
        text-align: center !important;
        margin-bottom: 1rem !important;
    }
    .header-text{
        font-size: 0.875rem;
        margin-bottom: 1rem !important;
        color: #fff;
        overflow-y: auto;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
        --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    }
    .header-ul{
        padding-bottom: .5rem !important;
        padding-top: .5rem !important;
        margin-bottom: 1rem;
    }
    .header-li{
        margin-right: .5rem;
        display: inline-block;
        color: #fff;
    }
    .header-a{
        width: 32px;
        height: 32px;
        padding-top: 5px;
        display: inline-block;
        text-align: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        background-color: #fff;
        color: #54B689;
        text-decoration: none;
    }
    .header-svg{
        overflow: visible;
        width: 1.25em;
        display: inline-block;
        font-size: inherit;
        height: 1em;
        vertical-align: -.125em;
    }
    .nav-ul{
        text-align: left !important;
        flex-direction: column !important;
        padding-top: 40px;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px;
        padding-inline-end: 40px;
    }
    .nav-item{
        font-weight: bold;
        padding-top: 10px;
    }
    .nav-item:hover{
        background-color:#4CA47B;
    }
    .nav-link{
        display: block;
        padding: .5rem 1rem;
        color: rgba(255,255,255,0.8);
    }
    .nav-svg{
        overflow: visible;
        width: 1.25em;
        margin-right: .5rem !important;
        text-align: center;
        display: inline-block;
        font-size: inherit;
        height: 1em;
        vertical-align: -.125em;
    }
    .black_overlay {
        display: none;
        position: absolute;
        top: 0%;
        left: 0%;
        width: 100%;
        height: 100%;
        background-color: #00C0A5;
        z-index: 1001;
        -moz-opacity: 0.8;
        opacity: .80;
        filter: alpha(opacity=50);
    }
    .white_content {
        border-radius: 20px;
        display: none;
        position: absolute;
        top: 30%;
        left: 40%;
        background-color: #FFFFFF;
        z-index: 1002;
        overflow: auto;
    }
</style>
