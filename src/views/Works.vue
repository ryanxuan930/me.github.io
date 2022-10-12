<template>
    <div class="content">
        <h2>Current</h2>
        <hr>
        <div class="context">
            <h3 class="link" @click="open('https://sports.nsysu.edu.tw')">NSYSU Sport Event Management System</h3>
            <img @click="open('https://sports.nsysu.edu.tw')" src="@/assets/NSYSUSPORT.png">
        </div>
        <div class="context">
            <h3 class="link" @click="open('https://sports.nsysu.edu.tw/2022ufag')">2022 UAAK Freshman Athletics Game</h3>
            <img @click="open('https://sports.nsysu.edu.tw/2022ufag')" src="@/assets/2022UFAG.png">
        </div>
        <div class="context">
            <h3 class="link" @click="open('https://sports.hs.ntnu.edu.tw')">HSNUA 3.0</h3>
            <img @click="open('https://sports.hs.ntnu.edu.tw')" src="@/assets/HSNUA.png">
        </div>
        <div class="context">
            <h3 class="link" @click="open('https://nsysu-athletics.github.io/site/')">NSYSU Athletics</h3>
            <img @click="open('https://nsysu-athletics.github.io/site/')" src="@/assets/NSYSUA.png">
        </div>
        <div class="context">
            <h3 class="link" @click="open('https://ryanxuan930.github.io/nsysu_campus_bus/')">NSYSU Campus Bus</h3>
            <img @click="open('https://ryanxuan930.github.io/nsysu_campus_bus/')" src="@/assets/BUS.png">
        </div>
        <h2 class="mt-10">Previous</h2>
        <hr>
        <div class="context">
            <h3>NSYSUGO &quot;Serendipity&quot; E-commerce Platform</h3>
            <img src="@/assets/NSYSUGO.png">
        </div>
        <h2 class="mt-10">Private</h2>
        <hr>
        <div class="context">
            <h3>NSYSU Interneational Affairs Information Management System</h3>
            <img src="@/assets/NIAMS.png">
        </div>
        <div class="context">
            <h3>IRIS 2 (Institutional Research Information System 2nd Generation for NSYSU)</h3>
            <div>Under Development</div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        function open(url){
            window.open(url);
        }
        return {
            open,
        }
    },
}
</script>

<style lang="less" scoped>
h2 {
    font-size: 24pt;
    margin-bottom: 10px;
    @media screen and (max-width: 1000px){
        font-size: 20pt;
    }
}
hr {
    border: 2px #242424 solid;
    margin: 10px 0;
}
.context {
    h3 {
        font-size: 20pt;
        margin-bottom: 20px;
        @media screen and (max-width: 1000px){
        font-size: 16pt;
    }
    }
    font-size: 18pt;
    margin-bottom: 20px;
    @media screen and (max-width: 1000px){
        font-size: 14pt;
    }
}
.link {
    display: inline-block;
    text-decoration: none;
    color: #353535;
    border-bottom: 3px #FFFFFF solid;
    cursor: pointer;
    &:hover {
        border-bottom: 3px rgb(10,132,255) solid;
        transition-duration: 0.3s;
    }
}
img {
    width: 100%;
    cursor: pointer;
    box-shadow: #E0E0E0 1px 1px 5px;
    &:hover {
        box-shadow: #D0D0D0 1px 1px 10px;
        transition-duration: 0.5s;
    }
}
</style>